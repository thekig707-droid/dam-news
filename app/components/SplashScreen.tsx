"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [step, setStep] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(2), 3000);
    const t2 = setTimeout(() => setStep(3), 6000);
    const t3 = setTimeout(() => setIsVisible(false), 9500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 1.5 }}
        >
          {/* Stars */}
          <div className="absolute inset-0">
            {[...Array(120)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: Math.random() * 2.5 + 0.5 + "px",
                  height: Math.random() * 2.5 + 0.5 + "px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  opacity: Math.random() * 0.9 + 0.1,
                  animation: `twinkle ${Math.random() * 3 + 2}s infinite alternate`,
                }}
              />
            ))}
          </div>

          <style>{`
            @keyframes twinkle {
              from { opacity: 0.2; }
              to { opacity: 1; }
            }
            @keyframes slowRotate {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>

          {/* STAGE 1: Real Earth Photo */}
          {step === 1 && (
            <motion.div
              initial={{ scale: 0.01, opacity: 0 }}
              animate={{
                scale: [0.01, 0.3, 0.7, 1.0, 1.05, 15],
                opacity: [0, 0.6, 1, 1, 1, 0],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                times: [0, 0.2, 0.45, 0.6, 0.7, 1],
              }}
              className="relative"
              style={{ width: 300, height: 300 }}
            >
              {/* Outer atmosphere glow */}
              <div
                className="absolute rounded-full"
                style={{
                  inset: "-15px",
                  background: "radial-gradient(circle, transparent 50%, rgba(50,130,255,0.25) 70%, rgba(20,60,180,0.1) 85%, transparent 100%)",
                  borderRadius: "50%",
                  filter: "blur(8px)",
                }}
              />
              {/* Earth image - circular crop */}
              <div
                className="absolute inset-0 rounded-full overflow-hidden"
                style={{
                  boxShadow: "0 0 40px 10px rgba(30,100,255,0.3), 0 0 80px 25px rgba(10,50,150,0.15)",
                }}
              >
                <img
                  src="/earth.jpg"
                  alt="Earth"
                  className="w-full h-full object-cover"
                  style={{
                    animation: "slowRotate 20s linear infinite",
                    transform: "scale(1.1)",
                  }}
                />
              </div>
              {/* Atmosphere rim light */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "radial-gradient(circle at 30% 25%, rgba(100,180,255,0.15) 0%, transparent 55%)",
                  borderRadius: "50%",
                  pointerEvents: "none",
                }}
              />
            </motion.div>
          )}

          {/* STAGE 2: Real India Neon Map */}
          {step === 2 && (
            <motion.div
              initial={{ scale: 0.05, opacity: 0 }}
              animate={{
                scale: [0.05, 0.5, 1.0, 1.02, 12],
                opacity: [0, 0.7, 1, 1, 0],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.65, 1],
              }}
              className="relative flex items-center justify-center"
              style={{ width: 380, height: 340 }}
            >
              {/* Outer glow ring */}
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse, rgba(255,100,0,0.12) 0%, rgba(255,60,0,0.06) 50%, transparent 75%)",
                  filter: "blur(20px)",
                }}
              />
              {/* India map image - mix-blend-mode removes black */}
              <img
                src="/india.jpg"
                alt="India"
                className="w-full h-full object-contain"
                style={{
                  mixBlendMode: "screen",
                  filter: "brightness(1.3) saturate(1.4) drop-shadow(0 0 15px rgba(255,120,30,0.8))",
                }}
              />
            </motion.div>
          )}

          {/* STAGE 3: DAM NEWS - Cinematic Title */}
          {step === 3 && (
            <div className="flex flex-col items-center">

              {/* Top line */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                style={{
                  height: "1px",
                  width: "280px",
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                  marginBottom: "16px",
                }}
              />

              {/* DAM - massive letters */}
              <div className="flex items-end gap-1">
                {["D", "A", "M"].map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: -80, rotateX: 90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      delay: i * 0.15,
                      type: "spring",
                      stiffness: 250,
                      damping: 18,
                    }}
                    style={{
                      fontSize: "clamp(5rem, 18vw, 10rem)",
                      fontWeight: 900,
                      fontFamily: "Georgia, serif",
                      color: "#ffffff",
                      lineHeight: 1,
                      textShadow: `
                        0 0 20px rgba(255,255,255,0.8),
                        0 0 40px rgba(200,220,255,0.4),
                        0 0 80px rgba(150,180,255,0.2)
                      `,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              {/* NEWS - red, spaced out */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.55, duration: 0.5, ease: "easeOut" }}
                style={{
                  fontSize: "clamp(0.9rem, 3.5vw, 1.6rem)",
                  fontWeight: 800,
                  letterSpacing: "0.7em",
                  paddingLeft: "0.7em",
                  color: "#cc2027",
                  textShadow: "0 0 15px rgba(204,32,39,0.8), 0 0 30px rgba(204,32,39,0.4)",
                  fontFamily: "sans-serif",
                  textTransform: "uppercase",
                  marginTop: "4px",
                }}
              >
                NEWS
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.65, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.4em",
                  color: "rgba(180,200,255,0.7)",
                  textTransform: "uppercase",
                  fontFamily: "sans-serif",
                  marginTop: "14px",
                }}
              >
                Global Reports · Authentic News
              </motion.p>

              {/* Bottom line */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                style={{
                  height: "1px",
                  width: "280px",
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                  marginTop: "14px",
                }}
              />
            </div>
          )}

        </motion.div>
      )}
    </AnimatePresence>
  );
}