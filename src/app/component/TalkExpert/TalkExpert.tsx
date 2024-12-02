"use client"
import { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import "./TalkExpert.css"
import usePostTalkExpert from "@/app/hooks/authorDashboard/usePostTalkExpert";

export default function TalkToAnExpert() {
    const [subjectArea, setSubjectArea] = useState("subject1");
    const [modeOfContact, setModeOfContact] = useState("email");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("12");

    const { talkToExpert, loading, error } = usePostTalkExpert();


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
                        <select
                            className="dropdown"
                            value={subjectArea}
                            onChange={(e) => setSubjectArea(e.target.value)}
                        >
                            <option value="">Select specific subject area</option>
                            <option value="subject1">Subject 1</option>
                            <option value="subject2">Subject 2</option>
                        </select>

                        {/* Mode of Contact */}
                        <select
                            className="dropdown"
                            value={modeOfContact}
                            onChange={(e) => setModeOfContact(e.target.value)}
                        >
                            <option value="">Select mode of Contact</option>
                            <option value="email">Email</option>
                            <option value="phone">Phone</option>
                        </select>

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
                                />
                            </div>
                        </div>

                        {/* Select Time */}
                        <div className="field">
                            <label className="label">Select Time:</label>
                            <select
                                className="dropdown"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            >
                                <option value="12">12 AM</option>
                                <option value="1">1 AM</option>
                                <option value="2">2 AM</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <button className="submit-btn" onClick={postExpertHandler}>{loading ? "Loading..." : "Submit Request"}</button>
                    </div>
                </div>
            </div>
        </div>

    );
}
