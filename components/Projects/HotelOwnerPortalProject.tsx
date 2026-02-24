import ProjectCard from "./ProjectCard";

export default function HotelOwnerPortalProject() {
  return (
    <ProjectCard
      title="Hotel Owner Portal"
      description="A secure document management platform designed for the hotel management industry, enabling management companies to efficiently share financial documents, reports, and property information with hotel owners. The platform streamlines communication between management companies and property owners through secure document upload, organized file management, and access to critical hotel performance data and financial statements."
      category="Hotel Management"
      features={[
        "Secure document upload and sharing for management companies",
        "Organized file management with categorized documents",
        "Real-time access to financial statements and reports",
        "Hotel performance metrics and operational data sharing",
      ]}
      technologies={[
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Authentication",
      ]}
      imageUrl="/placeholder-hotel-portal.jpg"
      imageAlt="AmbMar Hotel Owner Portal Dashboard Screenshot"
      demoUrl="https://ownerportal.ambmar.com/"
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10V9a1 1 0 011-1h2a1 1 0 011 1v12m-4 0h4"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 3l8 4v14H4V7l8-4z"
          />
        </svg>
      }
      isReversed={true}
    />
  );
}
