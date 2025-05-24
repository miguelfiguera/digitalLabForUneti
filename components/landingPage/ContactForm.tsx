"use client";

import React from "react";
import { InlineWidget } from "react-calendly";

interface Props {
  [key: string]: never;
}

function ContactForm(props: Props) {
  const {} = props;

  return (
    <section id="Agenda" className="py-16 bg-dlab-light">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold text-dlab-dark-blue mb-6 text-center">
          Agenda tu consulta
        </h3>

        <InlineWidget url="https://calendly.com/hola-digitallab" />
      </div>
    </section>
  );
}

export default ContactForm;
