"use client";

import "./Webinar.css";


const Webinar = () => {
  return (
    <>
      <div className="container">
        <div className="webinar-container">
          <h2 className="title">Upcoming Webinars/ Q&A Session</h2>
          <div className="row" style={{ gap: "61px" }}>
            <div className="main-center">
              <h4>No webinar found</h4>
            </div>
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
