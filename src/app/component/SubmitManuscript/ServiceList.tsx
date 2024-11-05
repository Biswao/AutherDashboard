import { ServiceListProps } from "@/app/utils/interfaces/types";

const ServiceList: React.FC<ServiceListProps> = ({ title, services, onAdd }) => (
  <div className="bg-blue-900 text-white p-4 rounded-lg">
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    {services.map((service) => (
      <div key={service.name} className="flex justify-between items-center bg-blue-100 p-2 mb-2 rounded-lg text-blue-900">
        <span>{service.name}</span>
        <button onClick={() => onAdd(service.name,service.price)} className="bg-blue-600 text-white px-4 py-1 rounded-lg">
          Add +
        </button>
      </div>
    ))}
  </div>
);

export default ServiceList;