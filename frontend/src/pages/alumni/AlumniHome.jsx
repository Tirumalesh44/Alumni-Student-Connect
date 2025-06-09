import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Handshake, Search, Github, Linkedin, Mail, Heart } from 'lucide-react';

const AlumniHome = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background with overlay gradient */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
            filter: 'blur(1px)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-800/80 via-cyan-800/70 to-sky-800/80" /> 
      </div>

      <div className="relative z-10">
        {/* Main Content */}
        <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
          <div className="w-full max-w-5xl">
            {/* Header */}
            <header className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
                <span className="inline-block transform transition-all duration-700 hover:scale-105">
                  Alumni Dashboard
                </span>
              </h1>
              <p className="text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed">
                Give back to your alma mater, connect with students, and expand your professional network.
              </p>
            </header>

            {/* Feature Cards for Alumni */}
            <div className="grid gap-8 md:grid-cols-3 mb-16">
              <FeatureCard
                to="/alumni-dashboard/post-job"
                icon={<Briefcase className="h-8 w-8" />}
                title="Post a Job"
                description="Share job or internship opportunities from your company with current students."
                iconBgColor="bg-sky-500/20"
                iconTextColor="text-sky-200"
              />
              <FeatureCard
                to="/alumni-dashboard/mentorship-requests"
                icon={<Handshake className="h-8 w-8" />}
                title="Mentorship Desk"
                description="View and respond to mentorship requests from students seeking guidance."
                iconBgColor="bg-green-500/20"
                iconTextColor="text-green-200"
              />
              <FeatureCard
                to="/alumni-dashboard/search-students"
                icon={<Search className="h-8 w-8" />}
                title="Find Students"
                description="Discover and connect with talented students for opportunities or networking."
                iconBgColor="bg-yellow-500/20"
                iconTextColor="text-yellow-200"
              />
            </div>

            {/* Testimonial */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center mb-16">
              <p className="text-sky-50 italic mb-4">"We make a living by what we get, but we make a life by what we give."</p>
              <p className="text-sky-200 font-medium">— Winston Churchill</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 bg-black/20 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid gap-8 md:grid-cols-4">
              {/* Brand Column */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-4">Bridge Batch</h3>
                <p className="text-sky-100 mb-6 max-w-md">
                  Connecting alumni and students to build stronger communities and create opportunities.
                </p>
                <div className="flex space-x-4">
                  <SocialIcon icon={<Github className="h-5 w-5" />} href="https://github.com/pavan-234" />
                  <SocialIcon icon={<Linkedin className="h-5 w-5" />} href="https://www.linkedin.com/in/pavan-kalyan-varanasi-210573267/" />
                  <SocialIcon icon={<Mail className="h-5 w-5" />} href="mailto:varanasipavankalyan07@gmail.com" />
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <FooterLink href="#" text="About Us" color="text-sky-200" />
                  <FooterLink href="#" text="How It Works" color="text-sky-200" />
                  <FooterLink href="#" text="Contact" color="text-sky-200" />
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
                <ul className="space-y-2">
                  <FooterLink href="#" text="Help Center" color="text-sky-200" />
                  <FooterLink href="#" text="Privacy Policy" color="text-sky-200" />
                  <FooterLink href="#" text="Terms of Service" color="text-sky-200" />
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sky-200 text-sm">
                © 2025 Bridge Batch. All rights reserved.
              </p>
              <p className="text-sky-200 text-sm mt-2 md:mt-0">
                Made with <Heart className="h-4 w-4 inline text-red-400" /> for building connections
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

// Reusable FeatureCard Component
const FeatureCard = ({ to, icon, title, description, iconBgColor, iconTextColor }) => {
  return (
    <Link to={to} className="block bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center transition-all duration-300 hover:bg-white/20 hover:transform hover:scale-105">
      <div className={`inline-flex items-center justify-center h-16 w-16 rounded-full ${iconBgColor} ${iconTextColor} mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-sky-100">{description}</p>
    </Link>
  );
};

// Social Icon Component
const SocialIcon = ({ icon, href }) => (
  <a href={href} className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-sky-200 hover:bg-white/20 hover:text-white transition-all duration-200">
    {icon}
  </a>
);

// Footer Link Component
const FooterLink = ({ href, text, color }) => (
  <li>
    <a href={href} className={`${color} hover:text-white transition-colors duration-200 text-sm`}>
      {text}
    </a>
  </li>
);

export default AlumniHome;
