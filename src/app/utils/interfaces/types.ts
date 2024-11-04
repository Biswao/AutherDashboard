// types.ts
import { ReactNode } from 'react';

export interface SidebarProps {
    children: ReactNode;
    active: string;
    setActive: (active: string) => void;
}

export interface HeaderProps {
    isOpen?: boolean;
    toggleSidebar?: () => void;
}

export interface TableProps {
    headers: string[];
    data: string[][];
    emptyMessage: string
    mainHeader: string
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