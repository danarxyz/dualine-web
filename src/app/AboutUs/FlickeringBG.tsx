import FlickeringGrid from "@/components/ui/flickering-grid";

export function FlickeringGridDemo() {
  return (
    <div className="absolute h-[200vh] w-screen mt-80 bg-background backdrop-blur-md">
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={2000}
        width={1920} // Increased width for full screen
      />
    </div>
  );
}
