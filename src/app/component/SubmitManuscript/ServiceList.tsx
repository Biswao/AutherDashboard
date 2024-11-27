"use client"
import { MainContext } from "@/app/context/MainContext";
import { ServiceListProps } from "@/app/utils/interfaces/types";
import { useContext } from "react";
const ServiceList: React.FC<ServiceListProps> = ({ title, services, onAdd }) => {
  const { setActive } = useContext(MainContext)
  return (
    <div style={{ backgroundColor: '#E7F4FF' }} className="text-white p-4 rounded-lg">
      <h2 style={{ backgroundColor: '#0C416B' }} className="flex justify-center bg-blue-100 p-2 mb-2 rounded-lg text-white-900 text-lg font-semibold">{title}</h2>
      {services.map((service) => (
        <div key={service.name} style={{ backgroundColor: '#D1E7F9' }} className="flex justify-between items-center bg-blue-100 p-2 mb-2 rounded-lg text-blue-900">
          <span>{service.name}</span>
          <button style={{ backgroundColor: '#0D5086' }} onClick={() => {
            if (service.name === 'Customized Editing Service') {
              setActive("Request a Quotation")
            } else {
              onAdd(service.name, service.price);
            }
          }} className="text-white px-4 py-1 rounded-lg">
            {service.name === 'Customized Editing Service' ? "yes" : "Add"}
          </button>
        </div>
      ))}
    </div>
  );




}
export default ServiceList;