'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Hello, world! (motion)
    </motion.h1>
  );
} 