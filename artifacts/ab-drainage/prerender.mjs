import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, "dist/public");
const SSR_ENTRY = path.resolve(__dirname, "dist/ssr/entry-server.js");
const TEMPLATE_PATH = path.resolve(OUT_DIR, "index.html");

const { render, routes } = await import(pathToFileURL(SSR_ENTRY).href);

const template = await fs.readFile(TEMPLATE_PATH, "utf-8");

function buildHead(helmet) {
  if (!helmet) return "";
  return [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ]
    .filter(Boolean)
    .join("\n    ");
}

function outputPathFor(route) {
  if (route === "/") return path.join(OUT_DIR, "index.html");
  return path.join(OUT_DIR, route.replace(/^\//, ""), "index.html");
}

let count = 0;
for (const route of routes) {
  const { html, helmet } = render(route);
  const head = buildHead(helmet);

  let page = template.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`,
  );

  if (head) {
    page = page.replace("</head>", `    ${head}\n  </head>`);
  }

  const outFile = outputPathFor(route);
  await fs.mkdir(path.dirname(outFile), { recursive: true });
  await fs.writeFile(outFile, page, "utf-8");
  count += 1;
  console.log(`prerendered ${route} -> ${path.relative(__dirname, outFile)}`);
}

console.log(`\nPrerendered ${count} route(s).`);
