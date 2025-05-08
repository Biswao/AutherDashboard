"use client";
import Link from "next/link";
import "./FooterManuscript.css";
import useEmail from "@/app/hooks/authorDashboard/useEmail";
import { useState } from "react";
import FooterLogo from "@/app/utils/testi/New_Reseapro_Scientific_Final-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const [email, setEmail] = useState<string | null>();
  const textColor = { color: "white" };

  const { isLoading, error, acceptNewsLetter } = useEmail();
  return (
    <>
      {/* <div className="subscribe_area bg_color pt-30 pb-45">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className="single_subscribe_contact">
                <div className="subscribe_content_title white text_center pb-30">
                  <h2>Subscribe Our Newsletter</h2>
                </div>
                <div className="subscribe_form">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    required
                    data-error="Please enter your email"
                    placeholder="Enter Your Email"
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                  />
                  <div className="help-block with-errors"></div>
                </div>
                <div className="subscribe_form_send">
                  <button className="btn" onClick={() => {
                    email && acceptNewsLetter({ email })
                  }} style={{ zIndex: "10" }}>
                    Subscribe
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden"></div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div> */}
      <div
        className="footer-middle pt-45"
       
        // style={{ backgroundImage: "url(/images/call-bg.png)" }}
      >
        <footer className="footer"  style={{paddingTop:"60px"}}>
          <div className="container">
            <div className="row">
              {/* English Editing Section */}
              <div className="col-lg-3 col-md-6 col-sm-12 footer-section">
                <h4 style={{ paddingRight: "98px" }}>Editing Overview</h4>

                <ul>
                  <li>
                    <a href="/EditingOverview">Editing Overview</a>
                  </li>
                  <li>
                    <a href="/ProofReading">Proofreading</a>
                  </li>
                  <li>
                    <a href="/SubEditing">Substantive Editing</a>
                  </li>
                  <li>
                    <a href="/ExtensiveSubstantiveEditing">
                      Extensive Substantive Editing
                    </a>
                  </li>
                  <li>
                    <a href="/CopyEdit">Copyediting</a>
                  </li>
                  <li>
                    <a href="/PlagiarismCheckReduction">
                      Plagiarism Check and Reduction
                    </a>
                  </li>
                  <li>
                    <a href="/TranslationOverview">Translation Services</a>
                  </li>
                </ul>
              </div>

              {/* Publication Support Section */}
              <div className="col-lg-3 col-md-6 col-sm-12 footer-section">
                <h4 style={{ paddingRight: "98px" }}>Publication Support</h4>
                <ul>
                  <li>
                    <a href="/PackageService">Publication Package</a>
                  </li>
                  <li>
                    <a href="/JournalSel">Journal Selection</a>
                  </li>
                  <li>
                    <a href="/JournalSub">Journal Submission</a>
                  </li>
                  <li>
                    <a href="/ResponseToReviewer">Response to Reviewer</a>
                  </li>
                  <li>
                    <a href="/PeerReview">Peer Review & Pre-Submission</a>
                  </li>
                  <li>
                    <a href="/PosterCreation">Poster Creation & Design</a>
                  </li>
                  <li>
                    <a href="/Formatting">Formatting</a>
                  </li>
                </ul>
              </div>

              {/* Scientific/Academic Writing Section */}
              <div className="col-lg-3 col-md-6 col-sm-12 footer-section">
                <h4 style={{ paddingRight: "44px" }}>
                  Scientific / Academic Writing
                </h4>
                <ul>
                  <li>
                    <a href="/Writing">Writing Overview</a>
                  </li>
                  <li>
                    <a href="/MedicalWrite">Medical Writing</a>
                  </li>
                  <li>
                    <a href="/ScientificWriting">
                      Scientific & Academic Writing
                    </a>
                  </li>
                  <li>
                    <a href="/TechnicalWriting">Technical Writing</a>
                  </li>
                  <li>
                    <a href="/MedicalRewrite">Rewriting</a>
                  </li>
                  <li>
                    <a href="/StatisticalAnalysis">Statistical Analysis</a>
                  </li>
                  <li>
                    <a href="/SystematicReview">Systematic Review</a>
                  </li>
                  <li>
                    <a href="/MetaAnalysis">Meta Analysis</a>
                  </li>
                </ul>
              </div>

              {/* Research Enhancement Services Section */}
              <div className="col-lg-3 col-md-6 col-sm-12 footer-section">
                <h4 style={{ paddingRight: "98px" }}>Research Support</h4>
                <ul>
                  <li>
                    <a href="/ResearchSupportOverview">
                      Research Support Overview
                    </a>
                  </li>
                  <li>
                    <a href="/EarlyStageResearchers">Early Stage Researchers</a>
                  </li>
                  <li>
                    <a href="/MidCareerResearchers">Mid-Career Researchers</a>
                  </li>
                  <li>
                    <a href="/FullyExperiencedResearchers">
                      Fully Experienced Researchers
                    </a>
                  </li>
                  <li>
                    <a href="/ResearchEnhancementServices">
                      Research Enhancement Services
                    </a>
                  </li>
                  <li>
                    <a href="/CitationBooster">Citation Booster</a>
                  </li>
                  <li>
                    <a href="/MedicalDesign">Illustration Services</a>
                  </li>
                  <li>
                    <a href="/PHDThesis">PhD Thesis</a>
                  </li>
                  <li>
                    <a href="/MasterThesis">Master Thesis</a>
                  </li>

                  <li>
                    <a href="/CustomizedServices">Customized Services</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        {/* <div
          className="container-fluid"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="Breaaker"></div>
        </div> */}

        <div className="container-fluid bgColors">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="widget widgets-company-info">
                <div
                  className="footer-bottom-logo "
                  style={{ textAlign: "center" }}
                >
                  <img src={FooterLogo.src} alt="#" style={{ width: "80%" }} />
                </div>
                <div className="company-info-desc"></div>

                <div
                  className="follow-company-info pt-3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="follow-company-text mr-3">
                    <a href="#" style={{textDecoration:'none'}}>
                      <p>Follow Us</p>
                    </a>
                  </div>
                  <div className="follow-company-icon">
                    <ul className="Icons">
                      <li>
                        <a
                          href="https://www.facebook.com/Manuscriptedit"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faFacebook} />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://x.com/i/flow/login?redirect_after_login=%2Fmanuscriptedit"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faTwitter} />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/manuscriptedit/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/@manuscriptedit."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faYoutube} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="widget widgets-company-info">
                <div className="d-flex flex-column footer-services">
                  <span className="widget-title pb-2 ">Our Services</span>

                  <Link style={textColor} href={"/EditingOverview"}>
                    English Editing
                  </Link>

                  <Link style={textColor} href={"/PackageService"}>
                    Publication Support
                  </Link>

                  <Link style={textColor} href={"/Writing"}>
                    Writing & Rewriting
                  </Link>

                  <Link style={textColor} href={"/ResearchSupportOverview"}>
                    Research Support
                  </Link>

                  <Link style={textColor} href={"/CustomizedServices"}>
                    Customized Services
                  </Link>

                  <a
                    style={textColor}
                    onClick={() => {
                      redirect("corporate");
                    }}
                    href="#"
                  >
                    Corporate Services
                  </a>
                </div>
              </div> */}
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12">
              <div className="row ">
                <div className="col-12 pb-4"></div>
                <div className="col-12">
                  <div className="widget widgets-company-info">
                    <div style={{ fontSize: 14 }} className="row rowCentroid">
                      <div className="col-md-4 footerSeperator4">
                        <div>
                          <h5 style={{ color: "#FFFFFF" }}>
                            <b>KYOTO, JAPAN</b>
                          </h5>
                          <p
                            style={{
                              color: "#FFFFFF",
                            }}
                          >
                            Global Marketing Association Co. Ltd,
                            <br /> 8th Floor, ASTEM Bldg.
                            <br />
                            Kyoto Research Park,
                            <br />
                            134 Chudoji Minamimachi,
                            <br />
                            Shimogyo-ku, Kyoto-city,
                            <br />
                            KYOTO - 6008813, JAPAN
                            <br />
                            support_japan@manuscriptedit.com
                            <br />
                            www.manuscriptedit.jp
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 ">
                        <div style={{ paddingLeft: 15 }} className="row">
                          <div
                            className="col-12 footerSeperator5"
                            style={{ border: "1px solid grey" }}
                          >
                            <h5 style={{ color: "#FFFFFF" }}>
                              <b>NC, DURHAM, USA</b>
                            </h5>
                            <p
                              style={{
                                color: "#FFFFFF",
                              }}
                            >
                              2530 Meridian Parkway,
                              <br /> Suite 300, Durham, NC,
                              <br />
                              27713, United States of America
                            </p>
                          </div>
                        </div>
                        <div style={{ paddingLeft: 15 }} className="row">
                          <div className="col-12 footerSeperate">
                            <h5 style={{ color: "#FFFFFF" }}>
                              <b>BHUBANESWAR, INDIA</b>
                            </h5>
                            <p
                              style={{
                                color: "#FFFFFF",
                              }}
                            >
                              DCB-401,4th Floor,DLF Cyber City
                              <br />
                              Chandaka Industrial Estate, Patia,
                              <br />
                              Bhubaneswar -751024,Odisha, INDIA
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div style={{ paddingLeft: 15 }} className="row">
                          <div className="col-12 footerSeperator1">
                            <h5 style={{ color: "#FFFFFF" }}>
                              <b>MAIDSTONE, UK</b>
                            </h5>
                            <p
                              style={{
                                color: "#FFFFFF",
                              }}
                            >
                              26 Kings Hill Avenue,
                              <br /> Kings Hill, West Malling,
                              <br />
                              Maidstone, ME19 4AE
                            </p>
                          </div>
                        </div>
                        <div style={{ paddingLeft: 15 }} className="row">
                          <div className="col-12 footerSeperator2">
                            <h5 style={{ color: "#FFFFFF" }}>
                              <b>BANGALORE, INDIA</b>
                            </h5>
                            <p
                              style={{
                                color: "#FFFFFF",
                              }}
                            >
                              Level 9 Raheja Towers,
                              <br /> 26-27 Mahatma Gandhi Road,
                              <br />
                              Bangalore-560 001, INDIA
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div
            className="footer container-fluid"
            style={{ padding: "20px 60px" }}
          >
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <h4>About ManuscriptEdit</h4>
                  <p>
                    We are a trusted name in author services for the global
                    research community. Since 2005, we have worked with
                    researchers in more than 125 countries, improving the
                    communication of their research and helping them achieve
                    successful publication. Globally, we are a preferred partner
                    for leading publishers, societies, and universities. We have
                    offices in Tokyo, Seoul, Beijing, Shanghai, Istanbul, and
                    New York. We operate globally with regional teams supporting
                    researchers locally.
                  </p>

                  <h5>FOLLOW US</h5>
                  <div className="social-icons">
                    <a
                      href="#"
                      style={{ marginRight: "15px", fontSize: "20px" }}
                    >
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a
                      href="#"
                      style={{ marginRight: "15px", fontSize: "20px" }}
                    >
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a
                      href="#"
                      style={{ marginRight: "15px", fontSize: "20px" }}
                    >
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a
                      href="#"
                      style={{ marginRight: "15px", fontSize: "20px" }}
                    >
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>

                
                <div className="col-lg-3 mb-3">
                  <h4>Quick links</h4>
                 
                  <ul>
                    <li>
                      <a href="#">Quality & Delivery</a>
                    </li>
                    <li>
                      <a href="#">How We Work</a>
                    </li>
                    <li>
                      <a href="#">Service Guarantee</a>
                    </li>
                    <li>
                      <a href="#">Faqs</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>

                
                <div className="col-lg-3 mb-3">
                  <h4>CONTACT US</h4>
                  <p>
                    Monday-Friday: 4:00-18:00
                    <br />
                    Email:{" "}
                    <a href="mailto:orders@enago.com">orders@enago.com</a>
                    <br />
                    Tel: +1 980-294-0834
                    <br />
                    New Jersey, USA
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className="row footer-bottom mt-70 pt-3 pb-1">
            <div className="col-lg-4 col-md-4">
              <div className="footer-bottom-content">
                <div className="footer-bottom-content-copy">
                  <p>© 2024 ManuscriptEdit. All Rights Reserved. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="footer-bottom-right">
                <div className="footer-bottom-right-text">
                  <Link className="absod" href={"/RefundAndCancellation"}>
                    Refund & Cancellation
                  </Link>
                  <Link className="absod" href={"/PrivacyPolicy"}>
                    Privacy Policy
                  </Link>

                  <Link href={"/TermsOfService"}>Terms & Conditions</Link>

                  <Link href={"/Service-Agreement"}> Service Agreement</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
