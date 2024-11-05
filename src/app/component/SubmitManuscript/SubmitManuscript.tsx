"use client"

import { useState } from 'react';
import SelectedServices from './SelectedServices';
import { SelectedService } from '@/app/utils/interfaces/types';

const SubmitManuscript = () => {
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);

  const handleAddService = (serviceName: string) => {
    const servicePrice = 100; // Set default price, adjust as needed
    setSelectedServices((prev) => [...prev, { name: serviceName, price: servicePrice }]);
  };

  const handleRemoveService = (serviceName: string) => {
    setSelectedServices((prev) => prev.filter((service) => service.name !== serviceName));
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-3 gap-4">
      <div>
        <SelectedServices selectedServices={selectedServices} onRemove={handleRemoveService} />
      </div>
    </div>
  );
};

export default SubmitManuscript;