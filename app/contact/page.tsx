'use client';
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    budgetRange: '',
    timeline: '',
    projectDescription: '',
    privacyAgree: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacyAgree) {
      setErrorMessage('Please agree to the privacy terms to continue.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          budgetRange: '',
          timeline: '',
          projectDescription: '',
          privacyAgree: false,
        });
      } else {
        const errorData = await response.json();
        setSubmitStatus('error');
        setErrorMessage(errorData.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="font-sans">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Ready to discuss your project? Let's start a conversation
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Let's Work Together
              </h2>
              <div className="space-y-6 text-gray-600 mb-8">
                <p className="text-lg">
                  If you need custom web applications tailored to your specific
                  needs, I'm here to help bring your project to life.
                </p>
                <p>
                  I specialize in custom web applications tailored to your
                  business or private needs, combining technical excellence with
                  practical, scalable solutions.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Location
                    </h3>
                    <p className="text-gray-600 ">Colorado, USA</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
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
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Website
                    </h3>
                    <a
                      href="https://marklustyjensen.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      marklustyjensen.com
                    </a>
                    <p className="text-sm text-gray-500 ">
                      Personal website and additional portfolio
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Response Time
                    </h3>
                    <p className="text-sm text-gray-500 ">
                      I typically respond to all inquiries within 1-2 business
                      days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Project Inquiry Form
              </h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <p className="font-medium">Thank you for your inquiry!</p>
                  <p>I'll get back to you within 1-2 business days.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <p className="font-medium">Error sending message:</p>
                  <p>{errorMessage}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your company or organization (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select 
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select budget range (optional)</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-50k">$15,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                    <option value="discuss">Prefer to discuss</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline
                  </label>
                  <select 
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select timeline (optional)</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-months-plus">6+ months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    rows={6}
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Please describe your project in detail. Include:&#10;• Project objectives and goals&#10;• Technical requirements or challenges&#10;• Any specific deliverables expected&#10;• Current situation or existing systems&#10;• Any other relevant information"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy-agree"
                    name="privacyAgree"
                    checked={formData.privacyAgree}
                    onChange={handleInputChange}
                    required
                    className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="privacy-agree"
                    className="text-sm text-gray-600 "
                  >
                    I agree to be contacted regarding this inquiry and
                    understand that my information will be handled
                    professionally and confidentially. *
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Project Inquiry'}
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-500 ">
                <p>* Required fields</p>
                <p className="mt-2">
                  I typically respond within 24 hours with next steps or
                  clarifying questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-lg group">
              <summary className="p-6 cursor-pointer flex justify-between items-center hover:bg-gray-50 transition-colors rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900">
                  What types of projects do you typically work on?
                </h3>
                <svg
                  className="w-5 h-5 text-gray-500 transform transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600">
                  I specialize in custom web applications tailored to your
                  specific business or personal needs. This includes full-stack
                  web development using modern frameworks like React, Next.js,
                  and Node.js, creating responsive user interfaces, building
                  robust backend systems, and integrating with databases and
                  APIs.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-lg group">
              <summary className="p-6 cursor-pointer flex justify-between items-center hover:bg-gray-50 transition-colors rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900">
                  Do you work with clients internationally?
                </h3>
                <svg
                  className="w-5 h-5 text-gray-500 transform transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600">
                  Yes, absolutely. I work with clients worldwide to develop web
                  applications that meet their specific needs. With my Danish
                  background and experience in international business, I'm
                  comfortable working across time zones and cultural contexts.
                  I'm fluent in Danish and English and have extensive experience
                  with remote collaboration.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-lg group">
              <summary className="p-6 cursor-pointer flex justify-between items-center hover:bg-gray-50 transition-colors rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900">
                  What is your typical project timeline?
                </h3>
                <svg
                  className="w-5 h-5 text-gray-500 transform transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600">
                  Web application project timelines vary based on scope and
                  complexity. Simple websites or landing pages might be
                  completed in 1-2 weeks, while comprehensive web applications
                  with custom functionality can take 1-3 months. I'll provide a
                  detailed timeline estimate during our initial consultation
                  based on your specific requirements.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-lg group">
              <summary className="p-6 cursor-pointer flex justify-between items-center hover:bg-gray-50 transition-colors rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900">
                  How do you ensure project quality and communication?
                </h3>
                <svg
                  className="w-5 h-5 text-gray-500 transform transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600">
                  I maintain regular communication through scheduled check-ins
                  and progress updates throughout the web development process.
                  All work follows modern web development best practices with
                  responsive design, cross-browser compatibility, thorough
                  testing, and clean code documentation. I provide milestone
                  deliveries for larger projects and ensure transparency at
                  every stage.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-lg group">
              <summary className="p-6 cursor-pointer flex justify-between items-center hover:bg-gray-50 transition-colors rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900">
                  Can you provide ongoing support after project completion?
                </h3>
                <svg
                  className="w-5 h-5 text-gray-500 transform transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600">
                  Yes, I offer various support options including website
                  maintenance, content updates, feature enhancements, hosting
                  support, and security updates. I can also provide training on
                  how to manage content or make basic updates yourself. The
                  level of ongoing support can be customized based on your
                  specific needs and budget requirements.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't hesitate to reach out. Every successful project starts with a
            conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Send Inquiry Above
            </a>
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
