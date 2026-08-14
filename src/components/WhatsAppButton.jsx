import React from "react";

function WhatsAppButton() {
  return (
    <a
      className="joki-whatsapp"
      href="https://wa.me/256778283522"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Joki Holdings on WhatsApp"
    >
      <img
        src="/assets/images/svg/whatsapp.svg"
        alt=""
        className="joki-whatsapp-icon"
      />

      <span className="joki-whatsapp-label">
        WhatsApp Us
      </span>
    </a>
  );
}

export default WhatsAppButton;
