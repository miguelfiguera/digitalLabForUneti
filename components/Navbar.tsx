"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-dlab-dark-blue">
            Digital<span className="text-dlab-orange">Lab</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`nav-link text-sm font-medium ${
              isActive("/")
                ? "text-dlab-dark-blue active"
                : "text-gray-600 hover:text-dlab-dark-blue"
            }`}
          >
            Inicio
          </Link>
          <Link
            href="/Services"
            className={`nav-link text-sm font-medium ${
              isActive("/Services")
                ? "text-dlab-dark-blue active"
                : "text-gray-600 hover:text-dlab-dark-blue"
            }`}
          >
            Servicios
          </Link>
          <Link
            href="/Portfolio"
            className={`nav-link text-sm font-medium ${
              isActive("/Portfolio")
                ? "text-dlab-dark-blue active"
                : "text-gray-600 hover:text-dlab-dark-blue"
            }`}
          >
            <Folder size={16} className="inline mr-1" />
            Portafolio
          </Link>
          <Link
            href="/About"
            className={`nav-link text-sm font-medium ${
              isActive("/About")
                ? "text-dlab-dark-blue active"
                : "text-gray-600 hover:text-dlab-dark-blue"
            }`}
          >
            Nosotros
          </Link>
          <Button
            asChild
            className="bg-dlab-orange hover:bg-dlab-orange/90 transition-all"
          >
            <Link href="/#Agenda">Contáctanos</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dlab-dark-blue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`text-base font-medium py-2 ${
                isActive("/") ? "text-dlab-orange" : "text-gray-600"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/Services"
              className={`text-base font-medium py-2 ${
                isActive("/Services") ? "text-dlab-orange" : "text-gray-600"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="/Portfolio"
              className={`text-base font-medium py-2 flex items-center gap-2 ${
                isActive("/Portfolio") ? "text-dlab-orange" : "text-gray-600"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Folder size={16} /> Portafolio
            </Link>
            <Link
              href="/About"
              className={`text-base font-medium py-2 ${
                isActive("/About") ? "text-dlab-orange" : "text-gray-600"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Button
              asChild
              className="bg-dlab-orange hover:bg-dlab-orange/90 transition-all w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link href="/#Agenda">Contáctanos</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
