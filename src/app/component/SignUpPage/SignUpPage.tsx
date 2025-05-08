"use client";
import { SignupData } from "@/app/utils/interfaces/types";
// pages/signup.js
import Link from "next/link";
import Image from "next/image";
import "./SignUpPage.css";
import { useEffect, useState } from "react";
import { useSignup } from "@/app/hooks/authorDashboard/useSignup";
import { useFetchCountryCode } from "@/app/hooks/authorDashboard/useFetchCountryCode";
import SignUpAgreement from "../SignUpAgreement/SignUpAgreement";
import captchaImg1 from "../../../../public/assets/captcheImages/22d5n.png";
import captchaImg2 from "../../../../public/assets/captcheImages/2356g.png";
import captchaImg3 from "../../../../public/assets/captcheImages/25257.png";
import captchaImg4 from "../../../../public/assets/captcheImages/25p2m.png";
import captchaImg5 from "../../../../public/assets/captcheImages/2cegf.png";



export default function Signup({ setAutho }: any) {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [captchaName, setCaptchaName] = useState("");
  const [captchaImage, setCaptchaImage] = useState(captchaImg3);
  const [captchaCode, setCaptchaCode] = useState("25257");
  const { signup, loading, error, data } = useSignup(setAutho);
  let [changeCaptcha,setChangeCaptcha]=useState(false);;
  const [showModal, setShowModal] = useState(false);
  
  const { countryCode } = useFetchCountryCode();
  const captchaObj = [
    { image: captchaImg1, code: "22d5n" },
    { image: captchaImg2, code: "2356g" },
    { image: captchaImg3, code: "25257" },
    { image: captchaImg4, code: "25p2m" },
    { image: captchaImg5, code: "2cegf" },
  ];
  let randomNumber;
  const [formData, setFormData] = useState<SignupData>({
    email: "",
    pswd: "",
    country: "",
    fname: "",
    lname: "",
    phone_no: "",
    user_find: "",
  });

  // const captchaImg = {};



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaName !== captchaCode) {
      setChangeCaptcha(!changeCaptcha);
      setCaptchaName("");
      alert("Please enter the captcha carefully. CAPTCHA doesn't match.Try Again!");
      
      return;
    }

    if (formData.fname == "") {
      e.preventDefault(); 
      alert("Please enter first name.");
      return;
    } else if (formData.pswd == "") {
      e.preventDefault(); 
      alert("Please enter a password.");
      return;
    } else if (formData.email == "") {
      e.preventDefault(); 
      alert("Please enter an email.");
      return;
    }

    if (!isChecked) {
      e.preventDefault(); 
      alert("Please agree to the terms before proceeding.");
      return;
    }
    await signup(formData);
  };
 

  const handleCheckboxChange = (e: any) => {
    if (e.target.checked) {
      setShowModal(true);
    }
  };

  const disAgreed = (e: any) => {
    setShowModal(false);
    setIsChecked(false);
  };

  useEffect(() => {
    randomNumber = Math.floor(Math.random() * 5);
    setCaptchaImage(captchaObj[randomNumber].image);
    setCaptchaCode(captchaObj[randomNumber].code);
    console.log(captchaName);
  }, [changeCaptcha]);

  return (
    <div className="container SignUpContain">
      <div className="leftSection">
        <h1>SIGN UP</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            onChange={handleChange}
          />
          <input
            type="text"
            name="fname"
            placeholder="Enter your first name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="lname"
            placeholder="Enter your last name"
            onChange={handleChange}
          />
          <input
            type="password"
            name="pswd"
            placeholder="Enter your Password"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone_no"
            placeholder="Enter your Phone Number"
            onChange={handleChange}
          />
          <select name="country" onChange={handleChange}>
            <option>-Select a Country-</option>
            {countryCode &&
              countryCode.length &&
              countryCode.map((country) => {
                return (
                  <option key={country.id} value={country.country}>
                    {country.country}
                  </option>
                );
              })}
          </select>
          <select name="user_find" onChange={handleChange}>
            <option>-How did you find us-</option>
            <option value="google">Google</option>
            <option value="linkedin">LinkedIn</option>
            <option value="facebook">Facebook</option>
            <option value="twitter">Twitter</option>
            <option value="friend_referral">Friend Referral</option>
            <option value="instagram">Instagram</option>
            <option value="website_ad">Website Ad</option>
            <option value="news_article">News Article</option>
          </select>
          <div
            style={{
              display: "flex",
              alignItems: "start",
              marginTop: "1rem",
              padding: "1rem",
              backgroundColor: "#A1D0FF",
            }}
          >
            <input
              type="checkbox"
              id="terms"
              onChange={handleCheckboxChange}
              checked={isChecked}
              onClick={() => setIsChecked(!isChecked)}
            />
            <label
              htmlFor="terms"
              style={{ fontSize: "12px", textAlign: "left" }}
            >
              &nbsp;&nbsp;* I have read and agreed to your{" "}
              <Link href="https://manuscriptedit.com/Service-Agreement/">
                Service Agreement
              </Link>{" "}
              and{" "}
              <Link href="https://manuscriptedit.com/TermsOfService/">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="https://manuscriptedit.com/PrivacyPolicy/">
                Privacy Policy
              </Link>
              , and to receive important communications electronically from you
            </label>

            {/* Modal */}
            {showModal && (
              <div
                className="modal show"
                tabIndex={-1}
                role="dialog"
                style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div
                      className="modal-header"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* <h5 className="modal-title">Modal title</h5> */}
                      {/* <button
                  type="button"
                  className="close"
                  onClick={() => setShowModal(false)}
                >
                  <span style={{fontSize:'2rem'}}>&times;</span>
                </button> */}
                    </div>
                    <SignUpAgreement />
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={disAgreed}
                        id="disAgreed"
                      >
                        Disagree
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                          setShowModal(false);
                          setIsChecked(true);
                          setIsChecked2(true);
                        }}
                      >
                        Agree
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "start",
              marginTop: "0rem",
              marginBottom: "1rem",
              padding: "1rem",
              paddingTop: "0",
              backgroundColor: "#A1D0FF",
            }}
          >
            <input
              type="checkbox"
              id="newsLetter"
              checked={isChecked2}
              onClick={() => setIsChecked2(!isChecked2)}
            />
            <label
              htmlFor="newsLetter"
              style={{ fontSize: "12px", textAlign: "left" }}
            >
              &nbsp;I want to subscribe Manuscriptedit newsletter.
            </label>
          </div>

          <div className="mb-3 d-flex">
            <img src={captchaImage.src} alt="captcha" />
            <input
              type="text"
              placeholder="Enter Captcha"
              value = {captchaName}
              onChange={(e) => {
                setCaptchaName(e.target.value);
              }}
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        {error && <p className="error">{error}</p>}
        {data && <p className="success">{data.Message}</p>}
      </div>
      <div className="rightSection">
        <h2>Have an Account?</h2>
        <p>
          Want to Log in with your <br />
          e-mail address and your password?
        </p>

        <button
          onClick={() => {
            setAutho(false);
          }}
        >
          LOGIN
        </button>
        <Link href="/" className="goToHome">
          Go to Home ➔
        </Link>
      </div>
    </div>
  );
}
