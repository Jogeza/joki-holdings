import React from "react";
import "./WhatsAppFloat.css";

const WhatsAppFloat = () => {
  const phoneNumber = "256761648679"; // replace with Nyumba WhatsApp number
  const message = "Hello Nyumba Dynamics, I would like to know more about your services.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppFloat;