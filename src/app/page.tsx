"use client";
import "../../src/app/component/Header/Header.css";
import { useRouter } from 'next/navigation'
import { MainContextType } from "./utils/interfaces/types";
import { useState } from "react";

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
