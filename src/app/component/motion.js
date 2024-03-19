"use client";

import { motion, AnimatePresence, isVisible } from "framer-motion";

export default function MyComponent({ children }) {
  return <motion.div animate={{ x: [null, 100, 0] }}>{children}</motion.div>;
}
