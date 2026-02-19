export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              AmbMar, LLC
            </h3>
            <p className="text-gray-300 mb-4">
              Modern web application development and professional Vercel hosting
              solutions.
            </p>
            <p className="text-sm text-gray-400">Founded by Mark Jensen</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Web Application Development</li>
              <li>React & Next.js Applications</li>
              <li>Vercel Hosting Solutions</li>
              <li>TypeScript Development</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-2 text-gray-300">
              <p>Erie, Colorado</p>
              <p className="text-blue-500 underline">ambmar.llc@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2026 AmbMar, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
