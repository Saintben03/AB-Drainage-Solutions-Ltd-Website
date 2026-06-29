import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="bg-card border border-primary/20 rounded-lg p-8 md:p-12 text-center flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500 h-full min-h-[400px]">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={32} className="text-primary" />
        </div>
        <h3 className="text-3xl font-display font-bold text-white mb-4">Request Received</h3>
        <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
          Thank you for reaching out. We treat every inquiry seriously and will be in contact with you shortly. If this is an emergency, please call us immediately.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-primary font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-white/10 rounded-lg p-6 md:p-8 space-y-6">
      <h3 className="text-2xl font-display font-bold text-white mb-6 border-b border-white/10 pb-4">Send us a message</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-white/90">Full Name *</label>
          <input 
            id="name" 
            required 
            type="text" 
            className="w-full bg-background border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-white/90">Phone Number *</label>
          <input 
            id="phone" 
            required 
            type="tel" 
            className="w-full bg-background border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
            placeholder="07xxx xxxxxx"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-white/90">Email Address</label>
          <input 
            id="email" 
            type="email" 
            className="w-full bg-background border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
            placeholder="john@example.com"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="postcode" className="text-sm font-medium text-white/90">Postcode *</label>
          <input 
            id="postcode" 
            required 
            type="text" 
            className="w-full bg-background border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
            placeholder="e.g. RG21 4"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-medium text-white/90">Service Required</label>
        <select 
          id="service" 
          className="w-full bg-background border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
        >
          <option value="">Please select a service...</option>
          <option value="emergency">Emergency Callout</option>
          <option value="blocked">Blocked Drain</option>
          <option value="cctv">CCTV Drain Survey</option>
          <option value="repair">Drain Repair</option>
          <option value="commercial">Commercial/Industrial</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-white/90">Message</label>
        <textarea 
          id="message" 
          rows={4} 
          className="w-full bg-background border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-y" 
          placeholder="Briefly describe the issue..."
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg uppercase tracking-wider py-4 rounded transition-all flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <span className="animate-pulse">Sending...</span>
        ) : (
          "Send Request"
        )}
      </button>
      
      <p className="text-xs text-center text-muted-foreground mt-4">
        For immediate emergency response, please call us directly on <a href="tel:01256688650" className="text-primary hover:underline">01256 688 650</a>.
      </p>
    </form>
  );
};