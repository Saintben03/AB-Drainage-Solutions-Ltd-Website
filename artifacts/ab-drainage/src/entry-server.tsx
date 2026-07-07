import { renderToString } from "react-dom/server";
import type { HelmetServerState } from "react-helmet-async";
import App from "./App";
import { towns } from "./data/areas";
import { blogPosts } from "./data/blogPosts";

export interface RenderResult {
  html: string;
  helmet: HelmetServerState | undefined;
}

export function render(url: string): RenderResult {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(<App ssrPath={url} helmetContext={helmetContext} />);
  return { html, helmet: helmetContext.helmet };
}

export const routes: string[] = [
  "/",
  "/services",
  "/about",
  "/areas",
  "/blog",
  "/gallery",
  "/contact",
  "/ab-group/construction",
  "/ab-group/fencing",
  "/ab-group/facilities",
  "/privacy-policy",
  "/terms",
  ...towns.map((t) => `/areas/${t.slug}`),
  ...blogPosts.map((p) => `/blog/${p.slug}`),
];
