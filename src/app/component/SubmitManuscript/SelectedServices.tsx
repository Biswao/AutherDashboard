"use client";

import { SelectedServicesProps } from "@/app/utils/interfaces/types";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const SelectedServices: React.FC<SelectedServicesProps> = ({ selectedServices, onRemove }) => {
  const [discountCode, setDiscountCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const servicesSubtotal = selectedServices.reduce((total, service) => total + service.price, 0);
  const totalCost = servicesSubtotal - discount;

  const handleApplyDiscount = () => {
    if (discountCode === "DISCOUNT10") {
      setDiscount(servicesSubtotal * 0.1);
    } else {
      setDiscount(0);
      alert("Invalid discount code.");
    }
  };

  return (
    <div style={{ backgroundColor: '#AFD8F9' , marginTop:'100px' }} className="p-4 sm:p-6 md:p-8 rounded-lg shadow-lg space-y-4 max-w-full md:max-w-md mx-auto">
      <h2 className="text-lg md:text-xl font-semibold text-center">Selected Services</h2>

      <div className="space-y-2">
        {selectedServices.map((service, index) => (
          <div key={index} className="flex items-center justify-between text-sm sm:text-base md:text-lg">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faTrash} className="cursor-pointer" onClick={() => onRemove(service.name)} />
              <span>{service.name}</span>
            </div>
            <span>${service.price.toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-white-300 my-2"></div>

      <div className="flex justify-between text-sm sm:text-base md:text-lg">
        <span>Services Subtotal</span>
        <span>${servicesSubtotal.toFixed(2)}</span>
        <span></span>
      </div>
      <div className="flex justify-between text-sm sm:text-base md:text-lg">
        <span>Discounts Applied</span>
        <span>${discount.toFixed(2)}</span>
        <span></span>
      </div>

      <div className="border-t border-white-300 my-2"></div>
      
      <div className="flex justify-between font-semibold text-sm sm:text-base md:text-lg">
        <span>Total Cost</span>
        <span>${totalCost.toFixed(2)}</span>
        <span></span>
      </div>

      <div className="mt-4">
        <label className="block text-sm md:text-base font-bold text-[#274359]">Have Discount/Referral Code?</label>
        <div className="flex mt-1">
          <input
            type="text"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            className="w-full p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm md:text-base"
            placeholder="Enter code"
          />
          <button
            // onClick={handleApplyDiscount}
            onClick={() => {}}
            className="bg-green-500 text-white px-4 py-2 text-sm md:text-base rounded-r-lg hover:bg-green-600"
          >
            Apply
          </button>
        </div>
      </div>

      <button
        className="w-full bg-green-500 text-white py-2 rounded-lg mt-4 hover:bg-green-600 flex items-center justify-center text-sm md:text-base"
      >
        Proceed
        <span className="ml-2">→</span>
      </button>
    </div>
  );
};

export default SelectedServices;