// src/Card.jsx
import React from "react";

const Card = ({ name, url, image }) => (
  <div className="bg-white shadow-md rounded-lg p-6 m-4 w-60 text-center transform transition-transform hover:-translate-y-1 hover:scale-105 duration-300">
    <img src={image} alt={name} className="w-24 h-24 mx-auto mb-4" />
    <h2 className="text-xl font-semibold mb-2">{name}</h2>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:text-blue-700"
    >
      More Info
    </a>
  </div>
);

export default Card;
