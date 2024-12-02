"use client";

import Sidebar from "@/app/component/Sidebar/Sidebar";
import "./TalkExpert.css";
import TalkToAnExpert from "@/app/component/TalkExpert/TalkExpert";

const TalkExpert = () => {
   return (
    <>
      <Sidebar>
         <TalkToAnExpert />
      </Sidebar>
    </>
   ) 
}

export default TalkExpert;