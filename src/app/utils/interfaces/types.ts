// types.ts
import { ReactNode } from 'react';

export interface SidebarProps {
    children: ReactNode;
}

export interface HeaderProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}