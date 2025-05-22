'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import type { CreateTypes } from 'canvas-confetti';

const slogans = [
  "Not a launchpad. A launch party. 🧨",
  "It's a chain reaction — and you're the spark. ⚡",
  "A meme-fueled reward engine for the on-chain underground. 🧪"
];

export const RotatingSlogan = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slogans.length);
      // Trigger confetti on slogan change
      const confettiOptions: confetti.Options = {
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      };
      confetti(confettiOptions);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-12 text-center">
      <div>TEST: RotatingSlogan is rendering</div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent"
        >
          {slogans[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}; 