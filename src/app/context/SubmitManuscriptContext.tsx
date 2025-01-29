import { createContext } from "react";
import { SubmitManuscriptContextType } from "../utils/interfaces/types";

export const SubmitManuscriptContext = createContext<SubmitManuscriptContextType>({
    stepFormData: {},
    setStepFormData: () => { },
    totalPrice: 0,
    setTotalPrice: () => { },   
    serviceTitle: "",
    formDataOne: {
        user_id: "",
        service_type: "",
        order_type: "",
        major_subject: "",
        specific_subject: "",
        language: "",
        wordRange: "",
        word_count: "",
        turn_ar_time: "",
        inst_for_editor: "",
        service_name: ""
    },
    setFormDataOne: () => { },
    formDataTwo: {
        upld_content_file: null,
        upld_figure_file: null,
        upld_table_file: null,
        title: "",
        abstract: "",
        keyword: "",
    },
    setFormDataTwo: () => { },
    formDataThree: {
        bill_name: "",
        bill_addr1: "",
        bill_addr2: "",
        bill_phone: "",
        bill_city: "",
        bill_state: "",
        bill_zip: "",
        bill_country: "",
    },
    setFormDataThree: () => { },
    finalCheck: false,
    setFinalCheck: () => { },
    publicationFormdata: {
        user_id: "",
        order_type: "",
        service_type: "",
        service_name: "",
        title: '',
        language: '',
        abstract: '',
        keyword: '',
        inst_for_editor: '',
        word_count: '',
        upld_content_file: null,
        upld_figure_file: null,
        upld_table_file: null,
    },
    setPublicationFormData: () => { },
    serviceName: [],
    selectedService: "",
    setSelectedServices: () => { }
})