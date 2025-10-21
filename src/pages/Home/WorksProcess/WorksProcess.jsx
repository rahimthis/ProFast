import React from "react";
import { FaTruckPickup, FaMoneyBillWave, FaWarehouse, FaBuilding } from "react-icons/fa";

const steps = [
  {
    icon: FaTruckPickup,
    title: "Booking Pick & Drop",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Cash On Delivery",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    icon: FaWarehouse,
    title: "Delivery Hub",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    icon: FaBuilding,
    title: "Booking SME & Corporate",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
];

const WorksProcess = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        {/* 🧭 Section title (left-aligned) */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10 text-left">
          How it Works
        </h2>

        {/* 🧱 Responsive cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="
                  bg-white border border-gray-200 rounded-2xl shadow-sm 
                  p-6 
                  transition-all duration-300 hover:shadow-md hover:-translate-y-1
                "
              >
                {/* 🚚 Icon */}
                <div className="  text-secondary  text-4xl mb-4">
                  <Icon />
                </div>

                {/* 🧾 Title */}
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {step.title}
                </h3>

                {/* 📝 Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorksProcess;
