"use client"
import { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import "./TalkExpert.css"
import usePostTalkExpert from "@/app/hooks/authorDashboard/usePostTalkExpert";

export default function TalkToAnExpert() {
    const [subjectArea, setSubjectArea] = useState("");
    const [modeOfContact, setModeOfContact] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const { talkToExpert, loading, error } = usePostTalkExpert();

    console.log(subjectArea , modeOfContact , date , time)


    const postExpertHandler = async() => {
        if(typeof window !== 'undefined'){
            const requestBody = {
                user_id: localStorage.getItem("user_id") ?? "",
                subject_area: subjectArea,
                contact_mode: modeOfContact,
                date: date,
                time: time,
            };

            await talkToExpert(requestBody);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="talk-to-expert">
                        <h2 className="title">Talk to an expert</h2>

                        {/* Subject Area */}
                        <input
                            className="dropdown"
                            placeholder="Subject name "
                            value={subjectArea}
                            onChange={(e) => setSubjectArea(e.target.value)}
                            
                        />

                        {/* Mode of Contact */}
                        <input
                            className="dropdown"
                            placeholder="Email / Phone number"
                            value={modeOfContact}
                            onChange={(e) => setModeOfContact(e.target.value)}
                        />
                            

                        {/* Select Date */}
                        <div className="field">
                            <label className="label">Select Date:</label>
                            <div className="date-picker">
                                <AiOutlineCalendar className="calendar-icon" />
                                <input
                                    type="date"
                                    className="input"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    placeholder="date"
                                />
                            </div>
                        </div>

                        {/* Select Time */}
                        <div className="field">
                            <label className="label">Select Time: (Optional)</label>
                            <input
                                className="dropdown"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                placeholder="Time"
                            />
                        </div>

                        {/* Submit Button */}
                        <button className="submit-btn" onClick={postExpertHandler}>{loading ? "Loading..." : "Submit Request"}</button>
                    </div>
                </div>
            </div>
        </div>

    );
}
