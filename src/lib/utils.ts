import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ease = [0.16, 1, 0.3, 1] as const;
export const easeIn = [0.4, 0, 1, 1] as const;
export const easeOut = [0, 0, 0.2, 1] as const;
export const easeInOut = [0.4, 0, 0.2, 1] as const;

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
