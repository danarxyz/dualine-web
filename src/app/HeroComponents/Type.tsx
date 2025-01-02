import {TypingAnimation} from "@/components/ui/typing-animation";

export function TypingAnimationDemo() {
  const words = [
    "Deliver your packages seamlessly",
    "Connect you with the world",
    "Ensure fast and reliable shipping",
    "Simplify your global logistics",
    "Make worldwide shipping effortless"
  ];

  return <TypingAnimation words={words} />;
}
