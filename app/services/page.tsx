import Link from "next/link";

export default function Services() {
  return (
    <div className="font-sans">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Professional web application development and reliable Vercel hosting
            solutions
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Web Application Development */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Web Application Development
              </h3>
              <p className="text-gray-600 mb-6">
                Custom web applications built with modern frameworks like React
                and Next.js, designed to meet your specific business needs and
                provide exceptional user experiences.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    React & Next.js Applications
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Responsive Design</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">TypeScript Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Modern UI/UX</span>
                </div>
              </div>
            </div>

            {/* Vercel Hosting */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Vercel Hosting Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                Professional hosting and deployment through Vercel's platform,
                ensuring your web applications are fast, secure, and globally
                distributed with automatic scaling.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-gray-700">Global CDN Distribution</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-gray-700">Automatic Deployments</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-gray-700">SSL & Security</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Performance Optimization
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Web Development Details */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Modern Web Application Development
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    I specialize in creating modern, responsive web applications
                    using the latest technologies and best practices in web
                    development.
                  </p>
                  <p>
                    Every application is built with performance, scalability,
                    and user experience as top priorities, utilizing React and
                    Next.js for optimal results.
                  </p>
                  <p>
                    From simple websites to complex web applications, I deliver
                    solutions that are not only functional but also maintainable
                    and future-ready.
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Development Approach
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Modern Frameworks
                    </h4>
                    <p className="text-gray-600 text-sm">
                      React and Next.js applications with TypeScript for type
                      safety and better development experience
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Responsive Design
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Mobile-first approach ensuring your application works
                      perfectly on all devices
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Performance Optimization
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Fast loading times and smooth user interactions through
                      optimized code and best practices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vercel Hosting Details */}
          <div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-8 rounded-lg shadow-lg md:order-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Technology Stack
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Web Technologies
                    </h4>
                    <div className="space-y-2">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        React
                      </span>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full ml-2">
                        Next.js
                      </span>
                      <br />
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        TypeScript
                      </span>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full ml-2">
                        Tailwind CSS
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Hosting & Deployment
                    </h4>
                    <div className="space-y-2">
                      <span className="inline-block px-3 py-1 bg-black text-white text-sm rounded-full">
                        Vercel
                      </span>
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full ml-2">
                        Git Integration
                      </span>
                      <br />
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                        SSL Security
                      </span>
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full ml-2">
                        CDN
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:order-2">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Reliable Vercel Hosting
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Your web applications are hosted on Vercel's world-class
                    platform, ensuring maximum performance, security, and
                    reliability.
                  </p>
                  <p>
                    With global CDN distribution, automatic SSL certificates,
                    and seamless deployment workflows, your site will be fast
                    and secure worldwide.
                  </p>
                  <p>
                    Automatic deployments from your Git repository mean updates
                    are instant and effortless, keeping your web presence always
                    current.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Methodology */}
      <section className="py-20 bg-white ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              My Process
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering exceptional web applications
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Discovery
              </h3>
              <p className="text-gray-600 ">
                Understanding your web application goals and requirements
                through detailed consultation and planning.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Planning
              </h3>
              <p className="text-gray-600 ">
                Creating a detailed development roadmap with clear milestones
                and deployment strategy on Vercel.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Execution
              </h3>
              <p className="text-gray-600 ">
                Building your web application with modern technologies and
                regular progress updates throughout development.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Delivery
              </h3>
              <p className="text-gray-600 ">
                Deployment to Vercel with comprehensive documentation and
                ongoing support for your web application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your web application needs and how I can help bring
            your vision to life with professional development and reliable
            Vercel hosting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Consultation
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
