'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RotatingSlogan } from '../components/RotatingSlogan';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
              🧨 Poppers Beta 🚀⚡
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-semibold mb-8"
          >
            Ignite the Chain. Win Big. 🎯
          </motion.h2>

          {/* Action Line */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl mb-12"
          >
            🎟️ Launch. Trade. Stake. Meme. Raffle.
          </motion.p>

          {/* Rotating Slogan */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <RotatingSlogan />
          </motion.div>

          {/* Bottom Line */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 space-y-4"
          >
            <p className="text-xl">
              Push the chain → fuel the rocket 🚀
            </p>
            <p className="text-lg text-purple-300">
              Earn rewards for every raffle, stake, share, and trade. 🎉
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 