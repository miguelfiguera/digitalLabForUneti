"use client";
import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormWithValidation = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic Validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast.error("Por favor, complete todos los campos.");
      return;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Por favor, ingrese un correo electrónico válido.");
      return;
    }

    // Phone Validation (Simple Example: At least 7 digits)
    const phoneRegex = /^\d{7,}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error(
        "Por favor, ingrese un número de teléfono válido (al menos 7 dígitos)."
      );
      return;
    }

    try {
      console.log("Form Data:", formData);
      toast.success(
        "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto."
      );
      setFormData({ fullName: "", email: "", phone: "", message: "" }); // Clear the form on success
    } catch (error) {
      console.error("Form Submission Error:", error);
      toast.error(
        "Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde."
      );
    }
  };

  return (
    <section id="Agenda" className="py-12 bg-dlab-light">
      <div className="container mx-auto px-4 bg-white rounded-3xl max-w-[40%] py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-dlab-dark-blue mb-8 text-center">
          Contáctanos
        </h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nombre Completo:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Tu nombre completo"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Correo Electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Tu correo electrónico"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Teléfono:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Tu número de teléfono"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Mensaje:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Escribe tu mensaje aquí"
            ></textarea>
          </div>

          <Button
            type="submit"
            className="bg-dlab-orange hover:bg-dlab-orange/90 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Enviar Mensaje
          </Button>
        </form>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </section>
  );
};

export default FormWithValidation;
