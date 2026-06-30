import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "wouter";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "ab_cookie_consent";

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [prefs, setPrefs] = useState<Omit<Consent, "necessary">>({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, []);

  const save = (consent: Consent) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    setVisible(false);
  };

  const acceptAll = () =>
    save({ necessary: true, analytics: true, marketing: true });

  const acceptNecessary = () =>
    save({ necessary: true, analytics: false, marketing: false });

  const savePrefs = () =>
    save({ necessary: true, analytics: prefs.analytics, marketing: prefs.marketing });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[150] bg-[#0f0f0f] border-t border-white/10 shadow-2xl"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="container mx-auto px-4 lg:px-8 py-5">
            <div className="flex flex-col lg:flex-row gap-5 lg:items-start">

              {/* Icon + text */}
              <div className="flex gap-4 flex-1 min-w-0">
                <div className="shrink-0 w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center mt-0.5">
                  <Cookie size={20} className="text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-white font-bold text-sm mb-1">We use cookies</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    We use essential cookies to keep the site working, and optional analytics cookies to understand how visitors use our site. No personal data is sold. See our{" "}
                    <Link href="/privacy-policy" className="text-primary underline hover:text-primary/80 transition-colors">
                      Privacy Policy
                    </Link>{" "}
                    for details.
                  </p>

                  {/* Manage preferences expandable */}
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-white mt-2 transition-colors"
                  >
                    Manage preferences {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                  </button>

                  <AnimatePresence>
                    {expanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 space-y-2 border border-white/8 rounded-lg p-3 bg-white/3">
                          <label className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
                            <span>
                              <span className="text-white font-semibold">Strictly Necessary</span>
                              <span className="ml-1">— required for the site to function</span>
                            </span>
                            <input type="checkbox" checked disabled className="accent-accent w-4 h-4 cursor-not-allowed opacity-60" />
                          </label>
                          <label className="flex items-center justify-between gap-3 text-xs text-muted-foreground cursor-pointer">
                            <span>
                              <span className="text-white font-semibold">Analytics</span>
                              <span className="ml-1">— helps us improve the site (Google Analytics)</span>
                            </span>
                            <input
                              type="checkbox"
                              checked={prefs.analytics}
                              onChange={e => setPrefs(p => ({ ...p, analytics: e.target.checked }))}
                              className="accent-accent w-4 h-4"
                            />
                          </label>
                          <label className="flex items-center justify-between gap-3 text-xs text-muted-foreground cursor-pointer">
                            <span>
                              <span className="text-white font-semibold">Marketing</span>
                              <span className="ml-1">— personalised content and ads</span>
                            </span>
                            <input
                              type="checkbox"
                              checked={prefs.marketing}
                              onChange={e => setPrefs(p => ({ ...p, marketing: e.target.checked }))}
                              className="accent-accent w-4 h-4"
                            />
                          </label>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-row lg:flex-col gap-2 shrink-0 lg:min-w-[180px]">
                <button
                  onClick={acceptAll}
                  className="flex-1 lg:flex-none bg-accent hover:bg-accent/90 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 transition-colors"
                >
                  Accept All
                </button>
                {expanded ? (
                  <button
                    onClick={savePrefs}
                    className="flex-1 lg:flex-none bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 transition-colors"
                  >
                    Save Preferences
                  </button>
                ) : (
                  <button
                    onClick={acceptNecessary}
                    className="flex-1 lg:flex-none bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 transition-colors"
                  >
                    Necessary Only
                  </button>
                )}
              </div>

              {/* Dismiss */}
              <button
                onClick={acceptNecessary}
                className="absolute top-3 right-3 lg:relative lg:top-auto lg:right-auto text-white/40 hover:text-white transition-colors self-start"
                aria-label="Dismiss cookie banner"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
