"use client";
import { SidebarProps } from "@/app/utils/interfaces/types";
import { useState , useEffect } from "react";
import Header from "../Header/Header";
import "./Sidebar.css"
import Link from "next/link";
import { useFetchAuthor } from "@/app/hooks/authorDashboard/useFetchAuthor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faComments, faFileUpload, faGift, faQuoteRight, faShoppingCart, faTachometerAlt, faUserFriends } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({ children }: SidebarProps) {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const {loading,error,authorDetails} = useFetchAuthor()
    console.log({authorDetails})

    useEffect(() => {
        // Set initial sidebar state based on screen width
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsOpen(false);
            } else {
                setIsOpen(true);
            }
        };

        // Check screen size on component mount
        handleResize();

        // Update sidebar state on window resize
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
                    className={`text-white h-auto transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0 w-full sm:w-1/2 md:w-2/5 lg:w-1/5' : 'w-0 overflow-hidden'
                        }`} style={{background:'#364D60'}}
                >
                    <div className="flex flex-col items-center p-4">
                       
                        {/* Profile Section */}
                        <div className="text-center mb-8 centroid">
                            <img src="./assets/images/user.png" alt="Profile" className="w-20 h-20 rounded-full mb-3" />
                            <h3 className="text-xl font-semibold">{`${authorDetails?.first_name ?? "No"} ${authorDetails?.last_name ?? "Name"}`}</h3>
                            <p className="text-green-500 text-sm flex items-center justify-center">
                                <i className="fa fa-check-circle mr-1"></i> {authorDetails?.user_type}
                            </p>
                        </div>

                        {/* Navigation */}
                        <nav className="w-full">
                            <ul className="w-full ulListStyle">
                                <li className="mb-2 w-full">
                                    <Link href="/" className="flex items-center py-2 px-4 text-left bg-teal-700 w-full"><FontAwesomeIcon icon={faTachometerAlt} className="mr-2" /><span className="flex-grow">Dashboard</span></Link>
                                </li>
                                <li className="mb-2 w-full">
                                    <Link href="/Quotation" className="flex items-center py-2 px-4 text-left hover:bg-gray-700 w-full"><FontAwesomeIcon icon={faFileUpload} className="mr-2" /><span className="flex-grow">Submit Manuscript</span></Link>
                                </li>
                                <li className="mb-2 w-full">
                                    <Link href="/Quotation" className="flex items-center py-2 px-4 text-left hover:bg-gray-700 w-full"><FontAwesomeIcon icon={faQuoteRight} className="mr-2" /><span className="flex-grow">Request a Quotation</span></Link>
                                </li>
                                <li className="mb-2 w-full">
                                    <Link href="/SubmitOrders" className="flex items-center py-2 px-4 text-left hover:bg-gray-700 w-full"><FontAwesomeIcon icon={faShoppingCart} className="mr-2" /><span className="flex-grow">View Orders Submitted</span></Link>
                                </li>
                                <li className="mb-2 w-full">
                                    <Link href="/Quotation" className="flex items-center py-2 px-4 text-left hover:bg-gray-700 w-full"><FontAwesomeIcon icon={faUserFriends} className="mr-2" /><span className="flex-grow">Refer A Colleague</span></Link>
                                </li>
                                <li className="mb-2 w-full">
                                    <Link href="/Quotation" className="flex items-center py-2 px-4 text-left hover:bg-gray-700 w-full"><FontAwesomeIcon icon={faGift} className="mr-2" /><span className="flex-grow">Coupon Center</span></Link>
                                </li>
                                <li className="mb-2 w-full">
                                    <Link href="/Quotation" className="flex items-center py-2 px-4 text-left hover:bg-gray-700 w-full"><FontAwesomeIcon icon={faCalendarAlt} className="mr-2" /><span className="flex-grow">Book a slot in Webinar</span></Link>
                                </li>
                                <li className="mb-2 w-full">
                                    <Link href="/Quotation" className="flex items-center py-2 px-4 text-left hover:bg-gray-700 w-full"><FontAwesomeIcon icon={faComments} className="mr-2" /><span className="flex-grow">Talk to an expert</span></Link>
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
