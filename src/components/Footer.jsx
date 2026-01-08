import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const quickLinks = [
    { name: 'Productos', href: '#productos' },
    { name: 'Quiénes Somos', href: '#nosotros' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Blog', href: '#' },
    { name: 'Carreras', href: '#' },
  ];

  const services = [
    { name: 'Desarrollo a Medida', href: '#' },
    { name: 'Cloud Solutions', href: '#' },
    { name: 'Ciberseguridad', href: '#' },
    { name: 'Big Data & Analytics', href: '#' },
    { name: 'Apps Móviles', href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              Nexion
            </h3>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Transformando empresas a través de soluciones tecnológicas innovadoras y personalizadas.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm text-blue-300 mb-1">Email</div>
                  <a
                    href="mailto:info@nexion.com.ar"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    info@nexion.com.ar
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm text-blue-300 mb-1">Teléfono</div>
                  <a
                    href="tel:+5491112345678"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    +54 9 11 1234-5678
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm text-blue-300 mb-1">Ubicación</div>
                  <p className="text-blue-200">
                    Buenos Aires, Argentina
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm">
              © {currentYear} Nexion. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
