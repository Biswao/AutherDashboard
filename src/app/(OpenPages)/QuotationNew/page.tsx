"use client";

import { useEffect, useState, useRef } from "react";
import "../QuotationNew/quotationNew.css";
import { goalOptions } from "@/app/utils/Quote";
import { addOnOptions } from "@/app/utils/Quote";
import { addonturnaroundPrice } from "@/app/utils/Quote";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import {
  majorSubject,
  addOnsId,
  subServices,
  mainServices,
  goals,
  subjectsData,
} from "./allData";

export default function QuotationNew() {
  const [selectedGoal, setSelectedGoal] = useState<any>("");
  const [hideGoalSection, setHideGoalSection] = useState<any>(true);
  const [selectedOption, setSelectedOption] = useState<any>("");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [wordCount, setWordCount] = useState<any>("");
  const [turnaround, setTurnaround] = useState<string>("Trn_Ar10");
  const [totalPrice, setTotalPrice] = useState<any>(0);
  const [totalPriceAddons, setTotalPriceAddOns] = useState<any>(0);
  const [optionTotalPrice, setOptionTotalPrice] = useState<any>(0);
  const [manualWordCount, setManualWordCount] = useState<any>("");
  const [selectedAddOnsId, setSelectedAddOnsId] = useState<any>("");
  // const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedSubSubject, setSelectedSubSubject] = useState<string>("");
  const [valFromLocalStorage, setValFromLocalStorage] = useState<any>("");
  const [userEmail, setUserEmail] = useState<any>("");
  const [userName, setUserName] = useState<any>("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    setUserEmail(localStorage.getItem("email"));
    setUserName(localStorage.getItem("user_id"));
    // setWordCount(localStorage.getItem("SelectedWordCountFromPriceCalculator"));
  }, []);
  // console.log("userEmail is:", userEmail);
  // console.log("userEmail is:", userName);

  // useEffect(() => {
  //   if (valFromLocalStorage === "Extensive Substantive Editing") {
  //     setSelectedGoal("Editing & Language Services");
  //   } else if (valFromLocalStorage === "Substantive Editing") {
  //     setSelectedGoal("Editing & Language Services");
  //   } else if (valFromLocalStorage === "Proofreading") {
  //     setSelectedGoal("Editing & Language Services");
  //   }
  // }, [valFromLocalStorage]);

  // useEffect(() => {
  //   setTimeout(() => setSelectedOption(valFromLocalStorage), 100);
  // }, [valFromLocalStorage]);

  // console.log("afterUseEffect", valFromLocalStorage);

  useEffect(() => {
    setSelectedAddOns([]);
  }, [selectedOption]);

  useEffect(() => {
    const numericWordCount = Number(wordCount);
    let basePrice = 0;

    if (selectedOption === "Extensive Substantive Editing") {
      basePrice = numericWordCount * (turnaroundPrices[turnaround] || 0);
    } else if (selectedOption === "Substantive Editing") {
      basePrice = numericWordCount * (turnaroundPrices1[turnaround] || 0);
    } else if (selectedOption === "Proofreading") {
      basePrice = numericWordCount * (turnaroundPrices2[turnaround] || 0);
    }

    // Calculate add-on total individually
    const addOnTotal = selectedAddOns.reduce((total, addOn) => {
      const matchedAddOn = addonturnaroundPrice.find(
        (item) => item.name === addOn
      );

      console.log("check this out", matchedAddOn);
      if (matchedAddOn) {
        if (matchedAddOn.price < 1) {
          return total + numericWordCount * matchedAddOn.price;
        } else {
          return total + matchedAddOn.price;
        }
      }
      return total;
    }, 0);

    console.log("the base price", basePrice);

    setTotalPrice(basePrice);
    setTotalPriceAddOns(addOnTotal);
    setOptionTotalPrice(basePrice + addOnTotal);
  }, [wordCount, turnaround, selectedAddOns, selectedOption]);
  const AddonCommonPrice = 0.1;

  const turnaroundPrices: Record<string, number> = {
    Trn_Ar10: 0.047,
    Trn_Ar5: 0.058,
    Trn_Ar3: 0.069,
    Trn_Ar2: 0.083,
    Trn_Ar1: 0.094,
  };
  const turnaroundPrices1: Record<string, number> = {
    Trn_Ar10: 0.032,
    Trn_Ar5: 0.04,
    Trn_Ar3: 0.047,
    Trn_Ar2: 0.058,
    Trn_Ar1: 0.069,
  };

  const turnaroundPrices2: Record<string, number> = {
    Trn_Ar10: 0.04,
    Trn_Ar5: 0.047,
    Trn_Ar3: 0.058,
    Trn_Ar2: 0.069,
    Trn_Ar1: 0.083,
  };

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    PhoneNum: "",
    HearAbt: "",
    majorSubject: "",
    specificSubject: "",
    deliveryDate: "",
    preferredLanguage: "",
    editorInstruction: "",
    paymentMode: "",
  });

  // console.log(addOns[selectedGoal][selectedAddOns[1]])
  for (let i = 0; i < selectedAddOns.length; i++) {
    let j = selectedAddOns[i];
    // console.log(addOns[selectedGoal][j]);
  }

  useEffect(() => {
    const optionPrice =
      goalOptions[selectedGoal]?.find((opt: any) => opt.text === selectedOption)
        ?.price || 0;

    const addOnsTotal = addOnOptions[selectedOption]
      ? addOnOptions[selectedOption]
          .filter((addOn: any) => selectedAddOns.includes(addOn.text))
          .reduce((sum: any, addOn: any) => sum + (addOn.price || 0), 0)
      : 0;
  }, [selectedGoal, selectedOption, selectedAddOns]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    setSelectedOption("");
    setSelectedAddOns([]);
  }, [selectedGoal]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];

      // Validate file type
      const validTypes = [
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!validTypes.includes(selectedFile.type)) {
        alert("Please upload only .doc or .docx files");
        return;
      }

      // Validate file size (10MB limit)
      if (selectedFile.size > 10 * 1024 * 1024) {
        alert("File size should be less than 10MB");
        return;
      }

      setFile(selectedFile);
    }
  };

  const mapServiceType = (goal: string): string => {
    // Map the selected goal to the corresponding service_type value
    const goalToServiceType: Record<string, string> = {
      "Editing & Language Services": "1",
      "Medical & Clinical Writing Services": "2",
      "Regulatory Writing Support": "3",
      "Scientific Communication Support": "4",
      "Evidence Synthesis & Review Writing": "5",
      "Scientific Publication Assistance": "6",
      "Data & Statistical Support": "7",
      "Journal Publication Support": "8",
      "Manuscriptedit Packages": "9",
      "Academic & Non-Scientific Writing": "10",
      "Design and Image Polishing and Creation": "11",
    };
    return goalToServiceType[goal] || "0";
  };

  useEffect(() => {
    let allSelectedAddOnsId = selectedAddOns.map(
      (val) => (addOnsId as any)[selectedGoal][val]
    );
    const allSelectedAddOnsIds = allSelectedAddOnsId.join(",");
    setSelectedAddOnsId(allSelectedAddOnsIds);
  }, [selectedAddOns]);

  // Update your handleSubmit function
  const handleSubmit = async (
    e: React.FormEvent,
    selectedGoal: any,
    mainServices: any,
    subServices: any,
    selectedOption: any
  ) => {
    e.preventDefault();

    // Basic validation
    if (!wordCount || wordCount === "0") {
      alert("Please enter a valid word count");
      return;
    }

    if (!selectedGoal || !selectedOption) {
      alert("Please select a goal and service option");
      return;
    }

    try {
      setIsSubmitting(true);
      let fileUrl = "no_file_uploaded.docs";

      // 1. First upload the file if exists
      if (file) {
        const uploadFormData = new FormData();
        uploadFormData.append("file", file);

        const uploadResponse = await fetch(
          "https://secure.manuscriptedit.com/api/upload_file_from_form.php",
          {
            method: "POST",
            body: uploadFormData,
          }
        );

        if (!uploadResponse.ok) {
          throw new Error("File upload failed");
        }

        const uploadData = await uploadResponse.json();
        if (uploadData.FileUrl) {
          // Extract just the filename from the URL
          const urlParts = uploadData.FileUrl.split("/");
          fileUrl = urlParts[urlParts.length - 1];
        }
      }

      // 2. Now submit the quotation data
      const postData = {
        service_type: mainServices[selectedGoal],
        service_name: subServices[selectedOption],
        add_ons: selectedAddOnsId,
        major_subject: formData.majorSubject,
        specific_subject: formData.specificSubject,
        delivery_date: formData.deliveryDate,
        language: formData.preferredLanguage.toLowerCase().replace(" ", "_"),
        inst_for_editor: formData.editorInstruction,
        word_count: wordCount || "0",
        pay_mode: formData.paymentMode,
        file: fileUrl,
        name: userName,
        email: userEmail,
        phone: "111",
        user_find: "111",
        total_price: String(optionTotalPrice),
      };

      const submissionResponse = await fetch(
        "https://www.secure.manuscriptedit.com/api/submit_quotation_out.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      if (!submissionResponse.ok) {
        throw new Error(
          `Error submitting quotation: ${submissionResponse.statusText}`
        );
      }

      const result = await submissionResponse.json();
      if (result.Message === "Data Saved Successfully") {
        alert("Quotation submitted successfully!");
        // Reset form
        setSelectedGoal("");
        setSelectedOption("");
        setSelectedAddOns([]);
        setWordCount("");
        setFile(null)
        setTurnaround("Trn_Ar10");
        setFormData({
          Name: "",
          Email: "",
          PhoneNum: "",
          HearAbt: "",
          majorSubject: "",
          specificSubject: "",
          deliveryDate: "",
          preferredLanguage: "",
          editorInstruction: "",
          paymentMode: "",
        });
        setFile(null);
      } else {
        alert("Submission completed but server returned unexpected response.");
      }
    } catch (err: any) {
      console.error("Error encountered:", err.message);
      alert(`Error: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setHideGoalSection(!hideGoalSection);
  }, [selectedGoal]);

  return (
    <div className="container sumcon">
      <div
        className="row sumrow"
        style={{ justifyContent: "space-between" }}
      >
        <div className="col-md-8 border p-4">
          <div>
            <h5>
              <strong>Submit your project details for an exact quote.</strong>
            </h5>

            <div className="uploadContainer">
              <div className="row Alignments">
                <div className="col-lg-4">
                  <strong>
                    <p style={{ marginBottom: "0px" }}>
                      Enter the word count *
                    </p>
                  </strong>
                </div>

                <div className="col-lg-7">
                  <input
                    type="number"
                    name="wordCount"
                    className="form-control"
                    placeholder="Enter word count *" // <-- set a placeholder text or leave it blank
                    value={wordCount}
                    onChange={(e) => setWordCount(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="row Alignments">
                <div className="col-lg-4">
                  <strong>
                    <p style={{ marginBottom: "0px" }}>Turn Around Time *</p>
                  </strong>
                </div>

                <div className="col-lg-7">
                  <select
                    className="form-control"
                    name="WrdCnt"
                    id="WrdCnt"
                    style={{ marginTop: "10px" }}
                    value={turnaround}
                    onChange={(e) => setTurnaround(e.target.value)}
                  >
                    <option value="Trn_Ar10">10days</option>
                    <option value="Trn_Ar5">5days</option>
                    <option value="Trn_Ar3">3days</option>
                    <option value="Trn_Ar2">2days</option>
                    <option value="Trn_Ar1">1day</option>
                  </select>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "2rem",
                display: hideGoalSection ? "" : "none",
                border: "1px solid rgb(55, 151, 188)",
                padding: "1rem",
                borderRadius: "5px",
              }}
            >
              <button
                style={{ float: "right" }}
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setSelectedOption("");
                  setSelectedAddOns([]);
                  setHideGoalSection(!hideGoalSection);
                }}
              >
                View / Change Goal
              </button>
              <h5>
                Selected Goal: <br />
                <span style={{ color: "#347791" }}>{selectedGoal}</span>
              </h5>
            </div>
            <div style={{ display: hideGoalSection ? "none" : "" }}>
              <h5 style={{ marginTop: "30px" }}>Select Category:</h5>
              <div className="row">
                {goals.map((goal, index) => (
                  <div
                    key={index}
                    className="col-lg-3"
                    style={{ marginBottom: "15px" }}
                  >
                    <label
                      className="card cardGoal text-center p-3"
                      data-tooltip-id={`tooltip-${index}`}
                      data-tooltip-content={goal.Desc}
                    >
                      <input
                        type="radio"
                        name="goal"
                        value={goal.id}
                        onChange={() => setSelectedGoal(goal.text)}
                        checked={selectedGoal === goal.text}
                      />
                      <div className="icon-container">
                        <span style={{ fontSize: "30px" }}>{goal.emoji}</span>
                      </div>
                      <p className="title">{goal.text}</p>
                    </label>
                    <Tooltip id={`tooltip-${index}`} style={{ zIndex: 9999 }} />
                  </div>
                ))}
              </div>
            </div>

            {selectedGoal && goalOptions[selectedGoal] && (
              <div className="mt-3">
                {/* <h5>Choose a Service for {selectedGoal} :</h5> */}
                <h5>Choose a Service:</h5>

                {/* Show all services if none selected */}
                {!selectedOption &&
                  goalOptions[selectedGoal].map((option: any, idx: any) => (
                    <div key={idx} className="form-check gapping">
                      <input
                        className="form-check-input"
                        type="radio"
                        id={`option${idx}`}
                        name="goalOption"
                        value={option.text}
                        checked={selectedOption === option.text}
                        onChange={(e) => {
                          setSelectedOption(e.target.value);
                          // console.log(
                          //   "targetValue",
                          //   e.target.value,
                          //   e.target.value
                          // );
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`option${idx}`}
                      >
                        <p className="mb-0">
                          <strong>{option.text}</strong>
                        </p>
                        <p className="mb-0">{option.description}</p>
                      </label>
                    </div>
                  ))}

                {/* Show only selected service + add-ons + change button */}
                {selectedOption &&
                  goalOptions[selectedGoal]
                    .filter((option: any) => option.text === selectedOption)
                    .map((option: any, idx: any) => (
                      <div key={idx} className="form-check gapping">
                        <input
                          className="form-check-input"
                          type="radio"
                          id={`option${idx}`}
                          name="goalOption"
                          value={option.text}
                          checked
                          disabled
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`option${idx}`}
                        >
                          <p className="mb-0">
                            <strong>{option.text}</strong>
                          </p>
                          <p className="mb-0">{option.description}</p>
                        </label>

                        {addOnOptions[selectedOption] && (
                          <div className="mt-3">
                            <h5>Add-Ons for {selectedOption}</h5>
                            {addOnOptions[selectedOption].map(
                              (addOn: any, index: any) => (
                                <div key={index} className="form-check gapping">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={`addon${index}`}
                                    checked={selectedAddOns.includes(
                                      addOn.text
                                    )}
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        setSelectedAddOns([
                                          ...selectedAddOns,
                                          addOn.text,
                                        ]);
                                      } else {
                                        setSelectedAddOns(
                                          selectedAddOns.filter(
                                            (item) => item !== addOn.text
                                          )
                                        );
                                      }
                                    }}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={`addon${index}`}
                                  >
                                    <p className="mb-0">
                                      <strong>{addOn.text}</strong>
                                    </p>
                                    <p className="mb-0">{addOn.description}</p>
                                  </label>
                                </div>
                              )
                            )}
                          </div>
                        )}

                        <div className="mt-3">
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                              setSelectedOption("");
                              setSelectedAddOns([]);
                            }}
                          >
                            View / Change Service
                          </button>
                        </div>
                      </div>
                    ))}
              </div>
            )}

            <div className="container mt-4">
              <form
                onSubmit={(e) =>
                  handleSubmit(
                    e,
                    selectedGoal,
                    mainServices,
                    subServices,
                    selectedOption
                  )
                }
              >
                <div className="row mb-3">
                  {/* <div className="col-md-6">
                    <label className="form-label">Name *</label>
                    <input
                      type="text"
                      name="Name"
                      className="form-control"
                      placeholder="Name"
                      value={formData.Name}
                      onChange={handleChange}
                      required
                    />
                  </div> */}
                  {/* <div className="col-md-6">
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      name="Email"
                      className="form-control"
                      placeholder="Email"
                      value={formData.Email}
                      onChange={handleChange}
                      required
                    />
                  </div> */}
                </div>

                <div className="row mb-3">
                  {/* <div className="col-md-6">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="PhoneNum"
                      className="form-control"
                      value={formData.PhoneNum}
                      onChange={handleChange}
                      required
                    />
                  </div> */}

                  {/* <div className="col-md-6">
                    <label className="form-label">
                      How did you hear about us
                    </label>
                    <select
                      name="HearAbt"
                      className="form-select"
                      value={formData.HearAbt}
                      onChange={handleChange}
                      style={{ width: "100%", height: "60px" }}
                      required
                    >
                      <option value="">-- Select --</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="OfficialSite">Official Site</option>
                      <option value="Whatsapp">Whatsapp</option>
                      <option value="fb">Facebook</option>
                    </select>
                  </div> */}
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Major Subject Type *</label>
                    <select
                      name="majorSubject"
                      className="form-select"
                      value={formData.majorSubject}
                      onChange={handleChange}
                      style={{ width: "100%", height: "60px" }}
                      required
                    >
                      <option value="">-- Select --</option>
                      {subjectsData.map((subject) => (
                        <optgroup key={subject.id} label={subject.subject}>
                          {subject.sub_subjects.map((subSubject) => (
                            <option key={subSubject.id} value={subSubject.id}>
                              {subSubject.sub_name}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                    {/* <select
                      value={selectedSubSubject}
                      onChange={(e) => setSelectedSubSubject(e.target.value)}
                      className="form-control"
                    >
                      <option value="">Select a subject/sub-subject</option>
                      {subjectsData.map((subject) => (
                        <optgroup key={subject.id} label={subject.subject}>
                          {subject.sub_subjects.map((subSubject) => (
                            <option key={subSubject.id} value={subSubject.id}>
                              {subSubject.sub_name}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select> */}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">
                      Specific Subject Area *
                    </label>
                    <textarea
                      name="specificSubject"
                      className="form-control"
                      placeholder="Enter ..."
                      value={formData.specificSubject}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Delivery Date *</label>
                    <input
                      type="date"
                      name="deliveryDate"
                      className="form-control"
                      value={formData.deliveryDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Preferred Language *</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="preferredLanguage"
                        value="American English"
                        checked={
                          formData.preferredLanguage === "American English"
                        }
                        onChange={handleChange}
                        required
                      />
                      <label className="form-check-label">
                        American English
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="preferredLanguage"
                        value="British English"
                        checked={
                          formData.preferredLanguage === "British English"
                        }
                        onChange={handleChange}
                      />
                      <label className="form-check-label">
                        British English
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Instruction for Editor</label>
                  <textarea
                    name="editorInstruction"
                    className="form-control"
                    placeholder="Enter ..."
                    value={formData.editorInstruction}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">Payment Mode</label>
                  <select
                    name="paymentMode"
                    className="form-select"
                    value={formData.paymentMode}
                    onChange={handleChange}
                    style={{ width: "100%", height: "60px" }}
                    required
                  >
                    <option value="">--Select payment mode--</option>
                    <option value="credit">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank">Bank Transfer</option>
                    <option value="debit">Debit Card</option>
                  </select>
                </div>

                <center>
                  <div
                    style={{
                      marginBottom: "1rem",
                      border: "2px solid grey",
                      padding: "1rem",
                      borderRadius: ".5rem",
                    }}
                  >
                    <h6>Upload your document to be edited*</h6>
                    <p>
                      Upload manuscripts in .doc or .docx format to autocount
                      words & get an instant quote.
                    </p>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept=".doc,.docx"
                      style={{ width: "34%" }}
                    />
                    {file && (
                      <p style={{ marginTop: "10px" }}>
                        Selected file: {file.name} (
                        {Math.round(file.size / 1024)} KB)
                      </p>
                    )}
                  </div>
                </center>

                <center>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </center>
              </form>
            </div>
          </div>
        </div>

        <div
          className="col-md-4"
          style={{ position: "relative", zIndex: "999" }}
        >
          {selectedGoal && (
            <div className="summary-container">
              <div className="card border rounded shadow-sm p-3">
                <div className="card-body">
                  <h5 className="card-title border-bottom pb-2">Summary</h5>
                  <p className="mb-2">
                    <strong style={{ textAlign: "left" }}>
                      Selected Goal:
                    </strong>
                    <br></br> {selectedGoal}
                  </p>
                  {selectedOption && (
                    <div className="mb-3">
                      <strong>Selected Option:</strong>
                      <p className="d-flex justify-content-between align-items-center border p-2 rounded mt-2">
                        <span>{selectedOption || ""}</span>
                        {selectedGoal === "Editing & Language Services" &&
                          (optionTotalPrice != 0 ? (
                            <span className="fw-bold">
                              $
                              {selectedOption
                                ? goalOptions[selectedGoal]?.find(
                                    (opt: any) => opt.text === selectedOption
                                  )?.price || totalPrice
                                : ""}
                            </span>
                          ) : (
                            ""
                          ))}
                      </p>
                    </div>
                  )}
                  <div className="mb-3">
                    {selectedAddOns.length > 0 && (
                      <strong>Selected Add-Ons:</strong>
                    )}
                    {selectedAddOns.length > 0 &&
                    selectedGoal != "Editing & Language Services" &&
                    addOnOptions[selectedOption] ? (
                      <table className="table table-sm table-borderless mt-2">
                        <tbody>
                          {addOnOptions[selectedOption]
                            .filter((addOn: any) =>
                              selectedAddOns.includes(addOn.text)
                            )
                            .map((addOn: any, index: any) => (
                              <tr key={index}>
                                <td>{addOn.text}</td>
                                <td className="text-end fw-bold">
                                  {addOn.price > 0 ? (
                                    `₹${addOn.price}`
                                  ) : (
                                    <h6 className="TableQuote"></h6>
                                  )}
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    ) : (
                      ""
                    )}

                    {selectedAddOns.length > 0 ? (
                      <div className="border-top pt-3">
                        <table className="table table-sm table-borderless mt-2">
                          <tbody>
                            {addonturnaroundPrice
                              .filter((addOn) =>
                                selectedAddOns.includes(addOn.name)
                              )
                              .map((addOn, index) => {
                                const isPerWord = addOn.price < 1;
                                const calculatedPrice = isPerWord
                                  ? addOn.price * wordCount
                                  : addOn.price;

                                return (
                                  <tr key={index}>
                                    <td className="fw-bold">{addOn.name}</td>
                                    <td className="text-end fw-bold">
                                      ${calculatedPrice.toFixed(2)}
                                      {isPerWord && (
                                        <span className="text-muted"> </span>
                                      )}
                                    </td>
                                  </tr>
                                );
                              })}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    {selectedGoal === "Editing & Language Services" ? (
                      optionTotalPrice != 0 && wordCount != 0 ? (
                        <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                          <h5 className="mb-0">Total:</h5>
                          <p className="fw-bold fs-5 text-primary mb-0">
                            ${optionTotalPrice.toFixed(2)}
                          </p>
                        </div>
                      ) : (
                        <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                          <p className="mb-0">
                            Please enter word count for pricing.
                          </p>
                        </div>
                      )
                    ) : (
                      selectedGoal && (
                        <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                          <p className="mb-0">
                            For the selected service, pricing depends on
                            data/manuscript's complexity
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
