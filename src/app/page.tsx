"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "./component/Sidebar/Sidebar";
import Header from "./component/Header/Header";
import "../../src/app/component/Header/Header.css";
import { useState } from "react";
import { faFileAlt, faFileInvoice, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "./component/Table/Table";
import { Dashboard } from "./component/Dashboard/Dashboard";
import Coupon from "./component/Coupon/Coupon";
import Quotation from "./component/Quotation/Quotation";
import SubmitOrders from "./component/SubmitOrders/SubmitOrders";
import Webinar from "./component/Webinar/Webinar";

export default function Home() {
  const [active, setActive] = useState<string>("Dashboard")
  const headers: string[] = ['Order Id', 'Service Type', 'Submit Date', 'Delivery Date', 'Payment Status'];
  const data: string[][] = [];

  console.log({ active })
  return (
    <>
      <Sidebar active={active} setActive={setActive}>
        {active && active === "Dashboard" && (<Dashboard />)}
        {active && active === "Coupon Center" && (<Coupon />)}
        {active && active === "Request a Quotation" && (<Quotation />)}
        {active && active === "Submit Manuscript" && (<SubmitOrders />)}
        {active && active === "Book a slot in Webinar" && (<Webinar />)}
      </Sidebar>
    </>
  );
}
