import { renderToString } from "react-dom/server";
import type { HelmetServerState } from "react-helmet-async";
import App from "./App";
import { towns } from "./data/areas";
import { counties } from "./data/counties";
import { blogPosts } from "./data/blogPosts";
import { servicePages } from "./data/servicePages";
import { serviceLocationRoutes } from "./data/serviceLocations";

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
  "/faq",
  ...servicePages.map((s) => `/${s.slug}`),
  ...towns.map((t) => `/areas/${t.slug}`),
  ...counties.map((c) => `/areas/county/${c.slug}`),
  ...blogPosts.map((p) => `/blog/${p.slug}`),
  ...serviceLocationRoutes,
];
