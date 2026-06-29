import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const FlexiPayForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", details: "" });

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `FlexiPay Enquiry — ${form.name || "Website"}`;
    const body =
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n\n` +
      `Service required / additional details:\n${form.details}`;
    window.location.href = `mailto:info@abdrainage.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-zinc-200 shadow-lg rounded-lg p-8 md:p-10 text-center flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500 h-full min-h-[380px]">
        <div className="w-16 h-16 bg-accent/15 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={32} className="text-accent" />
        </div>
        <h3 className="text-2xl font-display font-bold text-zinc-900 mb-3 uppercase">One Last Step</h3>
        <p className="text-zinc-600 max-w-md mx-auto mb-4">
          Your email app should now be open with your FlexiPay enquiry ready to send. Just press send and we'll be in touch shortly.
        </p>
        <p className="text-zinc-500 text-sm max-w-md mx-auto mb-6">
          If nothing opened, email us at{" "}
          <a href="mailto:info@abdrainage.co.uk" className="text-accent font-semibold hover:underline">info@abdrainage.co.uk</a>{" "}
          or call{" "}
          <a href="tel:01256688650" className="text-accent font-semibold hover:underline">01256 688 650</a>.
        </p>
        <button
          onClick={() => setSubmitted(false)}
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

      <button
        type="submit"
        className="w-full bg-accent hover:bg-accent/90 text-white font-bold text-base uppercase tracking-wider py-4 rounded transition-all flex items-center justify-center gap-2"
      >
        Submit FlexiPay Enquiry <ArrowRight size={18} />
      </button>
    </form>
  );
};
