import React, { useState } from "react";
import "./SubmitOrders.css";
import { OrderDetails } from "@/app/utils/interfaces/types";
import useFetchOrder from "@/app/hooks/authorDashboard/useFetchOrder";
import OrderModal from "../Modal/OrderModal";

const SubmitOrders = () => {
    const userId: string | null = typeof window !== 'undefined' ? localStorage.getItem("user_id") : null
    const { fetchOrder, error, loading }: { fetchOrder: OrderDetails[] | null, error: boolean, loading: boolean } = useFetchOrder(userId)
    console.log({ fetchOrder });

    const [modal , setmodal] = useState(false);

    function modalHandler(){
        setmodal(!modal)
    }

    return (
        <div className="orders-container">
            {modal ? <OrderModal modalHandler={modalHandler}/> :  '' }
            {
                fetchOrder?.map((order) => {
                    console.log({ order })
                    return (
                        <div key={order.order_id} className="order-card">
                            <div className="order-header">
                                <span className="order-id" onClick={modalHandler}>{order.order_id}</span>
                                <span className="order-status">Order Status: {order.status}</span>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="order-body">
                                        <p><strong>Service Category:</strong> {order.service_type}</p>
                                        <p><strong>Service Name(s):</strong> </p>
                                        <p><strong>Submit Time:</strong>{order.delivery_date} </p>
                                    </div>
                                </div>


                                <div className="col-lg-6">
                                    <div className="order-body">
                                        <p><strong>ORDER PRICE:</strong> {order.service_type}</p>
                                        <p><strong>Payment Status:</strong> {order.status}</p>
                                        <p><strong>Download Completed Work:</strong> </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })
            }


        </div>
    );
};

export default SubmitOrders;
