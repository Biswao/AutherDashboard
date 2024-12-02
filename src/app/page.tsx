"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "./component/Sidebar/Sidebar";
import Header from "./component/Header/Header";
import "../../src/app/component/Header/Header.css";
import { useEffect, useState } from "react";
import { faFileAlt, faFileInvoice, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "./component/Table/Table";
import { Dashboard } from "./component/Dashboard/Dashboard";
import Coupon from "./component/Coupon/Coupon";
import Quotation from "./component/Quotation/Quotation";
import SubmitOrders from "./component/SubmitOrders/SubmitOrders";
import Webinar from "./component/Webinar/Webinar";
import SubmitManuscript from "./component/SubmitManuscript/SubmitManuscript";
import { useRouter } from 'next/navigation'
import TalkExpert from "./(OpenPages)/TalkExpert/page";
import TalkToAnExpert from "./component/TalkExpert/TalkExpert";
import ReferAColleague from "./component/ReferAColleague/ReferAColleague";
import SampleRequest from "./component/SampleRquest/SampleRequest";
import { MainContext } from "./context/MainContext";
import { MainContextType } from "./utils/interfaces/types";
import UpdateProfile from "./component/UpdateProfile/UpdateProfile";
import PublicationForm from "./component/JournalPublicationForm/JournalPublicationForm";

export default function Home() {
  const [active, setActive] = useState<string>("Dashboard")

  const router = useRouter()

  const headers: string[] = ['Order Id', 'Service Type', 'Submit Date', 'Delivery Date', 'Payment Status'];
  const data: string[][] = [];

  let obj: MainContextType = {
    active,
    setActive
  }


  if (typeof window !== 'undefined' && !localStorage.getItem('user_id')) {
    router.push('/Auth');
  } else {
    router.push('/UserDashboard')
  }
}


{/* <MainContext.Provider value={obj}>
          <Sidebar>
            {active && active === "Dashboard" && (<Dashboard />)}
            {active && active === "Coupon Center" && (<Coupon />)}
            {active && active === "Request a Quotation" && (<Quotation />)}
            {active && active === "View Orders Submitted" && (<SubmitOrders />)}
            {active && active === "Book a slot in Webinar" && (<Webinar />)}
            {active && active === "Submit Manuscript" && (<SubmitManuscript />)}
            {active && active === "Talk to an expert" && (<TalkToAnExpert />)}
            {active && active === "Refer A Colleague" && (<ReferAColleague />)}
            {active && active === "Request a Sample" && (<SampleRequest />)}
            {active && active === "Update Profile" && (<UpdateProfile />)} 
          </Sidebar>
        </MainContext.Provider> */}
