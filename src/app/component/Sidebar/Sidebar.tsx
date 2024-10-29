"use client";
import { SidebarProps } from "@/app/utils/interfaces/types";
import { useState } from "react";
import Header from "../Header/Header";
import "./Sidebar.css"
import Link from "next/link";

export default function Sidebar({ children }: SidebarProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Header Component */}
            <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />

            <div className="SideabrAllign" style={{display:"flex"}}>
                {/* Sidebar */}
                <aside
                    className={`bg-gray-800 text-white h-auto transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0 w-full sm:w-1/2 md:w-2/5 lg:w-1/5' : 'w-0 overflow-hidden'
                        }`}
                >
                    <div className="flex flex-col items-center p-4">
                       
                        {/* Profile Section */}
                        <div className="text-center mb-8 centroid">
                            <img src="./assets/images/user.png" alt="Profile" className="w-20 h-20 rounded-full mb-3" />
                            <h3 className="text-xl font-semibold">Biswa Ranjan Pradhan</h3>
                            <p className="text-green-500 text-sm flex items-center justify-center">
                                <i className="fa fa-check-circle mr-1"></i> Author
                            </p>
                        </div>

                        {/* Navigation */}
                        <nav className="w-full">
                            <ul className="w-full ulListStyle">
                                <li className="mb-2 w-full">
                                    <Link href="#" className="block py-2 px-4 text-left bg-teal-600 w-full">Dashboard</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="#" className="block py-2 px-4 text-left hover:bg-gray-700 w-full">Submit Manuscript</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/Quotation" className="block py-2 px-4 text-left hover:bg-gray-700 w-full">Request a Quotation</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="#" className="block py-2 px-4 text-left hover:bg-gray-700 w-full">View Orders Submitted</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="#" className="block py-2 px-4 text-left hover:bg-gray-700 w-full">Refer A Colleague</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="#" className="block py-2 px-4 text-left hover:bg-gray-700 w-full">Coupon Center</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="#" className="block py-2 px-4 text-left hover:bg-gray-700 w-full">Book a slot in Webinar</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="#" className="block py-2 px-4 text-left hover:bg-gray-700 w-full">Talk to an expert</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>

                {/* Main content area */}
                <main className="flex-grow p-4">
                    {children}
                </main>
            </div>
        </div>
    );
}
