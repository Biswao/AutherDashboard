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
  

  console.log("tableData:" , tableData)

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

  // const paynowClicked = (e: any) => {
  //   console.log(e);
    
  //   const priceDetails = e;

    
  //   localStorage.setItem("priceDetails", JSON.stringify(priceDetails));

  //   console.log("priceDetails" , priceDetails);

    
  //   window.location.href = "/Checkout"; 
  // };
 



const paynowClicked = (order: OrderDetails) => {
  const BASE_URL = "https://secure.tst.manuscriptedit.com/";
  

  const priceDetails = {
    order_id: order.order_id,
    user_name:order.user_name,
    service_cat: order.service_cat,
    service_type: order.service_type,
    specific_sub: order.specific_sub,
    status: order.status,
    submit_date: order.submit_date,
    delivery_date: order.delivery_date,
    total_price: order.total_price,
    word_count: order.word_count,

    // Fix: convert object -> string
    // maj_serv_area:
    //   typeof order.maj_serv_area === "object"
    //     ? order.maj_serv_area.subject
    //     : order.maj_serv_area || "",

    

    // Fix: prepend domain if relative
    content_file: order.content_file
      ? `${BASE_URL}${order.content_file.replace(/^(\.\.\/)+/, "")}`
      : null,
    figure_file: order.figure_file
      ? `${BASE_URL}${order.figure_file.replace(/^(\.\.\/)+/, "")}`
      : null,
    table_file: order.table_file
      ? `${BASE_URL}${order.table_file.replace(/^(\.\.\/)+/, "")}`
      : null,

    // Other optional fields
    cur_type: order.cur_type || null,
    inst_for_editor: order.inst_for_editor || "",
    journal_guideline: order.journal_guideline || null,
    journal_name: order.journal_name || null,
    journal_url: order.journal_url || null,
    language: order.language || "English",
    turn_ar_time: order.turn_ar_time || "",
    payment_link: order.payment_link || "",
  } 
  
  localStorage.setItem("priceDetails", JSON.stringify(priceDetails));
  window.location.href = "/Checkout"; 
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

          console.log("arr" , arr)
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


console.log("userId:", userId);
console.log("fetchOrder from hook:", fetchOrder);
console.log("loading:", loading);
console.log("error:", error);


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
