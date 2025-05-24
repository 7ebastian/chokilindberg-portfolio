import { getContactPage } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & CV — Choki Lindberg",
  description:
    "Contact information and curriculum vitae for photography artist Choki Lindberg, including exhibition history, education, and professional background.",
  keywords:
    "Choki Lindberg, contact, CV, curriculum vitae, photographer, artist, Copenhagen, Denmark",
};

export default function ContactPage() {
  const contactPage = getContactPage();

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="page-container border-b border-gray-100">
        <div className="text-center">
          <h1 className="page-title">Contact & CV</h1>
          <p className="text-body text-lg max-w-3xl mx-auto">
            Get in touch and learn more about the background and professional
            history of photography artist Choki Lindberg.
          </p>
        </div>
      </section>

      <div className="page-container">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="md:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-xl font-light tracking-wider uppercase mb-6">
                Contact
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-light tracking-wider uppercase mb-2 text-gray-600">
                    Artist
                  </h3>
                  <p className="text-body">Choki Lindberg</p>
                </div>

                <div>
                  <h3 className="text-sm font-light tracking-wider uppercase mb-2 text-gray-600">
                    Email
                  </h3>
                  <p className="text-body">
                    <a
                      href="mailto:chokilindberg@gmail.com"
                      className="hover:opacity-70 transition-opacity"
                    >
                      chokilindberg@gmail.com
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-light tracking-wider uppercase mb-2 text-gray-600">
                    Phone
                  </h3>
                  <p className="text-body">
                    <a
                      href="tel:+4531938288"
                      className="hover:opacity-70 transition-opacity"
                    >
                      +45 31 93 82 88
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-light tracking-wider uppercase mb-2 text-gray-600">
                    Location
                  </h3>
                  <p className="text-body">
                    Born 1979 in Copenhagen
                    <br />
                    Lives and works in Copenhagen, DK
                  </p>
                </div>
              </div>

              {/* Professional Services */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="text-sm font-light tracking-wider uppercase mb-4 text-gray-600">
                  Services
                </h3>
                <div className="space-y-2 text-sm text-body">
                  <p>• Photography</p>
                  <p>• Art Direction</p>
                  <p>• Stage & Prop Design</p>
                  <p>• Graphic Design</p>
                  <p>• Teaching & Lectures</p>
                </div>
              </div>
            </div>
          </div>

          {/* CV Content */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-light tracking-wider uppercase mb-8">
              Curriculum Vitae
            </h2>

            {/* Education */}
            <section className="mb-10">
              <h3 className="text-lg font-light tracking-wider uppercase mb-4 text-gray-800">
                Education
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-body font-medium">
                      BFA, Gerrit Rietveld Academie
                    </p>
                    <p className="text-sm text-gray-600">Amsterdam, NL</p>
                  </div>
                  <span className="text-sm font-light tracking-wide text-gray-500">
                    2006
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-body font-medium">
                      International Center of Photography
                    </p>
                    <p className="text-sm text-gray-600">New York, US</p>
                  </div>
                  <span className="text-sm font-light tracking-wide text-gray-500">
                    1999
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-body font-medium">Fatamorgana</p>
                    <p className="text-sm text-gray-600">Copenhagen, DK</p>
                  </div>
                  <span className="text-sm font-light tracking-wide text-gray-500">
                    1997
                  </span>
                </div>
              </div>
            </section>

            {/* Selected Exhibitions */}
            <section className="mb-10">
              <h3 className="text-lg font-light tracking-wider uppercase mb-4 text-gray-800">
                Selected Exhibitions
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-body font-medium">
                      Two Parts Impossible, One Part May Be
                    </p>
                    <p className="text-sm text-gray-600">
                      Group exhibition, Galerie Bart, Amsterdam, NL
                    </p>
                  </div>
                  <span className="text-sm font-light tracking-wide text-gray-500">
                    2021
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-body font-medium">KunstRAI</p>
                    <p className="text-sm text-gray-600">
                      Group presentation, Galerie Bart, Amsterdam, NL
                    </p>
                  </div>
                  <span className="text-sm font-light tracking-wide text-gray-500">
                    2021
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-body font-medium">
                      Preternatural Impacts
                    </p>
                    <p className="text-sm text-gray-600">
                      Group exhibition, Arden Asbæk Gallery, Copenhagen, DK
                    </p>
                  </div>
                  <span className="text-sm font-light tracking-wide text-gray-500">
                    2021
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-body font-medium">
                      The Great Photography Special
                    </p>
                    <p className="text-sm text-gray-600">
                      Group exhibition, 11 Photographers, Galerie Bart Amsterdam,
                      NL
                    </p>
                  </div>
                  <span className="text-sm font-light tracking-wide text-gray-500">
                    2020
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-body font-medium">
                      BBA Photography Prize - Shortlisted
                    </p>
                    <p className="text-sm text-gray-600">
                      1 of 4 artists, Berlin Blue Art Gallery, Berlin, DE
                    </p>
                  </div>
                  <span className="text-sm font-light tracking-wide text-gray-500">
                    2019
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-body font-medium">Elsewhere</p>
                    <p className="text-sm text-gray-600">
                      Solo exhibition, Galerie Bart Amsterdam, NL
                    </p>
                  </div>
                  <span className="text-sm font-light tracking-wide text-gray-500">
                    2019
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-body font-medium">Carte Blanche</p>
                    <p className="text-sm text-gray-600">
                      Group exhibition, Thottske Palais Copenhagen, DK
                    </p>
                  </div>
                  <span className="text-sm font-light tracking-wide text-gray-500">
                    2017
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-body font-medium">
                      Interiors - Reconstructed Memories
                    </p>
                    <p className="text-sm text-gray-600">
                      Gl. Mønt 25 Copenhagen, DK
                    </p>
                  </div>
                  <span className="text-sm font-light tracking-wide text-gray-500">
                    2013
                  </span>
                </div>
              </div>
            </section>

            {/* Residencies & Commissions */}
            <section className="mb-10">
              <h3 className="text-lg font-light tracking-wider uppercase mb-4 text-gray-800">
                Residencies & Commissions
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-body font-medium">
                      Lecturer and Guest Teacher
                    </p>
                    <p className="text-sm text-gray-600">
                      Fatamorgana Danish School of Photographic Art
                    </p>
                  </div>
                  <span className="text-sm font-light tracking-wide text-gray-500">
                    2015 / 2009
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-body font-medium">Boudoir</p>
                    <p className="text-sm text-gray-600">
                      Commissioned work for private collector, Copenhagen, DK
                    </p>
                  </div>
                  <span className="text-sm font-light tracking-wide text-gray-500">
                    2015
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-body font-medium">
                      Fljotstunga Artist Residency
                    </p>
                    <p className="text-sm text-gray-600">Reykholt, IS</p>
                  </div>
                  <span className="text-sm font-light tracking-wide text-gray-500">
                    2014
                  </span>
                </div>
              </div>
            </section>

            {/* Other Projects */}
            <section className="mb-10">
              <h3 className="text-lg font-light tracking-wider uppercase mb-4 text-gray-800">
                Other Projects
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-body font-medium">Kongens Fald</p>
                    <p className="text-sm text-gray-600">
                      Theater props design, The Royal Danish Theater Copenhagen,
                      DK
                    </p>
                  </div>
                  <span className="text-sm font-light tracking-wide text-gray-500">
                    2018
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-body font-medium">Porgy and Bess</p>
                    <p className="text-sm text-gray-600">
                      Theater props design, The Royal Danish Opera Copenhagen, DK
                    </p>
                  </div>
                  <span className="text-sm font-light tracking-wide text-gray-500">
                    2014
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-body font-medium">Manhunt</p>
                    <p className="text-sm text-gray-600">
                      Hotel room installation, Overgaden Institut for
                      Samtidskunst Copenhagen, DK
                    </p>
                  </div>
                  <span className="text-sm font-light tracking-wide text-gray-500">
                    2013
                  </span>
                </div>
              </div>
            </section>

            {/* Support & Recognition */}
            <section>
              <h3 className="text-lg font-light tracking-wider uppercase mb-4 text-gray-800">
                Support & Recognition
              </h3>
              <div className="text-body">
                <p>
                  <span className="font-medium">Støtte:</span> Statens
                  Kunstfond, Center for Kultur og udvikling, Udenrigsministeriet
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="page-container border-t border-gray-100 mt-16 pt-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-light tracking-wider uppercase mb-6">
            Professional Inquiries
          </h2>
          <p className="text-body text-lg leading-relaxed mb-8">
            For gallery representation, exhibition opportunities, commissions,
            or other professional inquiries, please reach out via email.
          </p>
          <a
            href="mailto:chokilindberg@gmail.com"
            className="inline-block px-8 py-3 bg-black text-white font-light tracking-wider uppercase text-sm hover:bg-gray-800 transition-all duration-300"
          >
            Email Choki
          </a>
        </div>
      </section>
    </div>
  );
}
