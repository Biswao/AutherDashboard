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
}

export interface ServiceCategory {
    title: string;
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
    services: { name: string, price: number }[];
    onAdd: (service: string, price: number) => void;
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
    user_id: string;
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