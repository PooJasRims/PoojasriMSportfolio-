import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/poojasrims2306", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/poojasri-ms-86699a294", label: "LinkedIn" },
    { icon: Mail, href: "mailto:poojasrims2306@gmail.com", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold mb-4 hover:text-primary-glow transition-colors"
              >
                Poojasri M.S.
              </button>
              <p className="text-primary-foreground/80 leading-relaxed">
                Aspiring Software Developer passionate about Full Stack Development, 
                AI/ML, and creating innovative solutions that make a difference.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(item.toLowerCase());
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="space-y-3 mb-6">
                <p className="text-primary-foreground/80">poojasrims2306@gmail.com</p>
                <p className="text-primary-foreground/80">Chennai - 600 097</p>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-all duration-300 flex items-center justify-center group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-primary-foreground/80 group-hover:text-primary-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © {currentYear} Poojasri M.S. All rights reserved.
            </p>
            <p className="flex items-center text-primary-foreground/60 text-sm">
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;