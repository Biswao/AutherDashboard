import React, { useState } from "react";
import "./OrderModal.css";
import { OrderDetails } from "@/app/utils/interfaces/types";
import useFetchOrder from "@/app/hooks/authorDashboard/useFetchOrder";

const OrderModal = ({ modalHandler }: { modalHandler: () => void }) => {
    const userId: string | null = typeof window !== 'undefined' ? localStorage.getItem("user_id") : null
    const { fetchOrder, error, loading }: { fetchOrder: OrderDetails[] | null, error: boolean, loading: boolean } = useFetchOrder(userId)
    console.log({ fetchOrder });

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h2>Order Information Details</h2>
                    <button onClick={modalHandler} className="close-button">×</button>
                </div>
                <div className="modal-body">
                    {/* {fetchOrder?.map((val) => {

                        return (
                            <>
                                <p><strong>User Name:</strong> sfas</p>
                                <p><strong>Order ID:</strong> {val.order_id}</p>
                                <p><strong>Service Category:</strong> </p>
                                <p><strong>Service Type:</strong> sdfdsgs</p>
                                <p><strong>Service Details:</strong> sdfgsdgs</p>
                                <p><strong>Major Service Area:</strong> dsgsgs</p>
                                <p><strong>Specific Service Area:</strong> sdfgsgs</p>
                                <p><strong>Submit Date:</strong>314145</p>
                                <p><strong>Delivery Date:</strong> 4352435</p>
                                <p><strong>Journal Name:</strong> dgsgsg</p>
                                <p><strong>Language:</strong>sdgweg</p>
                                <p><strong>Word Count:</strong> 1353245</p>
                                <p><strong>Instructions for Editor:</strong>afsfafa</p>
                            </>

                        )

                    })} */}

                    <p><strong>User Name:</strong> sfas</p>
                    <p><strong>Order ID:</strong> 324324</p>
                    <p><strong>Service Category:</strong> </p>
                    <p><strong>Service Type:</strong> sdfdsgs</p>
                    <p><strong>Service Details:</strong> sdfgsdgs</p>
                    <p><strong>Major Service Area:</strong> dsgsgs</p>
                    <p><strong>Specific Service Area:</strong> sdfgsgs</p>
                    <p><strong>Submit Date:</strong>314145</p>
                    <p><strong>Delivery Date:</strong> 4352435</p>
                    <p><strong>Journal Name:</strong> dgsgsg</p>
                    <p><strong>Language:</strong>sdgweg</p>
                    <p><strong>Word Count:</strong> 1353245</p>
                    <p><strong>Instructions for Editor:</strong>afsfafa</p>




                </div>
            </div>
        </div>
    );
};

export default OrderModal;
