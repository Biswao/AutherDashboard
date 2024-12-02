import React, { useState } from "react";
import "./OrderModal.css";
import { AuthorDetails, OrderDetails } from "@/app/utils/interfaces/types";
import useFetchOrder from "@/app/hooks/authorDashboard/useFetchOrder";
import { useFetchAuthor } from "@/app/hooks/authorDashboard/useFetchAuthor";

const OrderModal = ({ modalHandler, content }: { modalHandler: () => void ,content: string}) => {
    const userId: string | null = typeof window !== 'undefined' ? localStorage.getItem("user_id") : null
    const email: string | null = typeof window !== 'undefined' ? localStorage.getItem("email") : null
    const { fetchOrder, error, loading }: { fetchOrder: OrderDetails[] | null, error: boolean, loading: boolean } = useFetchOrder(userId)
    const { authorDetails } : { authorDetails: AuthorDetails | null } = useFetchAuthor(email ?? "")

    const chosenOrder: OrderDetails[] | null = fetchOrder && fetchOrder.length ?  fetchOrder?.filter((val)=> content === val.order_id) : []
    console.log({content,fetchOrder})
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h2>Order Information Details</h2>
                    <button onClick={modalHandler} className="close-button">×</button>
                </div>
                <div className="modal-body">
                    <p><strong>User Name:</strong> {authorDetails?.user_name}</p>
                    <p><strong>Order ID:</strong>{chosenOrder && chosenOrder.length ? chosenOrder[0].order_id : ""}</p>
                    <p><strong>Service Category:</strong>{chosenOrder && chosenOrder.length ? chosenOrder[0].service_cat : ""}</p>
                    <p><strong>Service Type:</strong> {chosenOrder && chosenOrder.length ? chosenOrder[0].service_type : ""}</p>
                    <p><strong>Service Details:</strong> {chosenOrder && chosenOrder.length ? chosenOrder[0].service_details : ""}</p>
                    <p><strong>Major Service Area:</strong> {chosenOrder && chosenOrder.length ? chosenOrder[0].maj_serv_area : ""}</p>
                    <p><strong>Specific Service Area:</strong> {chosenOrder && chosenOrder.length ? chosenOrder[0].specific_sub : ""}</p>
                    <p><strong>Submit Date:</strong>{chosenOrder && chosenOrder.length ? chosenOrder[0].submit_date : ""}</p>
                    <p><strong>Delivery Date:</strong>{chosenOrder && chosenOrder.length ? chosenOrder[0].delivery_date : ""}</p>
                    <p><strong>Journal Name:</strong> {chosenOrder && chosenOrder.length ? chosenOrder[0].journal_name : ""}</p>
                    <p><strong>Language:</strong>{chosenOrder && chosenOrder.length ? chosenOrder[0].language : ""}</p>
                    <p><strong>Word Count:</strong> </p>
                    <p><strong>Instructions for Editor:</strong>{chosenOrder && chosenOrder.length ? chosenOrder[0].inst_for_editor : ""}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;
