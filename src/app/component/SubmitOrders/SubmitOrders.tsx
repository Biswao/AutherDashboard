import React, { useState } from "react";
import "./SubmitOrders.css";
import { OrderDetails } from "@/app/utils/interfaces/types";
import useFetchOrder from "@/app/hooks/authorDashboard/useFetchOrder";
import OrderModal from "../Modal/OrderModal";

const SubmitOrders = () => {
  const userId: string | null =
    typeof window !== "undefined" ? localStorage.getItem("user_id") : null;
  const {
    fetchOrder,
    error,
    loading,
  }: { fetchOrder: OrderDetails[] | null; error: boolean; loading: boolean } =
    useFetchOrder(userId);

  const [modal, setmodal] = useState(false);
  const [content, setcontent] = useState("");

  function modalHandler() {
    setmodal(!modal);
  }

  // ✅ Same logic from Dashboard
  const paynowClicked = (order: OrderDetails) => {
    const BASE_URL = "https://secure.tst.manuscriptedit.com/";

    const priceDetails = {
      order_id: order.order_id,
      user_name: order.user_name,
      service_cat: order.service_cat,
      service_type: order.service_type,
      specific_sub: order.specific_sub,
      status: order.status,
      submit_date: order.submit_date,
      delivery_date: order.delivery_date,
      total_price: order.total_price,
      word_count: order.word_count,

      // fix: prepend domain if relative
      content_file: order.content_file
        ? `${BASE_URL}${order.content_file.replace(/^(\.\.\/)+/, "")}`
        : null,
      figure_file: order.figure_file
        ? `${BASE_URL}${order.figure_file.replace(/^(\.\.\/)+/, "")}`
        : null,
      table_file: order.table_file
        ? `${BASE_URL}${order.table_file.replace(/^(\.\.\/)+/, "")}`
        : null,

      cur_type: order.cur_type || null,
      inst_for_editor: order.inst_for_editor || "",
      journal_guideline: order.journal_guideline || null,
      journal_name: order.journal_name || null,
      journal_url: order.journal_url || null,
      language: order.language || "English",
      turn_ar_time: order.turn_ar_time || "",
      payment_link: order.payment_link || "",
    };

    localStorage.setItem("priceDetails", JSON.stringify(priceDetails));
    window.location.href = "/Checkout"; // 👈 same redirect
  };

  return (
    <>
      <div className="orders-container">
        <h2 className="title">View Orders submitted</h2>
        {modal ? <OrderModal modalHandler={modalHandler} content={content} /> : ""}
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          fetchOrder?.map((order: OrderDetails) => {
            return (
              <div
                key={order.order_id}
                className="order-card"
                onClick={() => setcontent(order.order_id)}
              >
                <div className="order-header">
                  <span className="order-id" onClick={modalHandler}>
                    {order.order_id}
                  </span>
                  <span className="order-status">
                    Order Status: {order.status}
                  </span>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="order-body">
                      <p>
                        <strong>Service Category:</strong> {order.service_type}
                      </p>
                      <p>
                        <strong>Service Name(s):</strong> {order.service_name}
                      </p>
                      <p>
                        <strong>Submit Time:</strong>
                        {order.delivery_date}
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="order-body">
                      <p>
                        <strong>ORDER PRICE:</strong> {order.total_price}
                      </p>
                      <p>
                        <strong>Payment Status:</strong> {order.status}
                      </p>
                      {/* ✅ Hook up Pay Now */}
                      <button
                        className="PaynOwww"
                        onClick={() => paynowClicked(order)}
                      >
                        Pay now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default SubmitOrders;
