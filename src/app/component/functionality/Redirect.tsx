"use client";
import env from "@/app/env/env";


export default function redirect(path:string) {

    window.open(`${env.legacyUrl + path}`)

}

export  function redirectSameTab(path:string) {

    window.location.href = `${env.legacyUrl + path}`;

}