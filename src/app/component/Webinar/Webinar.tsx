"use client";
import Sidebar from "@/app/component/Sidebar/Sidebar";
import "./Webinar.css";
import Link from "next/link";

const Webinar = () => {
  return (
    <>
      <div className="container">
        <div className="webinar-container">
          <h2 className="title">Upcoming Webinars/ Q&A Session</h2>
          <div className="row" style={{ gap: "61px" }}>
            {[
              "/AuthorDashboard/assets/images/A4.png",
              "/AuthorDashboard/assets/images/1600x900-2.png",
              "/AuthorDashboard/assets/images/A4 (1).png",
              "/AuthorDashboard/assets/images/A4.png",
            ].map((src, index) => (
              <div className="col-lg-5" key={index}>
                <div className="webinar-cards">
                  <img src={src} alt="Webinar" />
                  <div className="hover-content">
                    <Link
                      href={"https://secure.manuscriptedit.com/wregistration"}
                    >
                      <button className="book-button">Book Webinar</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="col-lg-10"
            style={{
              display: "flex",
              justifyContent: "end",
              marginTop: "10px",
            }}
          >
            {/* <a href="/all-webinars" className="see-all-link">
              See All →
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Webinar;
