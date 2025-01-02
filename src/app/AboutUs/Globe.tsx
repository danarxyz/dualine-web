import { Globe, GLOBE_CONFIG } from "@/components/ui/globe";

export default function GlobeDemo() {
  return (
    <div className="relative min-h-screen w-full flex mx-8 mt-0 items-center justify-center">
      <div className="absolute inset-0 " />
      <Globe
        config={GLOBE_CONFIG}
        className="relative mx-auto aspect-[1/1] w-full 
          max-w-[300px] 
          sm:max-w-[300px] 
          md-max-w-[400px] 
          lg-max-w-[500px]
          xl-max-w-[500px]"
      />
    </div>
  );
}
