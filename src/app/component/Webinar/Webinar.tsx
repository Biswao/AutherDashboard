"use client";
import Sidebar from "@/app/component/Sidebar/Sidebar";
import "./Webinar.css";


const Webinar = () => {
    return (
        <>
            <div className="container">
                <div className="webinar-container">
                    <h2 className="webinar-title">Upcoming Webinars/ Q&A Session</h2>
                    
                        <div className="row" style={{ gap: "61px" }}>
                            <div className="col-lg-5">
                                <div className="webinar-cards">

                                <img src="/shtest/assets/images/A4.png" alt="#" />

                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="webinar-cards">
                                    <img src="/assets/images/1600x900-2.png" alt="#" />
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="webinar-cards">
                                    <img src="/assets/images/A4 (1).png" alt="#" />
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="webinar-cards">
                                    <img src="/assets/images/A4.png" alt="#" />
                                </div>
                            </div>
                        </div>

    
                    <div className="col-lg-10" style={{ display: "flex", justifyContent: "end", marginTop: "10px" }}>
                        <a href="/all-webinars" className="see-all-link">See All →</a>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Webinar;


