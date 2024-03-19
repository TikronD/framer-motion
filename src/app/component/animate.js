"use client";

import { motion, AnimatePresence, isVisible } from "framer-motion";

export default function MyComponent({ children }) {
  return (
    <motion.div
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
