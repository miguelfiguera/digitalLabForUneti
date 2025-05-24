import Hero from "@/components/landingPage/Hero";
//import Clients from "@/components/landingPage/Clients";
import FeaturedServices from "@/components/landingPage/FeaturedServices";
import Stadistics from "@/components/landingPage/Stadistics";
import WhyChooseUs from "@/components/landingPage/WhyChooseUs";
import Testimonials from "@/components/landingPage/Testimonials";
import CTAction from "@/components/landingPage/CTAction";
import { ToastContainer } from "react-toastify";
import FormWithValidation from "@/components/FormWithValidation";

const Home = () => {
  return (
    <div className="pt-16">
      <ToastContainer />
      {/* Hero Section */}
      <Hero />

      {/* Logos de clientes 
      <Clients />*/}

      {/* Servicios destacados */}
      <FeaturedServices />

      {/* Estadísticas */}
      <Stadistics />

      {/* ¿Por qué elegirnos? */}
      <WhyChooseUs />

      {/* Testimonios */}
      <Testimonials />

      {/* CTA Section */}
      <CTAction />

      {/* Formulario de contacto rápido */}
      <FormWithValidation />
    </div>
  );
};

export default Home;
