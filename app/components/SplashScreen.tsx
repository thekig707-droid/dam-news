"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [step, setStep] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(2), 3000);
    const t2 = setTimeout(() => setStep(3), 5500);
    const t3 = setTimeout(() => setIsVisible(false), 9000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: "radial-gradient(ellipse at center, #0a0f1e 0%, #000005 60%, #000000 100%)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >

          {/* Stars background */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(80)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: Math.random() * 2 + 0.5 + "px",
                  height: Math.random() * 2 + 0.5 + "px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  opacity: Math.random() * 0.8 + 0.2,
                }}
              />
            ))}
          </div>

          {/* STAGE 1: CSS Earth */}
          {step === 1 && (
            <motion.div
              initial={{ scale: 0.05, opacity: 0 }}
              animate={{ scale: [0.05, 0.8, 1.1, 0.95, 12], opacity: [0, 1, 1, 1, 0] }}
              transition={{ duration: 3, ease: [0.25, 0.46, 0.45, 0.94], times: [0, 0.3, 0.5, 0.6, 1] }}
              className="relative"
              style={{ width: 220, height: 220 }}
            >
              {/* Earth glow outer */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: "0 0 60px 20px rgba(30, 100, 255, 0.4), 0 0 120px 40px rgba(10, 60, 180, 0.2)",
                  borderRadius: "50%",
                }}
              />
              {/* Earth base */}
              <div
                className="absolute inset-0 rounded-full overflow-hidden"
                style={{
                  background: "radial-gradient(circle at 35% 35%, #1a6fd4 0%, #0d4a9e 30%, #0a2d6b 60%, #051840 100%)",
                  boxShadow: "inset -30px -20px 60px rgba(0,0,10,0.8), inset 20px 15px 40px rgba(100,160,255,0.2)",
                }}
              >
                {/* Ocean shimmer */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "radial-gradient(circle at 40% 30%, rgba(100,180,255,0.3) 0%, transparent 50%)",
                  }}
                />
                {/* Continent 1 - Europe/Africa */}
                <div
                  className="absolute"
                  style={{
                    width: "35%", height: "55%",
                    top: "15%", left: "28%",
                    background: "rgba(34, 139, 34, 0.75)",
                    borderRadius: "40% 60% 50% 70% / 60% 40% 70% 50%",
                    boxShadow: "2px 2px 8px rgba(0,0,0,0.4)",
                  }}
                />
                {/* Continent 2 - Asia */}
                <div
                  className="absolute"
                  style={{
                    width: "42%", height: "38%",
                    top: "12%", left: "52%",
                    background: "rgba(34, 139, 34, 0.7)",
                    borderRadius: "55% 45% 40% 60% / 45% 55% 60% 40%",
                    boxShadow: "2px 2px 8px rgba(0,0,0,0.4)",
                  }}
                />
                {/* Continent 3 - Americas */}
                <div
                  className="absolute"
                  style={{
                    width: "22%", height: "60%",
                    top: "10%", left: "5%",
                    background: "rgba(34, 139, 34, 0.65)",
                    borderRadius: "45% 55% 55% 45% / 50% 60% 40% 50%",
                    boxShadow: "2px 2px 8px rgba(0,0,0,0.4)",
                  }}
                />
                {/* Cloud wisps */}
                <div
                  className="absolute"
                  style={{
                    width: "60%", height: "15%",
                    top: "30%", left: "20%",
                    background: "rgba(255,255,255,0.12)",
                    borderRadius: "50%",
                    filter: "blur(6px)",
                  }}
                />
                <div
                  className="absolute"
                  style={{
                    width: "40%", height: "10%",
                    top: "55%", left: "40%",
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "50%",
                    filter: "blur(4px)",
                  }}
                />
              </div>
              {/* Atmosphere halo */}
              <div
                className="absolute rounded-full"
                style={{
                  inset: "-8px",
                  background: "radial-gradient(circle, transparent 55%, rgba(50,120,255,0.15) 70%, rgba(30,80,200,0.08) 85%, transparent 100%)",
                  borderRadius: "50%",
                }}
              />
            </motion.div>
          )}

          {/* STAGE 2: India Map CSS */}
          {step === 2 && (
            <motion.div
              initial={{ scale: 0.1, opacity: 0, y: 30 }}
              animate={{ scale: [0.1, 1, 1.05, 8], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.5, ease: "easeInOut", times: [0, 0.35, 0.55, 1] }}
              className="relative flex flex-col items-center"
            >
              {/* India Map SVG - accurate outline */}
              <svg
                viewBox="0 0 300 380"
                style={{ width: 180, height: 220, filter: "drop-shadow(0 0 20px rgba(255,140,0,0.6)) drop-shadow(0 0 40px rgba(255,100,0,0.3))" }}
              >
                <defs>
                  <linearGradient id="indiaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff9933" />
                    <stop offset="50%" stopColor="#ff7700" />
                    <stop offset="100%" stopColor="#cc5500" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>
                {/* India shape - simplified but recognizable */}
                <path
                  d="M 120 10 L 180 15 L 230 40 L 260 80 L 270 120 L 260 150 L 240 170 L 250 200 L 240 230 L 220 250 L 200 280 L 185 320 L 175 360 L 165 370 L 155 360 L 145 320 L 130 280 L 110 250 L 90 230 L 80 200 L 90 170 L 70 150 L 60 120 L 65 80 L 90 45 Z"
                  fill="url(#indiaGrad)"
                  filter="url(#glow)"
                  opacity="0.95"
                />
                {/* Kashmir */}
                <path
                  d="M 120 10 L 140 5 L 165 8 L 180 15 L 160 20 L 140 18 Z"
                  fill="#ffaa44"
                  opacity="0.9"
                />
                {/* Highlight */}
                <path
                  d="M 130 50 L 160 55 L 170 90 L 150 100 L 130 85 Z"
                  fill="rgba(255,220,100,0.3)"
                />
                {/* Sri Lanka */}
                <ellipse cx="195" cy="355" rx="18" ry="25" fill="#ff8833" opacity="0.85" />
              </svg>
              {/* Glow ring */}
              <div
                className="absolute"
                style={{
                  width: 200, height: 240,
                  top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                  borderRadius: "50%",
                  background: "radial-gradient(ellipse, transparent 40%, rgba(255,120,0,0.1) 70%, transparent 100%)",
                }}
              />
            </motion.div>
          )}

          {/* STAGE 3: DAM NEWS - Movie Title Style */}
          {step === 3 && (
            <div className="flex flex-col items-center gap-3">
              {/* Main title */}
              <div className="flex items-baseline gap-3">
                {["D", "A", "M"].map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: -60, scale: 0.3 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      delay: i * 0.12,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    style={{
                      fontSize: "clamp(5rem, 15vw, 9rem)",
                      fontWeight: 900,
                      letterSpacing: "0.05em",
                      color: "#ffffff",
                      textShadow: "0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(200,220,255,0.3)",
                      fontFamily: "serif",
                      lineHeight: 1,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              {/* NEWS word - comes slightly after */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                style={{
                  fontSize: "clamp(1.2rem, 4vw, 2rem)",
                  fontWeight: 700,
                  letterSpacing: "0.6em",
                  color: "#cc2027",
                  textShadow: "0 0 20px rgba(204,32,39,0.7)",
                  fontFamily: "sans-serif",
                  textTransform: "uppercase",
                  paddingLeft: "0.6em",
                }}
              >
                NEWS
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 1.2, duration: 1 }}
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.35em",
                  color: "rgba(200,210,255,0.7)",
                  textTransform: "uppercase",
                  fontFamily: "sans-serif",
                  marginTop: 8,
                }}
              >
                Global Reports · Authentic News
              </motion.p>

              {/* Horizontal line animation */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
                style={{
                  height: 1,
                  width: "100%",
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                  marginTop: 4,
                }}
              />
            </div>
          )}

        </motion.div>
      )}
    </AnimatePresence>
  );
}