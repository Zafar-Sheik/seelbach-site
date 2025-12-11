// app/contact/page.tsx
import Image from "next/image";
import ContactSection from "../components/ContactSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative h-100 flex items-center justify-center">
        <Image
          src="/images/Untitled design/CTDesign3_.jpeg"
          alt="Kontaktieren Sie Uns"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-header font-bold mb-4">
            Kontakt
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Wir sind für Sie da – persönlich und unkompliziert
          </p>
        </div>
      </div>

      {/* Contact Cards Section */}
      <ContactSection />

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-header text-3xl md:text-4xl font-bold mb-4">
              Unser Standort
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Besuchen Sie uns in Kapstadt für eine persönliche Beratung
            </p>
          </div>

          {/* Map Container */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
            {/* Map Placeholder - You can replace this with Google Maps embed */}
            <div className="absolute inset-0 bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#DB1C08] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">CT</span>
                </div>
                <p className="text-gray-700 font-medium text-lg">
                  Kapstadt, Südafrika
                </p>
                <p className="text-gray-600">Cape Town 123, 10115</p>
              </div>
            </div>

            {/* Map Link Overlay */}
            <a
              href="https://maps.google.com/?q=Cape+Town+123,+Kapstadt,+Südafrika"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition text-sm font-medium text-gray-700">
              Auf Google Maps öffnen
            </a>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-header text-3xl md:text-4xl font-bold mb-6">
            Schnelle Kontaktmöglichkeiten
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Wählen Sie Ihren bevorzugten Kontaktweg – wir sind für Sie da
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a
              href="tel:+49123456789"
              className="flex-1 bg-[#DB1C08] text-white py-4 rounded-lg font-header font-semibold text-lg hover:bg-red-700 transition text-center">
              Jetzt anrufen
            </a>
            <a
              href="mailto:info@seelbachtours.com"
              className="flex-1 border-2 border-[#DB1C08] text-[#DB1C08] py-4 rounded-lg font-header font-semibold text-lg hover:bg-[#DB1C08] hover:text-white transition text-center">
              Email senden
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Durchschnittliche Antwortzeit: 1-2 Stunden
          </p>
        </div>
      </section>
    </div>
  );
}
