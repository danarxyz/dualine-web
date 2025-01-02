import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import ShineBorder from "@/components/ui/shine-border";

export function HeroVideoDialogDemo() {
  return (
    <ShineBorder
      className="relative flex w-full aspect-video items-center justify-center overflow-hidden rounded-lg bg-background/5 backdrop-blur-sm"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <div className="relative w-full h-full">
        <HeroVideoDialog
          className="dark:hidden block w-full h-full"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/waBUdHnaqd8?si=7KCTHEJ36luuv3WW"
          thumbnailSrc="/images/Port-Logistics.webp"
          thumbnailAlt="Logistics Warehouse"
        />
        <HeroVideoDialog
          className="hidden dark:block w-full h-full"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/waBUdHnaqd8?si=7KCTHEJ36luuv3WW" 
          thumbnailSrc="/images/Port-Logistics.webp"
          thumbnailAlt="Logistics Warehouse Dark"
        />
      </div>
    </ShineBorder>
  );
}
