import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

let scrollLocks = 0

export function lockBodyScroll() {
  scrollLocks += 1
  document.body.style.overflow = "hidden"
}

export function unlockBodyScroll() {
  scrollLocks = Math.max(0, scrollLocks - 1)
  if (scrollLocks === 0) {
    document.body.style.overflow = ""
  }
}
