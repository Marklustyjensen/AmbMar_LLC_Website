import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Web Application Development
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              AmbMar, LLC delivers modern web applications and reliable Vercel
              hosting solutions tailored to your personal or business needs,
              with expertise in React and Next.js among other technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">What I Do</h3>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I specialize in modern web application development for both
              personal and business use, along with professional Vercel hosting
              solutions for those seeking innovative digital solutions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/portfolio"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                <svg
                  className="w-6 h-6 text-white"
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
              <h4 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                Software Portfolio
              </h4>
              <p className="text-gray-600">
                Explore my completed projects including web applications,
                business solutions, and custom tools built with React, Next.js,
                and TypeScript.
              </p>
            </Link>
            <Link
              href="/services"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                Web Development Services
              </h4>
              <p className="text-gray-600">
                Custom web applications and professional Vercel hosting
                solutions for optimal performance, security, and global
                distribution.
              </p>
            </Link>

            <Link
              href="/about"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                About AmbMar, LLC
              </h4>
              <p className="text-gray-600">
                Learn about my journey from Denmark to Colorado and expertise in
                modern web development technologies.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how I can help you realize your vision. My web
            application development and Vercel hosting expertise can help solve
            your unique business challenges.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
