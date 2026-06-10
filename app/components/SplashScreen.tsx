"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [step, setStep] = useState(1);
  const [isVisible, setIsVisible] = useState(true); // NAYA STATE: Khud ko gayab karne ke liye

  useEffect(() => {
    // Exact timings set ki hain Hollywood transition ke liye
    const timer1 = setTimeout(() => setStep(2), 2500); 
    const timer2 = setTimeout(() => setStep(3), 5000); 
    const timer3 = setTimeout(() => setIsVisible(false), 7500); // 7.5s baad animation exit
    
    return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }} 
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* STAGE 1: Asli Earth */}
          {step === 1 && (
            <motion.img
              src="/earth.jpg" 
              alt="World"
              style={{ mixBlendMode: "screen" }} 
              className="w-64 h-64 md:w-96 md:h-96 object-contain absolute"
              initial={{ scale: 0.1, opacity: 0, rotate: -90 }}
              animate={{ scale: [0.1, 1.2, 6], opacity: [0, 1, 0], rotate: 0 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          )}

          {/* STAGE 2: India Map */}
          {step === 2 && (
            <motion.img
              src="/india.jpg" 
              alt="India"
              style={{ mixBlendMode: "screen" }} 
              className="w-64 h-64 md:w-96 md:h-96 object-contain absolute drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
              initial={{ scale: 0.3, opacity: 0, y: 30 }}
              animate={{ scale: [0.3, 1, 4], opacity: [0, 1, 0], y: 0 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          )}

          {/* STAGE 3: DAM NEWS */}
          {step === 3 && (
            <div className="flex space-x-2 md:space-x-4 text-5xl md:text-8xl font-black text-white tracking-widest uppercase absolute z-10">
              {"DAM NEWS".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200, damping: 10 }}
                  className={char === " " ? "w-4 md:w-8" : "drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}