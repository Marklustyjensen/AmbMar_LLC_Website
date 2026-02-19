import ProjectCard from "./ProjectCard";

export default function TestingAutomationProject() {
  return (
    <ProjectCard
      title="Linguistic Testing Automation"
      description="Automated testing solutions designed to streamline linguistic quality assurance processes, reducing manual effort while improving accuracy and consistency. The system integrates with existing workflows to provide real-time validation, automated reporting, and comprehensive quality metrics for multilingual projects."
      category="Quality Assurance & Automation"
      features={[
        "Automated content validation workflows",
        "Pattern recognition for common issues",
        "Comprehensive reporting and analytics",
        "Integration with project management tools",
      ]}
      technologies={["Python", "Selenium", "RegEx", "API Testing", "CI/CD"]}
      imageUrl="/placeholder-testing-automation.jpg"
      imageAlt="Testing Automation Dashboard Screenshot"
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
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      }
      isReversed={true}
    />
  );
}
