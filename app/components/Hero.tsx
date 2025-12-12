// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <Image
        src="/images/CTDesign2.jpeg"
        alt="Luxus Weltreisen"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center text-white px-4 max-w-2xl">
        <span className="bg-[#DB1C08] px-4 py-2 rounded-full text-sm font-bold tracking-wider shadow-lg">
          Reisen mit Seele
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl font-header font-extrabold leading-tight">
          REISEN MIT <span className="text-[#F9DD3F]">SEELE</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Unvergessliche Erlebnisse – maßgeschneidert für Reisende, die tiefer
          fühlen und weiter entdecken möchten.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#F9DD3F] text-black px-10 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition">
            Destinationen entdecken
          </button>

          <button className="border-2 border-white px-10 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition">
            Starte Deine Reise
          </button>
        </div>
      </div>
    </section>
  );
}
