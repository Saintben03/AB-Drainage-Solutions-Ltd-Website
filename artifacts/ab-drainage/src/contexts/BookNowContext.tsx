import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { BookNowModal } from "@/components/BookNowModal";

interface BookNowContextValue {
  openBookNow: () => void;
  closeBookNow: () => void;
}

const BookNowContext = createContext<BookNowContextValue | null>(null);

export function BookNowProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openBookNow = useCallback(() => setOpen(true), []);
  const closeBookNow = useCallback(() => setOpen(false), []);

  return (
    <BookNowContext.Provider value={{ openBookNow, closeBookNow }}>
      {children}
      <BookNowModal open={open} onClose={closeBookNow} />
    </BookNowContext.Provider>
  );
}

export function useBookNow() {
  const ctx = useContext(BookNowContext);
  if (!ctx) throw new Error("useBookNow must be used within a BookNowProvider");
  return ctx;
}
