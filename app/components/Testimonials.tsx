// components/Testimonials.tsx
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: `Lieber Uli, Du bist einzigartig! Südafrika ist ein bezauberndes Land. Durch deine kompetenten Informationen, zahlreichen spannenden Geschichten und deinem fundierten Wissen in etlichen Gebieten, bleibt uns dieses Land in bester Erinnerung. Wir danken dir für deine unermüdlichen Bemühungen. Wir haben uns stets wohlbehütet gefühlt. Wir wünschen dir für den weiteren ebenso viel Erfolg und Erfüllung!`,
    author: "Traazste u. Roland",
    date: "Oktober 2018",
    location: "Südafrika",
  },
  {
    id: 2,
    content: `Hallo Uli, hiermit möchten wir uns ganz herzlich für deine kompetente, vielseitige, freundliche, empathische, lustige, unterhaltsame, informative u. unschlagbare Reisebegleitung bedanken, wir werden dich nicht vergessen!!!`,
    author: "Sabine Grimm / Guido Pohlmann",
    location: "Südafrika",
  },
  {
    id: 3,
    content: `Lieber Uli, vielen herzlichen Dank für die schönen Tage in Südafrika. Wir werden die Reise nie vergessenund dich und Südafrika im Herzen behalten.`,
    author: "Claudia U.",
    location: "Südafrika",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative py-20 px-4 bg-linear-to-b from-gray-900 to-black overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#F9DD3F] rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#DB1C08] rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="bg-[#DB1C08] px-6 py-2 rounded-full text-sm font-bold tracking-wider text-white shadow-lg">
            Stimmen unserer Reisenden
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-header font-extrabold text-white">
            <span className="text-[#F9DD3F]">Erlebnisse</span> die verbinden
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Lesen Sie, was unsere Gäste über ihre Reisen mit Seele sagen
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Quote Icon */}
            <div className="shrink-0">
              <div className="w-16 h-16 bg-linear-to-br from-[#F9DD3F] to-[#DB1C08] rounded-2xl flex items-center justify-center">
                <Quote className="w-8 h-8 text-black" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="flex-1">
              <div className="relative min-h-[300px]">
                <div className="transition-opacity duration-500">
                  <p className="text-gray-200 text-lg md:text-xl whitespace-pre-line leading-relaxed">
                    {testimonials[currentIndex].content}
                  </p>

                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white">
                          {testimonials[currentIndex].author}
                        </h4>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-[#F9DD3F] font-medium">
                            {testimonials[currentIndex].location}
                          </span>
                          {testimonials[currentIndex].date && (
                            <>
                              <span className="text-gray-400">•</span>
                              <span className="text-gray-400">
                                {testimonials[currentIndex].date}
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <button
                          onClick={prevTestimonial}
                          className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center text-white hover:border-[#F9DD3F] hover:text-[#F9DD3F] transition-all hover:scale-105"
                          aria-label="Vorheriges Testimonial">
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={nextTestimonial}
                          className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center text-white hover:border-[#F9DD3F] hover:text-[#F9DD3F] transition-all hover:scale-105"
                          aria-label="Nächstes Testimonial">
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[#F9DD3F] w-8"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Testimonial ${index + 1} anzeigen`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
