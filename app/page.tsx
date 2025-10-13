export default function Home() {
  return (
    <div className="font-sans flex items-center justify-center min-h-screen p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Coming Soon
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="space-y-6">
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            This page is currently under development.
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400">
            In the meantime, here is a link to my personal webpage:
          </p>

          <a
            href="https://marklustyjensen.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Visit My Personal Website
          </a>
        </div>

        <div className="mt-12 text-sm text-gray-400 dark:text-gray-500">
          <p>© 2025 Mark Jensen. Website coming soon.</p>
        </div>
      </div>
    </div>
  );
}
