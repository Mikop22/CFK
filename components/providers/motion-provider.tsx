"use client";

import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MotionProviderProps {
  children: ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <AnimatePresence mode="wait">
      {children}
    </AnimatePresence>
  );
}

export const MotionDiv = motion.div;