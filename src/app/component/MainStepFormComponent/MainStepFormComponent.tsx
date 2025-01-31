"use client"

import MultiStep from "react-multistep"
import StepForm from "../StepForm/StepForm"
import StepForm2 from "../StepForm2/StepForm2"
import "./MainStepFormComponent.css"
import StepForm3 from "../StepForm3/StepForm3"
import { useContext, useState } from "react"
import { SubmitManuscriptContext } from "@/app/context/SubmitManuscriptContext"

const MainStepFormComponent = () => {
    const [check, setCheck] = useState(true)
    const { finalCheck } = useContext(SubmitManuscriptContext)
    const [button, setButton] = useState(true)

    return (
        <div className="main-step-form">
            <MultiStep
                activeStep={0}
                prevButton={{
                    title: "Back",
                    style: button ? {
                        background: 'red',
                        padding: '10px 20px',
                        border: '2px solid white',
                        borderRadius: '8px',
                        color: 'white',
                        cursor: 'pointer',
                    } : { display: 'none' }
                }}
                nextButton={{
                    title: finalCheck ? "" : "Next",
                    style: {
                        background: check ? 'green' : "grey",
                        padding: '10px 20px',
                        border: '2px solid white',
                        borderRadius: '8px',
                        color: 'white',
                        cursor: 'pointer',
                        display: finalCheck ? 'none' : 'inline-block', // Hide Next button when finalCheck is true
                    },
                }}
            >
                <StepForm setCheck={setCheck} check={check} setButton={setButton} />
                <StepForm2 setCheck={setCheck} check={check} setButton={setButton} />
                <StepForm3 setCheck={setCheck} check={check} setButton={setButton} />
            </MultiStep>
        </div>
    )
}

export default MainStepFormComponent