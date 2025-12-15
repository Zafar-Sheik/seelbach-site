// components/Destinations.tsx
"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

export default function Destinations() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const destinations = [
    {
      name: "V&A Waterfront",
      description:
        "Weltberühmter Hafen mit Luxus-Einkaufsmöglichkeiten, Restaurants und Unterhaltung",
      image: "/images/waterfront.jpg", // You'll need to add this image
      price: "€899",
      location: "Kapstadt",
    },
    {
      name: "Camps Bay",
      description:
        "Exklusiver Strandvorort mit atemberaubender Küste und trendigen Restaurants",
      image: "/images/camps-bay.jpg", // You'll need to add this image
      price: "€1.099",
      location: "Kapstadt",
    },
    {
      name: "Clifton",
      description:
        "Vier geschützte Strände mit weißem Sand und kristallklarem Wasser",
      image: "/images/clifton.jpg", // You'll need to add this image
      price: "€1.199",
      location: "Kapstadt",
    },
    {
      name: "Sea Point",
      description:
        "Belebte Promenade mit Meerblick, Restaurants und Familienaktivitäten",
      image: "/images/sea-point.jpg", // You'll need to add this image
      price: "€749",
      location: "Kapstadt",
    },
    {
      name: "Green Point",
      description:
        "Modernes Viertel nahe dem Stadion mit Parks und dem Green Point Lighthouse",
      image: "/images/green-point.jpg", // You'll need to add this image
      price: "€799",
      location: "Kapstadt",
    },
    {
      name: "Table Mountain",
      description:
        "Ikone Kapstadts mit Seilbahn und atemberaubendem 360°-Panorama",
      image: "/images/table-mountain.jpg", // You'll need to add this image
      price: "€549",
      location: "Kapstadt",
    },
    {
      name: "Robben Island",
      description:
        "UNESCO-Weltkulturerbe mit historischer Gefängnisinsel und Mandela-Zelle",
      image: "/images/robben-island.jpg", // You'll need to add this image
      price: "€649",
      location: "Kapstadt",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = 400;

    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <section id="destinationen" className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto">
        <SectionHeader
          title="AUSGEWÄHLTE KAPSTADT-DESTINATIONEN"
          subtitle="Entdecken Sie die Perlen der Mother City mit exklusiven Touren."
        />

        <div className="relative mt-12">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/90 hover:bg-white text-[#DB1C08] p-3 rounded-full shadow-lg border border-gray-200 hover:scale-110 transition hidden md:block"
            aria-label="Previous destinations">
            <ChevronLeft size={24} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-6 pt-4 px-2"
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}>
            {destinations.map((destination, index) => (
              <div key={index} className="shrink-0 w-[300px] md:w-[350px]">
                <DestinationCard {...destination} />
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/90 hover:bg-white text-[#DB1C08] p-3 rounded-full shadow-lg border border-gray-200 hover:scale-110 transition hidden md:block"
            aria-label="Next destinations">
            <ChevronRight size={24} />
          </button>

          {/* Scroll Indicators (dots) */}
          <div className="flex justify-center gap-2 mt-8">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!scrollContainerRef.current) return;
                  const container = scrollContainerRef.current;
                  container.scrollLeft = index * 320;
                }}
                className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition"
                aria-label={`Go to destination ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Navigation Hint */}
        <p className="text-center text-gray-500 text-sm mt-6 md:hidden">
          ← Scrollen Sie, um mehr Destinationen zu sehen →
        </p>
      </div>
    </section>
  );
}

function DestinationCard({
  name,
  description,
  image,
  location,
}: {
  name: string;
  description: string;
  image: string;
  price: string;
  location: string;
}) {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition group h-full flex flex-col">
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
          sizes="(max-width: 768px) 300px, 350px"
        />
        {/* Location Badge */}
        <div className="absolute top-3 left-3 bg-[#DB1C08]/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {location}
        </div>
      </div>

      <div className="p-6 grow">
        <div className="flex items-start justify-between">
          <h3 className="font-header text-xl font-bold">{name}</h3>
          <span className="text-[#F9DD3F] font-bold text-lg ml-2">★</span>
        </div>

        <p className="mt-2 text-gray-600 text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
