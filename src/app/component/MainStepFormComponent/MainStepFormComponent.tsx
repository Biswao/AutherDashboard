"use client"

import MultiStep from "react-multistep"
import StepForm from "../StepForm/StepForm"
import StepForm2 from "../StepForm2/StepForm2"

import "./MainStepFormComponent.css"
import StepForm3 from "../StepForm3/StepForm3"
import { useState } from "react"

const MainStepFormComponent = () => {
    const [check, setCheck] = useState(true)
    return (
        <div className="main-step-form">
            <MultiStep activeStep={0}
                prevButton={{
                    title: "Back",
                    style: {
                        background: 'red',
                        padding: '10px 20px',
                        border: '2px solid white',
                        borderRadius: '8px',
                        color: 'white',
                        cursor: 'pointer',
                    }
                }}
                nextButton={{
                    title: "Next",
                    style: {
                        background: check ? 'green' : "grey",
                        padding: '10px 20px',
                        border: '2px solid white',
                        borderRadius: '8px',
                        color: 'white',
                        cursor: 'pointer',
                        pointerEvents: check ? "auto" : 'none'
                    },
                }}>
                <StepForm setCheck={setCheck}/>
                <StepForm2 setCheck={setCheck}/>
                <StepForm3 setCheck={setCheck}/>
            </MultiStep>
        </div>
    )
}

export default MainStepFormComponent
