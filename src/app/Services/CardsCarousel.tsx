"use client";
import React, { JSX } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { ParticlesDemo } from '../HeroComponents/Particles';

interface ServiceContentProps {
  title: string;
  category: string;
  features: string[];
  benefits: string[];
}

interface CardContent {
  category: string;
  title: string;
  src: string;
  content: React.ReactNode;
}

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="relative w-full h-full py-32 overflow-hidden">
      <ParticlesDemo/>
      {/* Background glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[500px] bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 z-20">
        <div className="relative z-10 text-center space-y-6 mb-20">
          {/* Category label */}
          <div className="relative inline-block">
            <span className="inline-block px-6 py-2 rounded-full text-sm font-medium 
              bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 backdrop-blur-sm
              border text-neutral-200 relative
              before:absolute before:inset-0 before:-z-10 before:rounded-full
              before:bg-gradient-to-r before:from-purple-500/20 before:via-pink-500/20 before:to-purple-500/20">
              Our Services
            </span>
          </div>
          
          {/* Main heading */}
          <h2 className="inline-block text-4xl md:text-6xl font-bold text-transparent bg-clip-text 
            bg-gradient-to-r from-purple-400 to-pink-400 pb-4 relative">
            Global Logistics Solutions
            {/* Simplified SVG */}
            <svg className="absolute -bottom-2 left-0 w-full h-6" viewBox="0 0 400 20">
              <path 
                d="M 0 12 Q 50 5, 100 12 T 200 12 T 300 12 T 400 12"
                fill="none" 
                stroke="currentColor" 
                className="stroke-purple-400"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </h2>
        </div>
      </div>
      <Carousel items={cards} />
      {/* Add gradient fade to bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background"></div>
    </div>
  );
}

const ServiceContent: React.FC<ServiceContentProps> = ({ 
  title, 
  category, 
  features, 
  benefits 
}): JSX.Element => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800/50 p-8 md:p-14 rounded-3xl mb-4 backdrop-blur-sm">
      <div className="space-y-8">
        <div>
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-700 dark:text-purple-300 mb-4">
            {category}
          </span>
          <div className="relative inline-block">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-700 dark:text-neutral-200">
              {title}
            </h3>
            <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
          </div>
        </div>
        
        <div className="grid gap-6">
          {features.map((feature: string, index: number) => (
            <div key={`feature-${index}`} className="flex items-start gap-4">
              <span className="flex-shrink-0 size-8 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <span className="size-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              </span>
              <p className="text-neutral-600 dark:text-neutral-300 text-lg">{feature}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10">
          <p className="text-neutral-700 dark:text-neutral-200 text-lg font-medium">{benefits}</p>
        </div>
      </div>
    </div>
  )
}

const data: CardContent[] = [
  {
    category: "Export Import",
    title: "International Trade Made Easy",
    src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2970&auto=format&fit=crop",
    content: <ServiceContent 
      category="Export Import" 
      title="International Trade Made Easy"
      features={[
        "Complete documentation support",
        "Customs clearance assistance",
        "Trade compliance consulting",
        "Digital paperwork processing"
      ]}
      benefits={["Navigate international trade effortlessly with our expert customs solutions"]}
    />,
  },
  {
    category: "Freight Forwarding",
    title: "Global Freight Solutions",
    src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2970&auto=format&fit=crop", // Cargo ship image
    content: <ServiceContent 
      category="Freight Forwarding"
      title="International Freight Services"
      features={[
        "Door-to-door shipping solutions worldwide",
        "Real-time cargo tracking system",
        "Dedicated account managers",
        "Competitive rates and flexible schedules"
      ]}
      benefits={["Experience seamless global shipping with our extensive network covering 120+ countries"]}
    />,
  },
  {
    category: "Export Import",
    title: "Customs & Trade Solutions",
    src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2970&auto=format&fit=crop", // Harbor with container ships
    content: <ServiceContent 
      category="Export Import" 
      title="International Trade Made Easy"
      features={[
        "Complete documentation support",
        "Customs clearance assistance",
        "Trade compliance consulting",
        "Digital paperwork processing"
      ]}
      benefits={["Navigate international trade effortlessly with our expert customs solutions"]}
    />,
  },
  {
    category: "Remote Distribution",
    title: "Last Mile Excellence",
    src: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=2971&auto=format&fit=crop", // Delivery truck in remote area
    content: <ServiceContent 
      category="Remote Distribution"
      title="Remote Area Distribution"
      features={[
        "Specialized remote area delivery",
        "Island-to-island logistics",
        "Temperature-controlled transport",
        "Emergency delivery options"
      ]}
      benefits={["Reaching the unreachable - specialized solutions for remote destinations"]}
    />,
  },
  {
    category: "Express Services",
    title: "Speed & Reliability",
    src: "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=2796&auto=format&fit=crop", // Express delivery van
    content: <ServiceContent 
      category="Express Services"
      title="Express Logistics Solutions"
      features={[
        "Same-day delivery options",
        "Priority handling & routing",
        "24/7 customer support",
        "Live delivery updates"
      ]}
      benefits={["When time is critical, choose our premium express services"]}
    />,
  }
]