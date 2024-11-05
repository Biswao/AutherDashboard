"use client"

import { useState } from 'react';
import SelectedServices from './SelectedServices';
import { SelectedService } from '@/app/utils/interfaces/types';
import StepForm from '../StepForm/StepForm';
import StepForm2 from '../StepForm2/StepForm2';
import StepForm3 from '../StepForm3/StepForm3';

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
    <>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
          <StepForm />
          <StepForm2 />
          <StepForm3 />
          </div>
          <div className="col-lg-3">
          <SelectedServices selectedServices={selectedServices} onRemove={handleRemoveService} />
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4 grid grid-cols-3 gap-4">
        
      </div>

    </>
  );
};

export default SubmitManuscript;