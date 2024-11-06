"use client"

import { useState } from 'react';
import SelectedServices from './SelectedServices';
import { SelectedService } from '@/app/utils/interfaces/types';
import { servicesData } from '@/app/utils/lib/lib';
import ServiceList from './ServiceList';

const SubmitManuscript = () => {
    const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);

    const handleAddService = (serviceName: string,servicePrice: number) => {
        setSelectedServices((prev) => [...prev, { name: serviceName, price: servicePrice }]);
    };

    const handleRemoveService = (serviceName: string) => {
        setSelectedServices((prev) => prev.filter((service) => service.name !== serviceName));
    };

    return (
        <div className="mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 space-y-4">
                {servicesData.map((category) => (
                    <ServiceList
                        key={category.title}
                        title={category.title}
                        services={category.services}
                        onAdd={(serviceName, servicePrice) => handleAddService(serviceName, servicePrice)}
                    />
                ))}
            </div>
            <div>
                <SelectedServices selectedServices={selectedServices} onRemove={handleRemoveService} />
            </div>
        </div>
    );
};

export default SubmitManuscript;