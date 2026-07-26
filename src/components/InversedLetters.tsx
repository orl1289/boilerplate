import { useState, useCallback, useRef, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import styles from "../styles.inversedletters.module.css";

export default function App() {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [items, set] = useState<string[]>([]);

  const getResponsiveConfig = () => {
    const width = window.innerWidth;
  if (width <= 360) {
    return { height: 60, fontSize: 'clamp(1rem, 4vw, 2rem)' };
  }
  if (width <= 768) {
    return { height: 80, fontSize: 'clamp(1.5rem, 5vw, 3rem)' };
  }
  return { height: 100, fontSize: 'clamp(2rem, 6vw, 4rem)' };
};

  const [config, setConfig] = useState(getResponsiveConfig());

  useEffect(() => {
    const handleResize = () => {
      setConfig(getResponsiveConfig());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "##8f92b6",
    },
    enter: [
      { opacity: 1, height: config.height, innerHeight: config.height },
      { transform: "perspective(600px) rotateX(180deg)", color: "#28d79f" },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [
      { color: "#c23369" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: "#28b4d7" },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(
      setTimeout(
        () => set(["Quality", "Compliance", "Regulatory"]),
        2000,
      ),
    );
    ref.current.push(
      setTimeout(() => set(["Quality", "Regulatory"]), 5000),
    );
    ref.current.push(
      setTimeout(
        () =>
          set([
            "Quality",
            "Safety",
            "Regulatory",
          ]),
        8000,
      ),
    );
      ref.current.push(
    setTimeout(() => reset(), 11000)  // Wait 3 seconds after last change, then restart
  );  
    
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div
            className={styles.transitionsItem}
            style={{
              ...rest,
              fontSize: config.fontSize,
              lineHeight: `${config.height}px`,
            }}
            onClick={reset}
          >
            <animated.div
              style={{
                overflow: "hidden",
                height: innerHeight,
                whiteSpace: "normal" /* Allow wrapping*/,
              }}
            >
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
