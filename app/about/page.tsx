// app/about/page.tsx
"use client";

import Image from "next/image";
import {
  CheckCircle,
  Users,
  Globe,
  Shield,
  Star,
  Award,
  Heart,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Heart size={28} />,
      title: "Leidenschaft",
      description:
        "Unsere Liebe zum Reisen treibt uns an, einzigartige Erlebnisse zu schaffen.",
      color: "text-red-600 bg-red-50 border-red-200",
    },
    {
      icon: <Shield size={28} />,
      title: "Vertrauen",
      description:
        "Seit 2008 bauen wir auf Vertrauen und langfristige Kundenbeziehungen.",
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      icon: <Globe size={28} />,
      title: "Authentizität",
      description: "Echte Begegnungen mit lokalen Kulturen und Gemeinschaften.",
      color: "text-green-600 bg-green-50 border-green-200",
    },
    {
      icon: <Star size={28} />,
      title: "Exzellenz",
      description: "Höchste Qualitätsstandards in jedem Detail Ihrer Reise.",
      color: "text-yellow-600 bg-yellow-50 border-yellow-200",
    },
  ];

  const team = [
    {
      name: "Max Seelbach",
      role: "Gründer & CEO",
      image: "/images/team/max.jpg",
      description: "Über 20 Jahre Erfahrung in der Reisebranche",
    },
    {
      name: "Anna Schmidt",
      role: "Reiseberaterin",
      image: "/images/team/anna.jpg",
      description: "Spezialistin für Afrika und exklusive Lodges",
    },
    {
      name: "Thomas Weber",
      role: "Operations Manager",
      image: "/images/team/thomas.jpg",
      description: "Garantiert reibungslose Abläufe weltweit",
    },
    {
      name: "Lisa Müller",
      role: "Kundenbetreuung",
      image: "/images/team/lisa.jpg",
      description: "Ihre persönliche Ansprechpartnerin",
    },
  ];

  const milestones = [
    { year: "2008", event: "Gründung von Seelbach Tours in Berlin" },
    {
      year: "2012",
      event: "Eröffnung unseres ersten Auslandsbüros in Kapstadt",
    },
    { year: "2015", event: "Auszeichnung als 'Bester Reiseveranstalter'" },
    { year: "2018", event: "10.000 zufriedene Reisende erreicht" },
    { year: "2021", event: "Einführung nachhaltiger Reiseprogramme" },
    { year: "2024", event: "Expansion in 50+ Destinationen weltweit" },
  ];

  const certifications = [
    { name: "TourCert", desc: "Nachhaltige Tourismus-Zertifizierung" },
    { name: "ISO 9001", desc: "Qualitätsmanagement-System" },
    { name: "DRV Mitglied", desc: "Deutscher Reiseverband" },
    { name: "Green Globe", desc: "Umweltzertifizierung" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-100 flex items-center justify-center">
        <Image
          src="/images/Untitled design/ct.png"
          alt="Über Seelbach Tours"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-header font-bold mb-6">
            Über <span className="text-[#F9DD3F]">Seelbach Tours</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Seit 2008 schaffen wir Reiseerlebnisse, die im Gedächtnis bleiben
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="bg-[#DB1C08] text-white px-4 py-2 rounded-full text-sm font-bold">
              Unsere Mission
            </span>
            <h2 className="mt-6 font-header text-4xl md:text-5xl font-bold">
              Reisen mit <span className="text-[#F9DD3F]">Seele</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-[#F9DD3F] p-3 rounded-2xl shadow-xl">
                <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                  <Image
                    src="/images/about-mission.jpg"
                    alt="Unsere Mission"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#DB1C08] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-header font-bold">2008</div>
                <div className="text-sm font-header">Seit der Gründung</div>
              </div>
            </div>

            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Bei Seelbach Tours geht es nicht nur um Reisen. Es geht um{" "}
                <span className="font-semibold text-[#DB1C08]">Erlebnisse</span>
                , die
                <span className="font-semibold text-[#DB1C08]"> verändern</span>
                . Unsere Philosophie verbindet Luxus mit Authentizität – wir
                schaffen Momente, die im Gedächtnis bleiben und Geschichten, die
                ein Leben lang erzählt werden.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Jede Reise ist eine persönliche Geschichte. Wir hören zu,
                verstehen Ihre Träume und übersetzen sie in unvergessliche
                Abenteuer. Das ist unser Versprechen seit der ersten Stunde.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Zufriedene Kunden", value: "10k+" },
                  { label: "Destinationen", value: "50+" },
                  { label: "Erfahrung", value: "15 Jahre" },
                  { label: "Zufriedenheit", value: "98%" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-xl">
                    <div className="text-2xl font-header font-bold text-[#DB1C08]">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-header text-4xl md:text-5xl font-bold mb-4">
              Unsere Werte
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vier Prinzipien, die jede Entscheidung und jede Reise leiten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className={`bg-white p-6 rounded-2xl shadow-lg border ${value.color} hover:shadow-xl transition`}>
                <div className="w-14 h-14 rounded-full bg-white border-2 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-header text-xl font-bold mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-header text-4xl md:text-5xl font-bold mb-4">
              Unsere Geschichte
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Eine Reise durch 15 Jahre Exzellenz und Leidenschaft
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#F9DD3F] hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-center ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#DB1C08] rounded-full border-4 border-white z-10 hidden md:block"></div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${
                      idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                      <div className="text-[#DB1C08] font-header font-bold text-2xl mb-2">
                        {milestone.year}
                      </div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-header text-4xl md:text-5xl font-bold mb-4">
              Unser Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Die leidenschaftlichen Experten hinter Ihren unvergesslichen
              Reisen
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 bg-linear-to-br from-[#F9DD3F] to-[#DB1C08] rounded-full opacity-20 group-hover:opacity-30 transition"></div>
                  <div className="relative w-44 h-44 mx-auto mt-2 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>
                </div>
                <h3 className="font-header text-xl font-bold mb-1">
                  {member.name}
                </h3>
                <p className="text-[#DB1C08] font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partners */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-header text-4xl md:text-5xl font-bold mb-4">
              Zertifizierungen & Partner
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unsere Verpflichtung zu Qualität und Nachhaltigkeit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-200 hover:border-[#F9DD3F] transition group">
                <div className="w-16 h-16 mx-auto bg-[#F9DD3F] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <Award size={28} className="text-[#DB1C08]" />
                </div>
                <h3 className="font-header text-lg font-bold mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600 text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>

          {/* Partner Logos */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center opacity-70 hover:opacity-100 transition">
                <span className="text-gray-400 font-semibold">Partner {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-black to-[#DB1C08] text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-header text-4xl md:text-5xl font-bold mb-6">
            Bereit für Ihre Reise?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Lassen Sie uns gemeinsam Ihre perfekte Reise gestalten
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#kontakt"
              className="bg-[#F9DD3F] text-black px-8 py-4 rounded-xl font-header font-semibold text-lg hover:bg-yellow-400 transition">
              Kontakt aufnehmen
            </a>
            <a
              href="/#destinationen"
              className="border-2 border-white px-8 py-4 rounded-xl font-header font-semibold text-lg hover:bg-white hover:text-black transition">
              Destinationen entdecken
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
