import { useState } from "react";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { WEB3FORMS_ACCESS_KEY, isWeb3FormsConfigured, resolveReplyTo } from "@/lib/web3forms";

type SendState = "idle" | "sending" | "sent" | "error";

export const ContactForm = () => {
  const [sendState, setSendState] = useState<SendState>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = (fd.get("name") as string) || "Not provided";
    const phone = (fd.get("phone") as string) || "Not provided";
    const emailRaw = (fd.get("email") as string) || "";
    const email = emailRaw || "Not provided";
    const postcode = (fd.get("postcode") as string) || "Not provided";
    const service = (fd.get("service") as string) || "Not specified";
    const message = (fd.get("message") as string) || "Not provided";

    // No delivery key installed yet — don't fake a send, show the call/email fallback.
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
          subject: "New Website Enquiry — A&B Drainage",
          from_name: "A&B Drainage Website",
          // Reply-To: the customer's email if they gave a valid one, else our own
          // inbox — so hitting "Reply" always works and never bounces.
          replyto: resolveReplyTo(emailRaw),
          name,
          phone,
          email,
          postcode,
          service,
          message:
            `New enquiry from the website contact form.\n\n` +
            `Name: ${name}\n` +
            `Phone: ${phone}\n` +
            `Email: ${email}\n` +
            `Postcode: ${postcode}\n` +
            `Service required: ${service}\n\n` +
            `Message:\n${message}`,
          // Honeypot
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSendState("sent");
        form.reset();
      } else {
        setSendState("error");
      }
    } catch {
      setSendState("error");
    }
  };

  if (sendState === "sent") {
    return (
      <div className="bg-white border border-zinc-200 shadow-lg rounded-lg p-8 md:p-12 text-center flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500 h-full min-h-[400px]">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={32} className="text-primary" />
        </div>
        <h3 className="text-3xl font-display font-bold text-zinc-900 mb-4">Request Received</h3>
        <p className="text-zinc-600 text-lg max-w-md mx-auto mb-8">
          Thank you for reaching out. Your message has been sent to our team and we will be in contact with you shortly. If this is an emergency, please call us immediately.
        </p>
        <button
          onClick={() => setSendState("idle")}
          className="text-primary font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const isSubmitting = sendState === "sending";

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-zinc-200 shadow-lg rounded-lg p-6 md:p-8 space-y-6">
      <h3 className="text-2xl font-display font-bold text-zinc-900 mb-6 border-b border-zinc-200 pb-4">Send us a message</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-zinc-700">Full Name *</label>
          <input 
            id="name" 
            name="name"
            required 
            type="text" 
            className="w-full bg-zinc-50 border border-zinc-300 rounded px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-zinc-700">Phone Number *</label>
          <input 
            id="phone" 
            name="phone"
            required 
            type="tel" 
            className="w-full bg-zinc-50 border border-zinc-300 rounded px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
            placeholder="07xxx xxxxxx"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email Address</label>
          <input 
            id="email" 
            name="email"
            type="email" 
            className="w-full bg-zinc-50 border border-zinc-300 rounded px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
            placeholder="john@example.com"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="postcode" className="text-sm font-medium text-zinc-700">Postcode *</label>
          <input 
            id="postcode" 
            name="postcode"
            required 
            type="text" 
            className="w-full bg-zinc-50 border border-zinc-300 rounded px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
            placeholder="e.g. RG21 4"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-medium text-zinc-700">Service Required</label>
        <select 
          id="service" 
          name="service"
          className="w-full bg-zinc-50 border border-zinc-300 rounded px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
        >
          <option value="">Please select a service...</option>
          <option value="Emergency Callout">Emergency Callout</option>
          <option value="Blocked Drain">Blocked Drain</option>
          <option value="CCTV Drain Survey">CCTV Drain Survey</option>
          <option value="Drain Repair">Drain Repair</option>
          <option value="Commercial/Industrial">Commercial/Industrial</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-zinc-700">Message</label>
        <textarea 
          id="message" 
          name="message"
          rows={4} 
          className="w-full bg-zinc-50 border border-zinc-300 rounded px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-y" 
          placeholder="Briefly describe the issue..."
        ></textarea>
      </div>

      {sendState === "error" && (
        <div className="flex items-start gap-2 rounded bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          <AlertTriangle size={18} className="shrink-0 mt-0.5" />
          <span>
            We couldn't send your message just now. Please call us on{" "}
            <a href="tel:01256688650" className="font-bold underline">01256 688 650</a>{" "}
            or email <a href="mailto:info@abdrainage.co.uk" className="font-bold underline">info@abdrainage.co.uk</a>.
          </span>
        </div>
      )}

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg uppercase tracking-wider py-4 rounded transition-all flex items-center justify-center gap-2 disabled:opacity-80 disabled:cursor-wait"
      >
        {isSubmitting ? (
          <span className="animate-pulse">Sending...</span>
        ) : (
          "Send Request"
        )}
      </button>
      
      <p className="text-xs text-center text-zinc-500 mt-4">
        For immediate emergency response, please call us directly on <a href="tel:01256688650" className="text-primary hover:underline">01256 688 650</a>.
      </p>
    </form>
  );
};
