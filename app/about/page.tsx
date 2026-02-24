import Link from "next/link";

export default function About() {
  return (
    <div className="font-sans">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About AmbMar, LLC
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            The story behind our software development expertise and
            international perspective
          </p>
        </div>
      </section>

      {/* About Mark Jensen */}
      <section className="py-20 bg-white ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Mark Jensen
              </h2>
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">
                Founder & Principal Software Developer
              </h3>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  A self-taught software developer originally from Denmark, I
                  relocated to Colorado in June 2021 to expand my professional
                  horizons and establish AmbMar, LLC.
                </p>
                <p>
                  Before relocating to Colorado, I worked as a consultant in the
                  construction industry, where I developed strong analytical and
                  problem-solving skills. Since establishing AmbMar, LLC, I have
                  focused exclusively on developing custom web applications.
                </p>
                <p>
                  Through self-directed learning and hands-on experience in
                  software engineering, combined with my construction consulting
                  background, I bring a unique perspective and technical
                  expertise to every web application project.
                </p>
                <p>
                  My multicultural background and diverse skill set enable me to
                  approach challenges from multiple angles, delivering
                  innovative software solutions that bridge business
                  requirements with cutting-edge technology.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-xl">
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">
                Professional Journey
              </h4>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <div className="text-blue-600 font-bold text-lg">
                    Pre-2021
                  </div>
                  <div className="text-gray-900 font-semibold">
                    Construction Industry Consultant in Denmark
                  </div>
                  <div className="text-gray-600 mt-1">
                    Provided consulting services in the construction industry
                    while developing expertise in software development and web
                    applications
                  </div>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <div className="text-blue-600 font-bold text-lg">
                    June 2021
                  </div>
                  <div className="text-gray-900 font-semibold">
                    Relocated to Colorado
                  </div>
                  <div className="text-gray-600 mt-1">
                    Made the transatlantic move to expand professional
                    opportunities and start a new chapter
                  </div>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <div className="text-blue-600 font-bold text-lg">2021</div>
                  <div className="text-gray-900 font-semibold">
                    Founded AmbMar, LLC
                  </div>
                  <div className="text-gray-600 mt-1">
                    Established the company to provide specialized web
                    application development services
                  </div>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <div className="text-blue-600 font-bold text-lg">
                    2021-Present
                  </div>
                  <div className="text-gray-900 font-semibold">
                    Web Application Developer
                  </div>
                  <div className="text-gray-600 mt-1">
                    Specializing exclusively in custom web application
                    development and modern frontend technologies
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how my web application development expertise can help
            solve your personal, business, and technical challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
