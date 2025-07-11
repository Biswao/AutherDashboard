"use client";
import { OrderDetails, SidebarProps } from "@/app/utils/interfaces/types";
import Table from "../Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faFileInvoice,
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";
import useFetchOrder from "@/app/hooks/authorDashboard/useFetchOrder";
import { useContext, useEffect, useState } from "react";
import "./Dashboard.css";
import { MainContext } from "@/app/context/MainContext";
import ImageSlider from "../ImageSlider/ImageSlider";
import { useRouter } from "next/navigation";


export const Dashboard = () => {
  const [tableData, setTableData] = useState<(string | React.ReactNode)[][]>(
    []
  );

  const userId: string | null =
    typeof window !== "undefined" ? localStorage.getItem("user_id") : null;
  const {
    fetchOrder,
    error,
    loading,
  }: { fetchOrder: OrderDetails[] | null; error: boolean; loading: boolean } =
    useFetchOrder(userId);
  const { active, setActive } = useContext(MainContext);
  const router = useRouter();

  const paynowClicked = (e: any) => {
    console.log(e);
    
    const priceDetails = e;

    // Save the data in localStorage
    localStorage.setItem("priceDetails", JSON.stringify(priceDetails));

    console.log(priceDetails);

    // Redirect to the checkout page on `manuscriptedit.com`
    window.location.href = "/Checkout"; // This will redirect to the checkout page in `manuscriptedit.com`
  };

  useEffect(() => {
    if (fetchOrder && fetchOrder.length) {
      const table_data: (string | React.ReactNode)[][] = fetchOrder.map(
        (order: OrderDetails) => {
          const arr = [];

          arr.push(order.order_id);
          arr.push(order.service_type);
          arr.push(order.submit_date);
          arr.push(order.delivery_date);
          arr.push(order.total_price);
          arr.push(
            <button className="PaynOwww" onClick={() => paynowClicked(order)}>
              Pay Now
            </button>
          );

          return arr;
        }
      );
      setTableData(table_data);
    }
  }, [fetchOrder]);

  const headers: string[] = [
    "Order Id",
    "Service Type",
    "Submit Date",
    "Delivery Date",
    "price",
    "Pay Now",
  ];
  const data: (string | React.ReactNode)[][] = tableData;
  return (
    <>
      <div
        style={{
          margin: "auto",
          fontFamily: "Arial, sans-serif",
        }}
        className=""
      >
     

        <div
          className="row mt-4"
          style={{paddingBottom: "40px" }}
        >
          <div className="col-md-8" style={{marginBottom:'40px'}}>
            {/* <div className="card testiHeight p-3" style={{ height: '191px', justifyContent: 'center', lineHeight: '33px' }}> */}
            <h5 style={{ marginBottom: "20px", fontWeight: "bold" }}>
              Author Testimonials
            </h5>

            <ImageSlider />
            {/* </div> */}
          </div>
          <div className="col-md-4">
            {/* <div className="card p-3">
              <h5>Discount/Referral Code</h5>
              <input
                type="text"
                placeholder="Enter Code"
                className="form-control mb-2"
              />
              <button className="btn btn-success w-100">Apply</button>
            </div> */}
             <button
              className="btn w-100 d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#688bb2",
                borderRadius: "15px",
                color: "#fff",
                padding: "22px",
              }}
              onClick={() => router.push("/Referrals")}
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={{ marginRight: "10px" }}
              />
              Refer A Colleague
            </button>
            <button
              className="btn w-100 d-flex align-items-center justify-content-center mt-2"
              style={{
                backgroundColor: "#c7715d",
                borderRadius: "15px",
                color: "#fff",
                padding: "22px",
              }}
              onClick={() => router.push("/QuotationNew")}
            >
              <FontAwesomeIcon
                icon={faFileInvoice}
                style={{ marginRight: "10px" }}
              />
              Request A Quote !
            </button>
            <div className="mt-2">
              <button className="btn btn-secondary w-100" onClick={() => router.push("/Coupons")}>
                View All Offers & Discounts
              </button>
            </div>
          </div>
        </div>

        <Table
          mainHeader="Your Orders List"
          headers={headers}
          data={data}
          emptyMessage={loading ? "Checking For Orders..." : "No Orders Available"}
        />
      </div>
    </>
  );
};
