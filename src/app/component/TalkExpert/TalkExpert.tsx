"use client";
import { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import "./TalkExpert.css";
import usePostTalkExpert from "@/app/hooks/authorDashboard/usePostTalkExpert";

export default function TalkToAnExpert() {
  const [subjectArea, setSubjectArea] = useState("");
  const [modeOfContact, setModeOfContact] = useState("email");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("12");

  const { talkToExpert, loading, error } = usePostTalkExpert();

  const postExpertHandler = async () => {
    if (typeof window !== "undefined") {
      const requestBody = {
        user_id: localStorage.getItem("user_id") ?? "",
        subject_area: subjectArea,
        contact_mode: modeOfContact,
        date: date,
        time: time,
      };

      await talkToExpert(requestBody);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="talk-to-expert">
            <h2 className="title">
              Schedule Date And Time To Talk To An Expert
            </h2>

            {/* Subject Area */}
            {/* <select
              className="dropdown"
              value={subjectArea}
              onChange={(e) => setSubjectArea(e.target.value)}
            >
              <option value="">Select specific subject area</option>
              <option value="subject1">Subject 1</option>
              <option value="subject2">Subject 2</option>
            </select> */}
            <input
              type="text"
              className="dropdown"
              value={subjectArea}
              placeholder="Enter Query / Message   "
              onChange={(e) => setSubjectArea(e.target.value)}
            />

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
                <option value="12:00:00">12 AM</option>
                <option value="1:00:00">1 AM</option>
                <option value="2:00:00">2 AM</option>
                <option value="3:00:00">3 AM</option>
                <option value="4:00:00">4 AM</option>
                <option value="5:00:00">5 AM</option>
                <option value="6:00:00">6 AM</option>
                <option value="7:00:00">7 AM</option>
                <option value="8:00:00">8 AM</option>
                <option value="9:00:00">9 AM</option>
                <option value="10:00:00">10 AM</option>
                <option value="11:00:00">11 AM</option>
                <option value="12:00:00">12 PM</option>
                <option value="13:00:00">1 PM</option>
                <option value="14:00:00">2 PM</option>
                <option value="15:00:00">3 PM</option>
                <option value="16:00:00">4 PM</option>
                <option value="17:00:00">5 PM</option>
                <option value="18:00:00">6 PM</option>
                <option value="19:00:00">7 PM</option>
                <option value="20:00:00">8 PM</option>
                <option value="21:00:00">9 PM</option>
                <option value="22:00:00">10 PM</option>
                <option value="23:00:00">11 PM</option>
              </select>
            </div>

            {/* Submit Button */}
            <button className="submit-btn" onClick={postExpertHandler}>
              {loading ? "Loading..." : "Submit Request"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
