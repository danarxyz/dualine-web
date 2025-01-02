import { AppleCardsCarouselDemo } from "./CardsCarousel";
import { ServiceAurora } from "./ServiceAuroraBg";

export default function Service() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <ServiceAurora>
        <AppleCardsCarouselDemo />
      </ServiceAurora>
    </div>
  );
}