import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  features: string[];
  technologies: string[];
  imageUrl: string;
  imageAlt: string;
  demoUrl: string;
  backgroundColor: string;
  accentColor: string;
  iconSvg: React.ReactNode;
  isReversed?: boolean;
}

export default function ProjectCard({
  title,
  description,
  category,
  features,
  technologies,
  imageUrl,
  imageAlt,
  demoUrl,
  backgroundColor,
  accentColor,
  iconSvg,
  isReversed = false,
}: ProjectCardProps) {
  return (
    <div className="mb-20">
      <div
        className={`grid md:grid-cols-2 gap-12 items-center ${isReversed ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""}`}
      >
        <div
          className={`${backgroundColor} rounded-lg p-16 flex items-center justify-center min-h-[400px]`}
        >
          <div className="text-center text-white">
            <div className="w-24 h-24 mx-auto mb-4">{iconSvg}</div>
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className={`text-${accentColor}-600 text-lg font-medium mb-6`}>
            {category}
          </p>
          <div className="space-y-4 text-gray-600 mb-6">
            <p>{description}</p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Key Features:
            </h4>
            <ul className="space-y-2 text-gray-600">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <div
                    className={`w-2 h-2 bg-${accentColor}-600 rounded-full mr-3`}
                  ></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-3 py-1 bg-${accentColor}-100 text-${accentColor}-800 text-sm rounded-full`}
              >
                {tech}
              </span>
            ))}
          </div>
          <Link
            href={demoUrl}
            target="_blank"
            className={`inline-flex items-center ${backgroundColor} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity`}
          >
            View Demo site
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
