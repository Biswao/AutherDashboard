"use client"

import {  useEffect, useState } from 'react';
import SelectedServices from './SelectedServices';
import { SelectedService } from '@/app/utils/interfaces/types';
import { servicesData } from '@/app/utils/lib/lib';
import ServiceList from './ServiceList';
import MainStepFormComponent from '../MainStepFormComponent/MainStepFormComponent';
import './SubmitManuscript.css'
import { SubmitManuscriptContext } from '@/app/context/SubmitManuscriptContext';
import PublicationSupportForm from '../PublicationSupportForm/PublicationSupportForm';
import PublicationForm from '../JournalPublicationForm/JournalPublicationForm';

const SubmitManuscript = () => {
    const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
    const [selecetedServiceObject, setSelectedServiceObject] = useState<{ [key: string]: string }>({})       
    const [stepFormData, setStepFormData] = useState<any>()
    const [showForm, setShowForm] = useState<boolean>(false)
    const [totalPrice, setTotalPrice] = useState<number>()
    const [serviceTitle, setServiceTitle] = useState<string>("")

    useEffect(() => {
        let sum = 0
        if(selectedServices && selectedServices.length){
            sum = selectedServices.reduce( (accumulator, currentValue) => accumulator + currentValue.price,0)
        }

        setTotalPrice(sum)
    })


    useEffect(() => {
        const seleceted_service_object: { [key: string]: string } = {}
        if (selectedServices && selectedServices.length) {
            selectedServices.map(val => {
                seleceted_service_object[val.name] = val.name
            })

            setSelectedServiceObject(seleceted_service_object)
        }else if(!selectedServices.length){
            setSelectedServiceObject({})
        }
    }, [selectedServices])

    const handleAddService = (serviceName: string, servicePrice: number,title: string) => {
        setSelectedServices((prev) => [...prev, { name: serviceName, price: servicePrice }]);
        setShowForm(!showForm)
        setServiceTitle(title)
    };

    const handleRemoveService = (serviceName: string) => {
        setSelectedServices((prev) => prev.filter((service) => service.name !== serviceName));
    };


    const formDataObject: any = {
        stepFormData,
        setStepFormData,
        totalPrice,
        setTotalPrice,
        serviceTitle
    }

    return (
        <SubmitManuscriptContext.Provider value={formDataObject}>
            <div className="mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 space-y-4">
                    {!showForm && servicesData.map((category) => (
                        <ServiceList
                            key={category.title}
                            title={category.title}
                            services={category.services}
                            onAdd={(serviceName: string, servicePrice: number,title: string) => handleAddService(serviceName, servicePrice,title)}
                            selecetedServiceObject={selecetedServiceObject}
                        />
                    ))}
                    {showForm && <MainStepFormComponent />}
                </div>
                <div>
                    <SelectedServices selectedServices={selectedServices} onRemove={handleRemoveService} />
                </div>
            </div>
            <button className='submit-manuscript-next-button' onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Previous' : 'Next'}
                <div className="arrow-wrapper">
                    <div className="arrow"></div>

                </div>
            </button>
        </SubmitManuscriptContext.Provider>
    );
};

export default SubmitManuscript;