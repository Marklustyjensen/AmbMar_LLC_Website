import ProjectCard from "./ProjectCard";

export default function IncidentPortalProject() {
  return (
    <ProjectCard
      title="Incident Management Portal"
      description="Professional incident reporting platform designed by AmbMar LLC. This secure web application provides comprehensive incident management capabilities with user authentication, dashboard analytics, and streamlined reporting workflows for enhanced workplace safety and compliance."
      category="Hotel Management"
      features={[
        "Secure employee authentication system",
        "Comprehensive incident reporting dashboard",
        "Real-time incident tracking and analytics",
        "Role-based access control and permissions",
      ]}
      technologies={[
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Database Integration",
      ]}
      imageUrl="/incident-portal-screenshot.jpg"
      imageAlt="Incident Management Portal Dashboard"
      demoUrl="https://incidentportal.ambmar.com/"
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
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
      }
      isReversed={true}
    />
  );
}
