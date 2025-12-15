// app/destinations/page.tsx
import Footer from "../components/Footer";

export default function DestinationsPage() {
  const destinations = [
    {
      name: "V&A Waterfront",
      description:
        "Weltberühmter Hafen mit Luxus-Einkaufsmöglichkeiten, Restaurants und Unterhaltung",
      image: "/images/waterfront.jpg",
      location: "Kapstadt",
    },
    {
      name: "Camps Bay",
      description:
        "Exklusiver Strandvorort mit atemberaubender Küste und trendigen Restaurants",
      image: "/images/camps-bay.jpg",
      location: "Kapstadt",
    },
    {
      name: "Clifton",
      description:
        "Vier geschützte Strände mit weißem Sand und kristallklarem Wasser",
      image: "/images/clifton.jpg",
      location: "Kapstadt",
    },
    {
      name: "Sea Point",
      description:
        "Belebte Promenade mit Meerblick, Restaurants und Familienaktivitäten",
      image: "/images/sea-point.jpg",
      location: "Kapstadt",
    },
    {
      name: "Green Point",
      description:
        "Modernes Viertel nahe dem Stadion mit Parks und dem Green Point Lighthouse",
      image: "/images/green-point.jpg",
      location: "Kapstadt",
    },
    {
      name: "Table Mountain",
      description:
        "Ikone Kapstadts mit Seilbahn und atemberaubendem 360°-Panorama",
      image: "/images/table-mountain.jpg",
      location: "Kapstadt",
    },
    {
      name: "Robben Island",
      description:
        "UNESCO-Weltkulturerbe mit historischer Gefängnisinsel und Mandela-Zelle",
      image: "/images/robben-island.jpg",
      location: "Kapstadt",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative h-96 md:h-[500px] flex items-center justify-center">
        <img
          src="/images/Untitled design/CT_New.jpeg"
          alt="Luxus Weltreisen"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-header font-bold mb-4 text-white">
            Unsere Destinationen
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Entdecken Sie exklusive Reiseziele für unvergessliche Erlebnisse
          </p>
        </div>
      </div>

      {/* Destinations Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-header text-3xl md:text-4xl font-bold mb-4">
              Alle Kapstadt Destinationen
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wählen Sie aus unseren kuratierten Reisezielen in Kapstadt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition group h-full flex flex-col">
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#DB1C08]/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {destination.location}
                  </div>
                </div>

                <div className="p-6 grow">
                  <div className="flex items-start justify-between">
                    <h3 className="font-header text-xl font-bold">
                      {destination.name}
                    </h3>
                    <span className="text-[#F9DD3F] font-bold text-lg ml-2">
                      ★
                    </span>
                  </div>

                  <p className="mt-2 text-gray-600 text-sm">
                    {destination.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
