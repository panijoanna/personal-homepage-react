import { useSpring } from "react-spring";

export const useAnimations = () => {
  const animations = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 50,
    config: { duration: 500 },
  });

  return {
    animations,
  };
};
