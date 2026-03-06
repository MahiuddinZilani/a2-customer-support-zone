import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        {/* Main content grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand / Description Column */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-white text-xl font-bold mb-6">
              CS — Ticket System
            </h3>
            <p className="text-sm leading-relaxed">
              CS — Ticket System is a modern, intuitive customer support
              platform that helps teams efficiently manage, track, and resolve
              customer inquiries. We turn support requests into structured
              tickets, streamline workflows, prioritize urgent issues, and
              provide real-time visibility — so your team can deliver fast,
              personalized help and keep customers happy.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-5">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Products & Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Download Apps
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-5">
              Information
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-5">
              Social Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="text-blue-400">X</span> @CS — Ticket System
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="text-blue-600">in</span> @CS — Ticket System
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="text-blue-700">f</span> @CS — Ticket System
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  support@cst.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center md:text-left text-sm">
          <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
