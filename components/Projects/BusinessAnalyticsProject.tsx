import ProjectCard from "./ProjectCard";

export default function BusinessAnalyticsProject() {
  return (
    <ProjectCard
      title="Business Analytics Platform"
      description="A comprehensive data analysis platform designed for modern business applications, featuring advanced statistical analysis and machine learning capabilities for data-driven decision making. The platform integrates sales data, customer information, and operational metrics to provide actionable insights for business optimization and strategic planning decisions."
      category="Business Intelligence"
      features={[
        "Sales forecasting with trend analysis",
        "Customer behavior analytics",
        "Interactive data visualization dashboards",
        "Automated report generation",
      ]}
      technologies={["Python", "Pandas", "SciPy", "Matplotlib", "Streamlit"]}
      imageUrl="/placeholder-business-analytics.jpg"
      imageAlt="Business Analytics Dashboard Screenshot"
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      }
      isReversed={true}
    />
  );
}
