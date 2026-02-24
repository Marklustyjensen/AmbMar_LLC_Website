import Link from "next/link";
import {
  HotelOwnerPortalProject,
  IncidentPortalProject,
  RealEstatePlatformProject,
} from "@/components/Projects";

export default function Portfolio() {
  return (
    <div className="font-sans">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Software Portfolio
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Innovative software solutions bridging business challenges with
            modern technology
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Projects */}
          <HotelOwnerPortalProject />
          <hr className="my-12 border-t border-gray-300" />
          <IncidentPortalProject />
          <hr className="my-12 border-t border-gray-300" />
          <RealEstatePlatformProject />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Interested in a Custom Solution?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can create tailored software solutions for your
            specific engineering challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start a Project
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
