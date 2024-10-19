"use client"
import { SidebarProps } from "@/app/utils/interfaces/types";
import { useState } from "react";
import Header from "../Header/Header";

export default function Sidebar({ children }: SidebarProps) {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="flex">
            {/* Sidebar */}
            <aside
                className={`bg-gray-800 text-white h-screen transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0 w-full md:w-2/5 lg:w-1/3' : 'w-0 overflow-hidden'
                    }`}
            >
                {/* Header Component */}
                <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />
                <div className="flex justify-between items-center p-4">
                    <h2 className={`text-xl font-bold transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                        Sidebar
                    </h2>
                    {/* Close button */}
                    <button
                        onClick={toggleSidebar}
                        className="text-white focus:outline-none"
                    >
                        {/* Arrow pointing left when open */}
                        {isOpen && <span>&#x2190;</span>}
                    </button>
                </div>

                <nav className={`${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                    <ul>
                        <li className="mb-2">Item 1</li>
                        <li className="mb-2">Item 2</li>
                        <li className="mb-2">Item 3</li>
                    </ul>
                </nav>
            </aside>

            {/* Main content area */}
            <main className="flex-1 p-4">
                {!isOpen && (
                    <button
                        onClick={toggleSidebar}
                        className="text-white bg-gray-800 p-2 rounded-md focus:outline-none"
                    >
                        {/* Arrow pointing right when closed */}
                        {!isOpen && <span>&#x2192;</span>}
                    </button>
                )}
                {children}
            </main>
        </div>
    )
}