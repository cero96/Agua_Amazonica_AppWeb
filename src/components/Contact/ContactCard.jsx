// ContactCard.jsx
import React from "react";
import { MapPin, Phone } from "lucide-react";
import "./ContactPage.css";

export default function ContactCard({ title, address, phone1, phone2 }) {
  return (
    <div className="contactCard">
      <h3>{title}</h3>
      <p className="address">
        <MapPin size={18} aria-hidden="true" /> {address}
      </p>
      <p className="phone">
        <Phone size={18} aria-hidden="true" /> {phone1}
      </p>
      {phone2 && (
        <p className="phone">
          <Phone size={18} aria-hidden="true" /> {phone2}
        </p>
      )}
    </div>
  );
}
