import HeaderTestimonial from "./HeaderTestimonial";
import { MarqueeDemo } from "./Marquee";

export default function Testimonial () {
  return (
    <div className="relative">
      <HeaderTestimonial/>
      <div className="-mt-40 relative z-10">
        <MarqueeDemo/>
      </div>
    </div>
  )
}