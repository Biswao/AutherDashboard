// types.ts
import { ReactNode } from 'react';

export interface SidebarProps {
    children: ReactNode;
}

export interface HeaderProps {
    isOpen?: boolean;
    toggleSidebar?: () => void;
    initials: string
}

export interface TableProps {
    headers: string[];
    data: string[][];
    emptyMessage: string
    mainHeader: string
}

export interface OrderDetails {
    order_id: string;
    service_type: string;
    submit_date: string;
    delivery_date: string;
    status: string;
    service_cat: string;
    inst_for_editor:string;
    language: string;
    journal_name: string;
    specific_sub: string;
    maj_serv_area: string;
    service_details:string;
}

export interface AuthorDetails {
    id: string;
    user_type: string;
    user_id: string;
    user_name: string;
    first_name: string;
    last_name: string;
    institution: string | null;
    department: string | null;
    affiliation: string | null;
    position: string | null;
    address1: string | null;
    address2: string | null;
    city: string | null;
    state: string | null;
    country: string;
    pin: string | null;
    phone: string;
    email: string;
    alt_email: string | null;
    c_name: string | null;
    c_phone: string | null;
    c_email: string | null;
    user_find: string;
}

export interface LoginResponse {
    Message?: string;
    user_id?: string;
}

export interface UseAuthReturn {
    login: (email: string, password: string) => Promise<void>;
    loading: boolean;
    error: string | null;
}

export interface Service {
    name: string;
    price: number;
    id: string;
}

export interface ServiceCategory {
    title: string;
    id?: string;
    services: Service[];
}

export interface SelectedServicesProps {
    selectedServices: { name: string; price: number }[];
    onRemove: (serviceName: string) => void;
}

export interface SelectedService {
    name: string;
    price: number;
}

export interface ServiceListProps {
    title: string;
    services: { name: string, price: number, id: string }[];
    onAdd: (service: string, price: number, title: string, id: string) => void;
    selecetedServiceObject: { [key: string]: string }
}

export interface SignupData {
    email: string;
    pswd: string;
    country: string;
    fname: string;
    lname: string;
    phone_no: string;
    user_find: string;
}

export interface SignupResponse {
    Message: string;
}

export interface CountryCodeApiResponse {
    id: string,
    country: string
}

export interface UserInteraction {
    user_id: string;
    subject_area: string;
    contact_mode: string;
    date: string;
    time: string;
}

export interface UserInteractionResponse {
    msg: string;
    status: string;
}

export interface MainContextType {
    active: string;
    setActive: React.Dispatch<React.SetStateAction<string>>;
}

export interface serviceType {
    id: string;
    name: string;
    count: string
}

export interface serviceNameType {
    id: string;
    service_name: string;
    count: string
}

interface SubSubject {
    [key: string]: string;
}

export interface SubjectGroup {
    id: string;
    pid: string;
    subject: string;
    sub_subjects: SubSubject[];
}

interface Option {
    value: string;
    label: string;
}

export interface GroupedOption {
    label: string;
    options: Option[];
}

export interface QuotationData {
    user_id: string | null;
    order_type: string;
    service_type: string;
    service_name: string;
    major_subject: string;
    specific_subject: string;
    delivery_date: string;
    language: string;
    inst_for_editor: string;
    word_count: string;
    pay_mode: string;
    upld_content_file: File | null;
    upld_figure_file: File | null;
    upld_table_file: File | null;
}

export interface FileUploadResponse {
    Message: string;
    FileUrl: string
}

export interface SubmitManuscriptRequest {
    user_id?: string;
    order_type?: string;
    service_type?: string;
    service_name?: string;
    journal_format?: string;
    major_subject?: string;
    specific_subject?: string;
    language?: string;
    word_count?: string;
    total_price?: string;
    turn_ar_time?: string;
    inst_for_editor?: string;
    upld_content_file?: string;
    upld_figure_file?: string;
    upld_table_file?: string;
    title?: string;
    abstract?: string;
    keyword?: string;
    bill_name?: string;
    bill_addr1?: string;
    bill_addr2?: string;
    bill_phone?: string;
    bill_city?: string;
    bill_state?: string;
    bill_zip?: string;
    bill_country?: string;
};

export interface countryListType {
    id: string
    country: string
}

export interface updateAuthorDetailsResponse {
    status: boolean
    msg: string
}

export interface FormDataOne {
    user_id?: string | null,
    order_type: string,
    service_type?: string;
    "service_name": string;
    major_subject?: string;
    specific_subject?: string;
    language?: string;
    wordRange?: string;
    word_count?: string;
    turn_ar_time?: string;
    inst_for_editor?: string;
    journal_format?: string;
}

export interface FormDataTwo {
    upld_content_file: File | null;
    upld_figure_file: File | null;
    upld_table_file: File | null;
    title: string;
    abstract: string;
    keyword: string;
}

export interface FormDataThree {
    bill_name: string;
    bill_addr1: string;
    bill_addr2: string;
    bill_phone: string;
    bill_city: string;
    bill_state: string;
    bill_zip: string;
    bill_country: string;
}

export interface PublicationFormType {
    user_id?: string | null,
    order_type: string,
    service_type: string,
    service_name: string,
    title: string;
    language: string;
    abstract: string;
    keyword: string;
    inst_for_editor: string;
    word_count: string;
    upld_content_file: File | null;
    upld_figure_file: File | null;
    upld_table_file: File | null;
}

export interface SubmitManuscriptContextType {
    stepFormData: any;
    setStepFormData: (data: Partial<FormDataOne>) => void;
    totalPrice: number;
    setTotalPrice: (price: number) => void;
    serviceTitle: string;
    formDataOne: FormDataOne;
    setFormDataOne: (data: Partial<FormDataOne>) => void;
    formDataTwo: FormDataTwo;
    setFormDataTwo: (data: Partial<FormDataTwo>) => void;
    formDataThree: FormDataThree;
    setFormDataThree: (data: Partial<FormDataThree>) => void;
    finalCheck: boolean,
    setFinalCheck: (data: boolean) => void,
    publicationFormdata: PublicationFormType,
    setPublicationFormData: (data: Partial<PublicationFormType>) => void,
    serviceName: any,
    selectedService: string
    setSelectedServices: any
}
