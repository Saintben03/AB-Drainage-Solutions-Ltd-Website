import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Send, Loader2, CheckCircle2, AlertTriangle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface EmergencyModalProps {
  open: boolean;
  onClose: () => void;
}

// Web3Forms access key (free, client-side email delivery for static sites).
// Create one at https://web3forms.com using info@abdrainage.co.uk, then paste it here
// (or set VITE_WEB3FORMS_ACCESS_KEY in the DigitalOcean env). It is a public form key, not a secret.
const WEB3FORMS_ACCESS_KEY =
  (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined) ||
  "YOUR_WEB3FORMS_ACCESS_KEY";

const EMERGENCY_MOBILE = "07498 062 710";
const EMERGENCY_MOBILE_TEL = "07498062710";
const OFFICE_NUMBER = "01256 688 650";
const OFFICE_TEL = "01256688650";

type SendState = "idle" | "sending" | "sent" | "error";

export const EmergencyModal = ({ open, onClose }: EmergencyModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [problem, setProblem] = useState("");
  const [sendState, setSendState] = useState<SendState>("idle");
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      // Move focus into the dialog for keyboard / assistive-tech users.
      const t = setTimeout(() => closeButtonRef.current?.focus(), 50);
      return () => {
        clearTimeout(t);
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Reset the form a moment after closing so it's fresh next time.
  useEffect(() => {
    if (open) return;
    const t = setTimeout(() => {
      setSendState("idle");
      setName("");
      setPhone("");
      setProblem("");
    }, 300);
    return () => clearTimeout(t);
  }, [open]);

  const handleAlert = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendState("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "EMERGENCY CALLOUT — A&B Drainage Website",
          from_name: "A&B Drainage Emergency Alert",
          // Sent to the account email (info@abdrainage.co.uk) and CC'd to Louis.
          cc: ["louis@abdrainage.co.uk"],
          name: name || "Not provided",
          phone: phone || "Not provided",
          message:
            `EMERGENCY ALERT submitted from the website.\n\n` +
            `Name: ${name || "Not provided"}\n` +
            `Phone: ${phone || "Not provided"}\n` +
            `Problem: ${problem || "Not provided"}\n\n` +
            `Please respond immediately.`,
          // Honeypot
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSendState("sent");
      } else {
        setSendState("error");
      }
    } catch {
      setSendState("error");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="emergency-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-lg"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Emergency contact"
        >
          <motion.div
            key="emergency-card"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md max-h-[92vh] overflow-y-auto rounded-2xl shadow-2xl ring-1 ring-red-900/40"
            style={{
              background:
                "linear-gradient(160deg, #dc2626 0%, #b91c1c 55%, #991b1b 100%)",
            }}
          >
            {/* Pulsing red glow border */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-red-400"
              animate={{ opacity: [0.25, 0.8, 0.25] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Close */}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close emergency panel"
            >
              <X size={18} strokeWidth={2.5} />
            </button>

            <div className="relative z-10 px-6 pt-7 pb-6 sm:px-8 flex flex-col items-center text-center">
              {/* Buzzing phone icon */}
              <div className="relative mb-4">
                <motion.span
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-white/30"
                  animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.div
                  className="relative w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg"
                  animate={{
                    rotate: [0, -14, 14, -14, 14, -10, 10, -6, 6, 0],
                    x: [0, -2, 2, -2, 2, -1, 1, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  <Phone size={28} className="text-red-600" strokeWidth={2.5} />
                </motion.div>
              </div>

              {/* EMERGENCY heading */}
              <div className="flex items-center gap-2 text-white/90 mb-1">
                <AlertTriangle size={16} className="animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.28em]">
                  24/7 Drainage
                </span>
                <AlertTriangle size={16} className="animate-pulse" />
              </div>
              <motion.h2
                className="text-white font-display font-extrabold uppercase leading-none mb-2"
                style={{ fontSize: "clamp(2.6rem, 11vw, 3.6rem)" }}
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                Emergency
              </motion.h2>
              <p className="text-white/90 text-sm mb-5 leading-relaxed max-w-xs">
                Blocked drain or sewage backing up? We answer now and typically
                arrive within the hour.
              </p>

              {/* Primary: MOBILE number big */}
              <a
                href={`tel:${EMERGENCY_MOBILE_TEL}`}
                className="w-full flex flex-col items-center justify-center gap-1 bg-white rounded-xl py-4 px-6 shadow-xl transition-all hover:bg-white/95 active:scale-[0.98]"
              >
                <span className="flex items-center gap-2 text-red-600 font-extrabold tracking-tight"
                  style={{ fontSize: "clamp(1.6rem, 7vw, 2.1rem)" }}>
                  <Phone size={24} strokeWidth={2.6} className="shrink-0" />
                  {EMERGENCY_MOBILE}
                </span>
                <span className="text-red-700/70 text-[11px] font-bold uppercase tracking-[0.18em]">
                  Tap to call our emergency line
                </span>
              </a>

              {/* Secondary: OFFICE number small */}
              <a
                href={`tel:${OFFICE_TEL}`}
                className="mt-3 text-white/90 text-sm font-semibold hover:text-white transition-colors"
              >
                Office: <span className="font-bold underline">{OFFICE_NUMBER}</span>
              </a>

              {/* Divider */}
              <div className="flex items-center gap-3 w-full my-6">
                <span className="h-px flex-1 bg-white/25" />
                <span className="text-white/80 text-[11px] font-bold uppercase tracking-[0.2em]">
                  Or alert our team
                </span>
                <span className="h-px flex-1 bg-white/25" />
              </div>

              {/* Alert form / states */}
              {sendState === "sent" ? (
                <div className="w-full flex flex-col items-center text-center py-2 animate-in fade-in zoom-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-3">
                    <CheckCircle2 size={30} className="text-red-600" />
                  </div>
                  <h3 className="text-white font-display font-bold text-2xl mb-1">
                    Alert sent
                  </h3>
                  <p className="text-white/90 text-sm max-w-xs">
                    We've notified all our contacts about your emergency. We'll be
                    in touch right away — for the fastest response, call us now.
                  </p>
                  <a
                    href={`tel:${EMERGENCY_MOBILE_TEL}`}
                    className="mt-4 inline-flex items-center gap-2 bg-white text-red-600 font-bold rounded-full py-2.5 px-5 text-sm hover:bg-white/95 transition"
                  >
                    <Phone size={16} strokeWidth={2.6} /> Call {EMERGENCY_MOBILE}
                  </a>
                </div>
              ) : (
                <form onSubmit={handleAlert} className="w-full text-left space-y-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    aria-label="Your name"
                    autoComplete="name"
                    className="w-full rounded-lg bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-white"
                  />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your phone number"
                    aria-label="Your phone number"
                    autoComplete="tel"
                    className="w-full rounded-lg bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-white"
                  />
                  <textarea
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                    placeholder="Briefly, what's the problem?"
                    aria-label="Briefly, what's the problem?"
                    rows={2}
                    className="w-full rounded-lg bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-white resize-none"
                  />

                  {sendState === "error" && (
                    <p className="text-white text-xs font-semibold bg-red-900/40 rounded-md px-3 py-2">
                      We couldn't send the alert automatically. Please call us
                      now on {EMERGENCY_MOBILE}.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={sendState === "sending"}
                    className="w-full flex items-center justify-center gap-2 bg-zinc-900 text-white rounded-full py-3.5 px-6 font-bold uppercase tracking-wider text-sm transition-all hover:bg-black active:scale-[0.98] disabled:opacity-80 disabled:cursor-wait"
                  >
                    {sendState === "sending" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Emailing all contacts for this emergency…
                      </>
                    ) : (
                      <>
                        <Send size={18} strokeWidth={2.4} />
                        Alert our team now
                      </>
                    )}
                  </button>
                  <p className="text-white/70 text-[11px] text-center leading-relaxed">
                    Pressing this instantly notifies all our emergency contacts.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
