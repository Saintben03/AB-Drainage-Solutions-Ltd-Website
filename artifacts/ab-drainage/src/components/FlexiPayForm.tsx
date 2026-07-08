import { useState } from "react";
import { CheckCircle2, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { WEB3FORMS_ACCESS_KEY, isWeb3FormsConfigured, resolveReplyTo } from "@/lib/web3forms";

type SendState = "idle" | "sending" | "sent" | "error";

export const FlexiPayForm = () => {
  const [sendState, setSendState] = useState<SendState>("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", details: "" });

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isWeb3FormsConfigured()) {
      setSendState("error");
      return;
    }
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
          subject: `FlexiPay Enquiry — ${form.name || "Website"}`,
          from_name: "A&B Drainage FlexiPay Enquiry",
          replyto: resolveReplyTo(form.email),
          name: form.name,
          email: form.email,
          phone: form.phone,
          message:
            `FlexiPay enquiry submitted from the website.\n\n` +
            `Name: ${form.name}\n` +
            `Email: ${form.email}\n` +
            `Phone: ${form.phone}\n\n` +
            `Service required / additional details:\n${form.details || "Not provided"}`,
          // Honeypot
          botcheck: "",
        }),
      });
      const data = await res.json();
      setSendState(data.success ? "sent" : "error");
    } catch {
      setSendState("error");
    }
  };

  if (sendState === "sent") {
    return (
      <div className="bg-white border border-zinc-200 shadow-lg rounded-lg p-8 md:p-10 text-center flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500 h-full min-h-[380px]">
        <div className="w-16 h-16 bg-accent/15 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={32} className="text-accent" />
        </div>
        <h3 className="text-2xl font-display font-bold text-zinc-900 mb-3 uppercase">Enquiry Sent</h3>
        <p className="text-zinc-600 max-w-md mx-auto mb-6">
          Thank you — your FlexiPay enquiry has been sent to our team. We'll be in touch shortly to arrange a payment
          plan that suits you.
        </p>
        <button
          onClick={() => {
            setForm({ name: "", email: "", phone: "", details: "" });
            setSendState("idle");
          }}
          className="text-accent font-semibold hover:underline"
        >
          Make another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-zinc-200 shadow-lg rounded-lg p-6 md:p-8 space-y-4">
      <h3 className="text-2xl font-display font-bold text-zinc-900 mb-4 uppercase">Make a FlexiPay Enquiry</h3>

      <div className="space-y-1.5">
        <label htmlFor="fp-name" className="sr-only">Name</label>
        <input
          id="fp-name"
          required
          type="text"
          value={form.name}
          onChange={update("name")}
          placeholder="Name"
          className="w-full bg-zinc-50 border border-zinc-300 rounded px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="fp-email" className="sr-only">Email</label>
        <input
          id="fp-email"
          required
          type="email"
          value={form.email}
          onChange={update("email")}
          placeholder="Email"
          className="w-full bg-zinc-50 border border-zinc-300 rounded px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="fp-phone" className="sr-only">Phone</label>
        <input
          id="fp-phone"
          required
          type="tel"
          value={form.phone}
          onChange={update("phone")}
          placeholder="Phone"
          className="w-full bg-zinc-50 border border-zinc-300 rounded px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="fp-details" className="sr-only">Service required and additional details</label>
        <textarea
          id="fp-details"
          rows={4}
          value={form.details}
          onChange={update("details")}
          placeholder="Service required and additional details"
          className="w-full bg-zinc-50 border border-zinc-300 rounded px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-y"
        />
      </div>

      {sendState === "error" && (
        <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 rounded px-4 py-3 text-sm text-red-800">
          <AlertCircle size={18} className="shrink-0 mt-0.5" />
          <p>
            Sorry — your enquiry couldn't be sent. Please email{" "}
            <a href="mailto:info@abdrainage.co.uk" className="font-semibold underline">info@abdrainage.co.uk</a>{" "}
            or call{" "}
            <a href="tel:01256688650" className="font-semibold underline">01256 688 650</a>.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={sendState === "sending"}
        className="w-full bg-accent hover:bg-accent/90 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-base uppercase tracking-wider py-4 rounded transition-all flex items-center justify-center gap-2"
      >
        {sendState === "sending" ? (
          <>
            Sending <Loader2 size={18} className="animate-spin" />
          </>
        ) : (
          <>
            Submit FlexiPay Enquiry <ArrowRight size={18} />
          </>
        )}
      </button>
    </form>
  );
};
