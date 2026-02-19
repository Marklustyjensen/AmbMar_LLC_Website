import ProjectCard from "./ProjectCard";

export default function WebApplicationsProject() {
  return (
    <ProjectCard
      title="Modern Web Applications"
      description="Professional web applications built with modern frameworks, including this company website and client portals for project management and data visualization. Each application is designed with user experience in mind, featuring responsive design, dark mode support, and optimized performance across all devices."
      category="Web Development"
      features={[
        "Server-side rendering for optimal SEO",
        "TypeScript for type safety and maintainability",
        "Responsive design with Tailwind CSS",
        "API integration and real-time updates",
      ]}
      technologies={[
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
      ]}
      imageUrl="/placeholder-web-app.jpg"
      imageAlt="Modern Web Application Screenshot"
      demoUrl="/portfolio"
      backgroundColor="bg-gradient-to-br from-blue-400 to-blue-600"
      accentColor="blue"
      iconSvg={
        <svg
          className="w-24 h-24 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
          />
        </svg>
      }
      isReversed={true}
    />
  );
}
