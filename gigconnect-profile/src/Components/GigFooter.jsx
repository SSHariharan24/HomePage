import React from 'react';
import { FiExternalLink, FiMail, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';

const FooterColumn = ({ title, links, externalLinks = false }) => (
  <div>
    <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
      {title}
    </h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a 
            href={link.href} 
            className="text-sm text-gray-500 hover:text-gray-800 flex items-center"
            target={externalLinks ? "_blank" : undefined}
            rel={externalLinks ? "noopener noreferrer" : undefined}
          >
            {link.label}
            {externalLinks && <FiExternalLink className="ml-1" size={12} />}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialLink = ({ icon: Icon, href, label }) => (
  <a 
    href={href} 
    aria-label={label}
    className="text-gray-500 hover:text-gray-800 p-2"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="h-5 w-5" />
  </a>
);

const GigFooter = () => {
  const footerLinks = {
    gigConnect: {
      title: "GigConnect",
      description: "Connecting talent with opportunity in the gig economy.",
      links: []
    },
    freelancers: {
      title: "For Freelancers",
      links: [
        { label: "Browse Gigs", href: "/gigs" },
        { label: "Profile Setup", href: "/profile" },
        { label: "Get Verified", href: "/verification" },
        { label: "Success Stories", href: "/success" }
      ]
    },
    clients: {
      title: "For Clients",
      links: [
        { label: "Post a Gig", href: "/post-gig" },
        { label: "Find Talent", href: "/talent" },
        { label: "Payment Options", href: "/payments" },
        { label: "Hiring Guide", href: "/guide" }
      ]
    },
    company: {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Careers", href: "/careers" },
        { label: "Privacy Policy", href: "/privacy", external: true }
      ]
    }
  };

  const socialLinks = [
    { icon: FiMail, href: "mailto:contact@gigconnect.com", label: "Email" },
    { icon: FiTwitter, href: "https://twitter.com/gigconnect", label: "Twitter" },
    { icon: FiLinkedin, href: "https://linkedin.com/company/gigconnect", label: "LinkedIn" },
    { icon: FiGithub, href: "https://github.com/gigconnect", label: "GitHub" }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-12" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              {footerLinks.gigConnect.title}
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              {footerLinks.gigConnect.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <SocialLink key={index} {...link} />
              ))}
            </div>
          </div>

          <FooterColumn 
            title={footerLinks.freelancers.title} 
            links={footerLinks.freelancers.links} 
          />
          
          <FooterColumn 
            title={footerLinks.clients.title} 
            links={footerLinks.clients.links} 
          />
          
          <FooterColumn 
            title={footerLinks.company.title} 
            links={footerLinks.company.links}
            externalLinks={true}
          />
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {currentYear} GigConnect. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="/terms" className="text-sm text-gray-500 hover:text-gray-800">
              Terms of Service
            </a>
            <a href="/cookies" className="text-sm text-gray-500 hover:text-gray-800">
              Cookie Policy
            </a>
            <a href="/accessibility" className="text-sm text-gray-500 hover:text-gray-800">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GigFooter;