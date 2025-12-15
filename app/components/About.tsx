// components/About.tsx
import Image from "next/image";

export default function About() {
  const stats = [
    { label: "Destinationen", value: "50+" },
    { label: "Reisende", value: "10k+" },
    { label: "Zufriedenheit", value: "98%" },
  ];

  return (
    <section id="über-uns" className="py-20 px-4 bg-white">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="bg-[#F9DD3F] p-3 rounded-2xl shadow-xl">
            <div className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden">
              <img
                src="/images/Untitled design/CTDesign3_.jpeg"
                alt="Über uns"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 bg-[#DB1C08] text-white p-5 rounded-2xl shadow-xl">
            <div className="text-3xl font-header font-bold">15+</div>
            <div className="text-sm font-header">Jahre Erfahrung</div>
          </div>
        </div>

        <div>
          <h2 className="font-header text-3xl md:text-5xl font-bold">
            UNSERE PHILOSOPHIE
          </h2>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Reisen mit{" "}
            <span className="text-[#DB1C08] font-semibold">Seele</span>{" "}
            bedeutet, Orte wirklich zu spüren und Erinnerungen zu schaffen, die
            ein Leben lang bleiben.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-gray-50 p-5 border-l-4 border-[#DB1C08] rounded-lg shadow-sm">
      <div className="text-xl font-header font-bold">{value}</div>
      <div className="text-gray-600 text-sm">{label}</div>
    </div>
  );
}
