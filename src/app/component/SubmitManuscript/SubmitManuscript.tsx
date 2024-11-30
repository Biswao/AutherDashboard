"use client"

import { useEffect, useState } from 'react';
import SelectedServices from './SelectedServices';
import { FormDataOne, FormDataThree, FormDataTwo, PublicationFormType, SelectedService, SubmitManuscriptRequest } from '@/app/utils/interfaces/types';
import { servicesData } from '@/app/utils/lib/lib';
import ServiceList from './ServiceList';
import MainStepFormComponent from '../MainStepFormComponent/MainStepFormComponent';
import './SubmitManuscript.css'
import { SubmitManuscriptContext } from '@/app/context/SubmitManuscriptContext';
import PublicationForm from '../JournalPublicationForm/JournalPublicationForm';
import useManuscript from '@/app/hooks/authorDashboard/useManuscript';
import useQuotation from '@/app/hooks/authorDashboard/useQuotation';

const SubmitManuscript = () => {
    const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
    const [selecetedServiceObject, setSelectedServiceObject] = useState<{ [key: string]: string }>({})
    const [stepFormData, setStepFormData] = useState<SubmitManuscriptRequest>()
    const [showForm, setShowForm] = useState<boolean>(false)
    const [totalPrice, setTotalPrice] = useState<number>()
    const [serviceTitle, setServiceTitle] = useState<string>("")
    const [finalCheck, setFinalCheck] = useState<boolean>(false)
    const [selectedService, setSelecetedService] = useState<string>("")
    const [formDataOne, setFormDataOne] = useState<FormDataOne>({
        user_id: typeof window !== 'undefined' ? localStorage.getItem('user_id') : "",
        order_type: "manu",
        service_type: 'Proofreading',
        "service_name": "",
        major_subject: '',
        specific_subject: '',
        language: 'American',
        wordRange: '2500',
        word_count: '',
        turn_ar_time: '',
        inst_for_editor: '',
        journal_format: ""
    });
    const [formDataTwo, setFormDataTwo] = useState<FormDataTwo>({
        upld_content_file: null,
        upld_figure_file: null,
        upld_table_file: null,
        title: '',
        abstract: '',
        keyword: ''
    });
    const [formDataThree, setFormDataThree] = useState<FormDataThree>({
        bill_name: '',
        bill_addr1: '',
        bill_addr2: '',
        bill_phone: '',
        bill_city: '',
        bill_state: '',
        bill_zip: '',
        bill_country: ''
    });
    const [publicationFormdata, setPublicationFormData] = useState<PublicationFormType>({
        user_id: typeof window !== 'undefined' ? localStorage.getItem('user_id') : "",
        order_type: "manu",
        service_type: "",
        service_name: "",
        title: '',
        language: 'American English',
        abstract: '',
        keyword: '',
        inst_for_editor: '',
        word_count: '',
        upld_content_file: null,
        upld_figure_file: null,
        upld_table_file: null,
    });

    const { submitQuotation, submitQuotationJournalPublicationPackage, getServiceNameById, serviceName, loading } = useManuscript()
    // const { getServiceNameById, serviceName } = useQuotation()

    useEffect(() => {
        let sum = 0
        if (selectedServices && selectedServices.length) {
            sum = selectedServices.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
        }

        setTotalPrice(sum)
    }, [])


    useEffect(() => {
        const seleceted_service_object: { [key: string]: string } = {}
        if (selectedServices && selectedServices.length) {
            selectedServices.map(val => {
                seleceted_service_object[val.name] = val.name
            })

            setSelectedServiceObject(seleceted_service_object)
        } else if (!selectedServices.length) {
            setSelectedServiceObject({})
        }
    }, [selectedServices])

    const handleAddService = (serviceName: string, servicePrice: number, title: string, id: string) => {
        setSelectedServices((prev) => [...prev, { name: serviceName, price: servicePrice }]);
        setShowForm(!showForm)
        setServiceTitle(title)
        setSelecetedService(serviceName)
        if (title === "Editing Services") {
            setFormDataOne((prev: any) => {
                return {
                    ...prev,
                    service_type: "1",
                    service_name: id

                }
            })
        } else if (title === "Journal Publication Packages") {
            setPublicationFormData((prev: any) => {
                return {
                    ...prev,
                    service_type: id,
                    service_name: id

                }
            })
        } else if (title === "Publication Support Services") {
            console.log("I am here",id)
            getServiceNameById(id)
            setFormDataOne((prev: any) => {
                return {
                    ...prev,
                    service_type: id,
                }
            })
        }
    };

    const handleRemoveService = (serviceName: string) => {
        setSelectedServices((prev) => prev.filter((service) => service.name !== serviceName));
    };

    const handleSubmitForm = (e:any) => {
        e.preventDefault()
        if(serviceTitle === "Journal Publication Packages"){
            submitQuotationJournalPublicationPackage(publicationFormdata,formDataOne,formDataTwo,formDataThree)
        }else{
            submitQuotation(formDataOne,formDataTwo,formDataThree)
        }
    }


    const formDataObject: any = {
        stepFormData,
        setStepFormData,
        totalPrice,
        setTotalPrice,
        serviceTitle,
        formDataOne,
        setFormDataOne,
        formDataTwo,
        setFormDataTwo,
        formDataThree,
        setFormDataThree,
        finalCheck,
        setFinalCheck,
        publicationFormdata,
        setPublicationFormData,
        serviceName,
        selectedService
    }

    console.log({ formDataOne, formDataTwo, formDataThree })

    return (
        <SubmitManuscriptContext.Provider value={formDataObject}>
            <div className="mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 space-y-4">
                    {!showForm && servicesData.map((category) => (
                        <ServiceList
                            key={category.title}
                            title={category.title}
                            services={category.services}
                            onAdd={(serviceName: string, servicePrice: number, title: string, id: string) => handleAddService(serviceName, servicePrice, title, id)}
                            selecetedServiceObject={selecetedServiceObject}
                        />
                    ))}
                    {showForm && (serviceTitle === "Editing Services" || serviceTitle === "Publication Support Services") ? <MainStepFormComponent /> : showForm && (serviceTitle === "Journal Publication Packages") ? <PublicationForm /> : ""}
                </div>
                <div>
                    <SelectedServices selectedServices={selectedServices} onRemove={handleRemoveService} />
                </div>
            </div>
            <div style={{width: "70%",display: "flex", justifyContent: "space-between"}}>
                <button className='submit-manuscript-next-button' onClick={() => setShowForm(!showForm)}>
                    {showForm ? 'Previous' : 'Next'}
                    <div className="arrow-wrapper">
                        <div className="arrow"></div>
                    </div>
                </button>
                {finalCheck && (
                    <button className='submit-manuscript-next-button' onClick={handleSubmitForm}>
                        {loading ? "Loading..." : "Submit"}
                    </button>
                )}
            </div>
        </SubmitManuscriptContext.Provider>
    );
};

export default SubmitManuscript;