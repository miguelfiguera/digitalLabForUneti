import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dlab-dark-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                Digital<span className="text-dlab-orange">Lab</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-6">
              Impulsamos el crecimiento de tu negocio a través de estrategias
              digitales innovadoras y efectivas.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61574258596489"
                target="_blank"
                className="text-gray-300 hover:text-dlab-orange transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/thedigitallab.dev"
                target="_blank"
                className="text-gray-300 hover:text-dlab-orange transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/thedigitallab-dev"
                target="_blank"
                className="text-gray-300 hover:text-dlab-orange transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:jlpq@thedigitallab.dev"
                target="_blank"
                className="text-gray-300 hover:text-dlab-orange transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-dlab-orange transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/Services"
                  className="text-gray-300 hover:text-dlab-orange transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/About"
                  className="text-gray-300 hover:text-dlab-orange transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/#Agenda"
                  className="text-gray-300 hover:text-dlab-orange transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-bold mb-4">Nuestros Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/Services"
                  className="text-gray-300 hover:text-dlab-orange transition-colors"
                >
                  Estrategia de Marca e Identidad Visual
                </Link>
              </li>
              <li>
                <Link
                  href="/Services"
                  className="text-gray-300 hover:text-dlab-orange transition-colors"
                >
                  Marketing en Redes Sociales
                </Link>
              </li>
              <li>
                <Link
                  href="/Services"
                  className="text-gray-300 hover:text-dlab-orange transition-colors"
                >
                  Desarrollo Web y SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/Services"
                  className="text-gray-300 hover:text-dlab-orange transition-colors"
                >
                  Automatización de Negocios
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin
                  size={20}
                  className="text-dlab-orange flex-shrink-0 mt-1"
                />
                <span className="text-gray-300">Santiago, Chile.</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-dlab-orange flex-shrink-0" />
                <span className="text-gray-300">+56 9-4808-4904</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-dlab-orange flex-shrink-0" />
                <span className="text-gray-300">jlpq@digitallab.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} DigitalLab. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
