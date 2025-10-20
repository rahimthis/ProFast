// src/components/Home/Services/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ servics }) => {
  const { icon: Icon, title, description } = servics;
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-base-200">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="text-primary text-5xl">
          <Icon />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
