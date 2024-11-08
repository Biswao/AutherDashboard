
"use client"

import Login from "@/app/component/LoginPage/Login";
import Signup from "@/app/component/SignUpPage/SignUpPage";
import { useState } from "react";

export default function Auth() {
  const [autho , setAutho] = useState(false)

  console.log({autho})

    return autho == false ? <Login setAutho={setAutho}  /> : <Signup setAutho={setAutho}/>
}