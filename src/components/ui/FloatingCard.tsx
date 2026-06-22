"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  floatClass?: "float-a" | "float-b" | "float-c";
}

export function FloatingCard({ children, className, delay = 0, floatClass = "float-a" }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.02 }}
      className={cn("glass rounded-2xl p-4", floatClass, className)}
    >
      {children}
    </motion.div>
  );
}
