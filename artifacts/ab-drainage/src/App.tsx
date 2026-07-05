import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { BookNowProvider } from "@/contexts/BookNowContext";
import NotFound from "@/pages/not-found";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Areas from "@/pages/Areas";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import ABGroupConstruction from "@/pages/ABGroupConstruction";
import ABGroupFencing from "@/pages/ABGroupFencing";
import ABGroupFacilities from "@/pages/ABGroupFacilities";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Terms from "@/pages/Terms";

const queryClient = new QueryClient();

function Router() {
  const [location] = useLocation();
  const reduced = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const isImage = (t: EventTarget | null) =>
      t instanceof HTMLImageElement || (t instanceof HTMLElement && t.tagName === "IMG");
    const onContextMenu = (e: MouseEvent) => {
      if (isImage(e.target)) e.preventDefault();
    };
    const onDragStart = (e: DragEvent) => {
      if (isImage(e.target)) e.preventDefault();
    };
    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("dragstart", onDragStart);
    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("dragstart", onDragStart);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: reduced ? 0 : 0.3, ease: "easeOut" }}
          >
            <Switch location={location}>
              <Route path="/" component={Home} />
              <Route path="/services" component={Services} />
              <Route path="/about" component={About} />
              <Route path="/areas" component={Areas} />
              <Route path="/blog" component={Blog} />
              <Route path="/blog/:slug" component={BlogPost} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/contact" component={Contact} />
              <Route path="/ab-group/construction" component={ABGroupConstruction} />
              <Route path="/ab-group/fencing" component={ABGroupFencing} />
              <Route path="/ab-group/facilities" component={ABGroupFacilities} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              <Route path="/terms" component={Terms} />
              <Route component={NotFound} />
            </Switch>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <BookNowProvider>
              <Router />
            </BookNowProvider>
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
