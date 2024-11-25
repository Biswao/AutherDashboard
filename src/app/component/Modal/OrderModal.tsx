import React, { useState } from "react";
import "./OrderModal.css";

const OrderModal = ({modalHandler}: {modalHandler: () => void}) => {

    {console.log(typeof(modalHandler))}
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h2>Order Information Details</h2>
                    <button onClick={modalHandler} className="close-button">×</button>
                </div>
                <div className="modal-body">
                    <p><strong>User Name:</strong> asdfaf</p>
                    <p><strong>Order ID:</strong> 134124</p>
                    <p><strong>Service Category:</strong> sdfaf</p>
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
