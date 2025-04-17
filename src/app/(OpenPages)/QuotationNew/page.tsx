"use client";

import { useEffect, useState, useRef } from "react";
import "../QuotationNew/quotationNew.css";
import { goalOptions } from "@/app/utils/Quote";
import { addOnOptions } from "@/app/utils/Quote";
import { addonturnaroundPrice } from "@/app/utils/Quote";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
export default function ProjectQuote() {
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

  console.log(
    "totalPrice",
    totalPrice,
    "totalPriceAddons",
    totalPriceAddons,
    "optionTotalPrice",
    optionTotalPrice,
    "selectedAddOns",
    selectedAddOns
  );

  useEffect(() => {
    setValFromLocalStorage(
      localStorage.getItem("SelectedServiceFromPriceCalculator")
    );
    setWordCount(localStorage.getItem("SelectedWordCountFromPriceCalculator"));
  }, []);
  // console.log("wordCount is:", wordCount);d
  useEffect(() => {
    if (valFromLocalStorage === "Extensive Substantive Editing") {
      setSelectedGoal("Editing & Language Services");
    } else if (valFromLocalStorage === "Substantive Editing") {
      setSelectedGoal("Editing & Language Services");
    } else if (valFromLocalStorage === "Proofreading") {
      setSelectedGoal("Editing & Language Services");
    }
  }, [valFromLocalStorage]);

  useEffect(() => {
    setTimeout(() => setSelectedOption(valFromLocalStorage), 100);
  }, [valFromLocalStorage]);

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

  const subjectsData = [
    {
      id: "1",
      subject: "Biological Sciences",
      sub_subjects: [
        {
          id: "4",
          count: 1,
          sub_name: "Agricultural Science",
        },
        {
          id: "5",
          count: 2,
          sub_name: "Biochemistry",
        },
        {
          id: "6",
          count: 3,
          sub_name: "Bioinformatics",
        },
        {
          id: "7",
          count: 4,
          sub_name: "Biotechnology",
        },
        {
          id: "8",
          count: 5,
          sub_name: "Botany",
        },
        {
          id: "9",
          count: 6,
          sub_name: "Environmental Science",
        },
        {
          id: "10",
          count: 7,
          sub_name: "Fisheries Science",
        },
        {
          id: "11",
          count: 8,
          sub_name: "Genetics/Genomics",
        },
        {
          id: "12",
          count: 9,
          sub_name: "Immunology",
        },
        {
          id: "13",
          count: 10,
          sub_name: "Medicine",
        },
        {
          id: "14",
          count: 11,
          sub_name: "Microbiology",
        },
        {
          id: "15",
          count: 12,
          sub_name: "Molecular Biology",
        },
        {
          id: "16",
          count: 13,
          sub_name: "Pharmaceutical Sciences",
        },
        {
          id: "17",
          count: 14,
          sub_name: "Taxonomy",
        },
        {
          id: "18",
          count: 15,
          sub_name: "Zoology",
        },
        {
          id: "30",
          count: 16,
          sub_name: "Biology",
        },
        {
          id: "31",
          count: 17,
          sub_name: "Coronary Artery Disease",
        },
      ],
    },
    {
      id: "2",
      subject: "Engineering and Physical Sciences",
      sub_subjects: [
        {
          id: "19",
          count: 1,
          sub_name: "Architecture",
        },
        {
          id: "20",
          count: 2,
          sub_name: "Chemistry",
        },
        {
          id: "21",
          count: 3,
          sub_name: "Earth Sciences/Geology",
        },
        {
          id: "22",
          count: 4,
          sub_name: "Engineering",
        },
        {
          id: "23",
          count: 5,
          sub_name: "Geographical/Environmental Sciences/Oceanology ",
        },
        {
          id: "24",
          count: 6,
          sub_name: "Mathematics",
        },
        {
          id: "25",
          count: 7,
          sub_name: "Physics",
        },
        {
          id: "26",
          count: 8,
          sub_name: "Astronomy and Planetary Science",
        },
      ],
    },
    {
      id: "3",
      subject: "Social Science / Business Management / Others",
      sub_subjects: [
        {
          id: "27",
          count: 1,
          sub_name: "Business",
        },
        {
          id: "28",
          count: 2,
          sub_name: "Social Science",
        },
        {
          id: "29",
          count: 3,
          sub_name: "Others",
        },
      ],
    },
  ];

  const goals = [
    {
      id: 355,
      text: "Editing & Language Services",
      Desc: "Improve grammar, clarity, consistency, and readability of your manuscript for Scopus, PubMed, Web of Science.",
      emoji: "✍️",
    },
    {
      id: 356,
      text: "Medical & Clinical Writing Services",
      Desc: "Expertly crafted content for clinical trials, case reports, protocols, and other medical documentation, adhering to global standards.",
      emoji: "🩺",
    },
    {
      id: 357,
      text: "Regulatory Writing Support",
      Desc: "Precise, compliant regulatory documents including clinical study reports (CSRs), protocols, and submissions for FDA, EMA, etc.",
      emoji: "📜",
    },
    {
      id: 358,
      text: "Scientific Communication Support",
      Desc: "Visuals, infographics, and simplified summaries to enhance your research’s reach across scientific and non-scientific audiences.",
      emoji: "🔬",
    },
    {
      id: 359,
      text: "Evidence Synthesis & Review Writing",
      Desc: "Systematic reviews, meta-analyses, and literature reviews written following PRISMA or other applicable guidelines.",
      emoji: "📊",
    },
    {
      id: 360,
      text: "Scientific Publication Assistance",
      Desc: "End-to-end support for journal selection, cover letters, submission, peer-review handling, and resubmissions.",
      emoji: "📚",
    },
    {
      id: 361,
      text: "Data & Statistical Support",
      Desc: "Robust statistical analysis, data interpretation, visualizations, and guidance tailored to your research objectives.",
      emoji: "📈",
    },
    {
      id: 362,
      text: "Journal Publication Support",
      Desc: "Full-cycle manuscript submission and tracking service—from formatting to final upload—on your target journal’s portal.",
      emoji: "📰",
    },
    {
      id: 363,
      text: "Manuscriptedit Packages",
      Desc: "Customisable bundles for editing, writing, and publishing support—ideal for thesis, dissertations, or multi-step projects.",
      emoji: "📄",
    },
    {
      id: 364,
      text: "Academic & Non-Scientific Writing",
      Desc: "Support for essays, coursework, SOPs, reports, and business documents tailored for academic or professional use.",
      emoji: "📝",
    },
    {
      id: 365,
      text: "Design and Image Polishing and Creation",
      Desc: "High-resolution graphs, journal-compliant figures, scientific illustrations,and presentation design services.",
      emoji: "🎨",
    },
  ];

  const mainServices = {
    "Editing & Language Services": "355",
    "Medical & Clinical Writing Services": "356",
    "Regulatory Writing Support": "357",
    "Scientific Communication Support": "358",
    "Evidence Synthesis & Review Writing": "359",
    "Scientific Publication Assistance": "360",
    "Data & Statistical Support": "361",
    "Journal Publication Support": "362",
    "Manuscriptedit Packages": "363",
    "Academic & Non-Scientific Writing": "364",
    "Design and Image Polishing and Creation": "365",
  };

  const subServices = {
    "Substantive Editing": "366",
    "Copyediting (Standard Editing)": "367",
    Proofreading: "368",
    "Journal Formatting & Style Editing": "369",
    "Language Enhancement & Clarity Check": "370",
    "Re-editing Support": "371",
    "Reference & Citation Editing": "372",
    "12 Hrs. Express Editing": "373",
    "Extensive Substantive Editing": "374",
    "Clinical Research Manuscript Writing": "375",
    "Research Proposal & Protocol Development": "376",
    "Patient & HCP Education Material": "377",
    "Regulatory Document Preparation": "378",
    "Compliance & Standards Alignment": "379",
    "API Documentation": "380",
    "Scientific Marketing & Promotional Content": "381",
    "Conference Abstract & Presentation Writing": "382",
    "Informational Publications": "383",
    "Systematic Review Writing": "384",
    "Narrative & Scoping Review Writing": "385",
    "Case Report / Case Series Writing": "386",
    "Creative & Narrative Writing": "387",
    "Comprehensive Manuscript Writing": "388",
    "Section-wise Scientific Writing": "389",
    "Title, Abstract & Keyword Optimization": "390",
    "Review Article & Short Communication Writing": "391",
    "Supplementary Materials Preparation": "392",
    "Commentaries & Opinion Article Writing": "393",
    "Meta-analysis Writing & Execution": "394",
    "Research Data Analysis & Interpretation": "395",
    "End-to-End Journal Submission Support": "396",
    "Journal Selection Assistance": "397",
    "Cover Letter Preparation": "398",
    "Response to Reviewer Comments": "399",
    "Pre-Submission Peer Review": "400",
    "Post-Submission Follow-up Support": "401",
    "Fast Track Publication Consultation": "402",
    "Basic Package": "403",
    "Standard Package": "404",
    "Advanced Package": "405",
    "Premium Publication Package": "406",
    "Reviewer Response Package": "407",
    "Fast-Track Express Package": "408",
    "Rejection Handling Package": "409",
    "Custom Publication Package": "410",
    "Advance Package": "411",
    "Plagiarism Check & Report": "412",
    "Academic Essay & Report Writing": "413",
    "Academic Writing": "414",
    "Thesis & Dissertation Writing Support": "415",
    "Scientific Illustration Design": "416",
    "Graph & Chart Enhancement": "417",
    "Image Formatting & Conversion": "418",
    "Poster Design & Development": "419",
  };

  const addOnsId: {
    "Editing & Language Services": {
      "Peer Review Analysis": string;
      "Data Analysis": string;
      "Journal Selection": string;
      "Target Journal Formatting": string;
      "Artwork Formatting": string;
      "Cover Letter Writing": string;
      "Journal Submission": string;
      "Response To Reviewer": string;
      "Plagiarism Check": string;
    };
    "Medical & Clinical Writing Services": {
      "Patient & HCP Education Material": string;
      "Compliance & Standards Alignment": string;
      "Journal Selection Assistance": string;
    };
    "Regulatory Writing Support": {
      "Compliance & Standards Alignment": string;
      "Scientific Illustration Design": string;
      "End-to-End Journal Submission Support": string;
    };
    "Scientific Communication Support": {
      "Scientific Illustration Design": string;
      "Poster Design & Development": string;
      "Graph & Chart Enhancement": string;
    };
    "Evidence Synthesis & Review Writing": {
      "Meta-analysis Writing & Execution": string;
      "Reference & Citation Editing": string;
      "Scientific Illustration Design": string;
    };
    "Scientific Publication Assistance": {
      "Title, Abstract & Keyword Optimization": string;
      "Journal Formatting & Style Editing": string;
      "Pre-Submission Peer Review": string;
    };
    "Data & Statistical Support": {
      "Graph & Chart Enhancement": string;
      "Meta-analysis Writing": string;
      "Scientific Illustration Design": string;
    };
    "Journal Publication Support": {
      "Cover Letter Preparation": string;
      "Response to Reviewer Comments": string;
      "Fast Track Publication Consultation": string;
    };
    "Manuscriptedit Packages": {
      "Reviewer Response Package": string;
      "Rejection Handling Package": string;
      "Plagiarism Check & Report": string;
    };
    "Academic & Non-Scientific Writing": {
      "Plagiarism Check & Report": string;
      "Reference & Citation Editing": string;
      "Scientific Illustration Design": string;
    };
    "Design and Image Polishing and Creation": {
      "Image Formatting & Conversion": string;
      "Graph & Chart Enhancement": string;
      "Scientific Marketing & Promotional Content": string;
    };
  } = {
    "Editing & Language Services": {
      "Peer Review Analysis": "1",
      "Data Analysis": "2",
      "Journal Selection": "3",
      "Target Journal Formatting": "4",
      "Artwork Formatting": "35",
      "Cover Letter Writing": "36",
      "Journal Submission": "37",
      "Response To Reviewer": "38",
      "Plagiarism Check": "39",
    },
    "Medical & Clinical Writing Services": {
      "Patient & HCP Education Material": "5",
      "Compliance & Standards Alignment": "6",
      "Journal Selection Assistance": "7",
    },
    "Regulatory Writing Support": {
      "Compliance & Standards Alignment": "8",
      "Scientific Illustration Design": "9",
      "End-to-End Journal Submission Support": "10",
    },
    "Scientific Communication Support": {
      "Scientific Illustration Design": "11",
      "Poster Design & Development": "12",
      "Graph & Chart Enhancement": "13",
    },
    "Evidence Synthesis & Review Writing": {
      "Meta-analysis Writing & Execution": "14",
      "Reference & Citation Editing": "15",
      "Scientific Illustration Design": "16",
    },
    "Scientific Publication Assistance": {
      "Title, Abstract & Keyword Optimization": "17",
      "Journal Formatting & Style Editing": "18",
      "Pre-Submission Peer Review": "19",
    },
    "Data & Statistical Support": {
      "Graph & Chart Enhancement": "20",
      "Meta-analysis Writing": "21",
      "Scientific Illustration Design": "22",
    },
    "Journal Publication Support": {
      "Cover Letter Preparation": "23",
      "Response to Reviewer Comments": "24",
      "Fast Track Publication Consultation": "25",
    },
    "Manuscriptedit Packages": {
      "Reviewer Response Package": "26",
      "Rejection Handling Package": "27",
      "Plagiarism Check & Report": "28",
    },
    "Academic & Non-Scientific Writing": {
      "Plagiarism Check & Report": "29",
      "Reference & Citation Editing": "30",
      "Scientific Illustration Design": "31",
    },
    "Design and Image Polishing and Creation": {
      "Image Formatting & Conversion": "32",
      "Graph & Chart Enhancement": "33",
      "Scientific Marketing & Promotional Content": "34",
    },
  };

  const majorSubject = {
    "Biological Sciences": "1",
    "Engineering and Physical Sciences": "2",
    "Social Science / Business Management / Others": "3",
    "Agricultural Science": "4",
    Biochemistry: "5",
    Bioinformatics: "6",
    Biotechnology: "7",
    Botany: "8",
    "Environmental Science": "9",
    "Fisheries Science": "10",
    "Genetics/Genomics": "11",
    Immunology: "12",
    Medicine: "13",
    Microbiology: "14",
    "Molecular Biology": "15",
    "Pharmaceutical Sciences": "16",
    Taxonomy: "17",
    Zoology: "18",
    Architecture: "19",
    Chemistry: "20",
    "Earth Sciences/Geology": "21",
    Engineering: "22",
    "Geographical/Environmental Sciences/Oceanology": "23",
    Mathematics: "24",
    Physics: "25",
    "Astronomy and Planetary Science": "26",
    Business: "27",
    "Social Science": "28",
    Others: "29",
    Biology: "30",
    "Coronary Artery Disease": "31",
  };

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
      setFile(e.target.files[0]);
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

  const handleSubmit = async (
    e: React.FormEvent,
    selectedGoal: any,
    mainServices: any,
    subServices: any,
    selectedOption: any
  ) => {
    e.preventDefault();

    // Prepare the data in the required format
    // mapMajorSubject(formData.majorSubject)
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
      file: file ? file.name : "no_file_uploaded.docs",
      name: formData.Name,
      email: formData.Email,
      phone: formData.PhoneNum,
      user_find: formData.HearAbt,
      total_price: String(optionTotalPrice),
    };

    // 2. After successful submission — RESET EVERYTHING:
    setSelectedGoal("");
    setSelectedOption("");
    setSelectedAddOns([]);
    setWordCount("");
    setTurnaround("Trn_Ar10"); // or your default turnaround
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
    setHideGoalSection(false); // to show the goal options again

    // console.log("Submitting data:", postData);

    try {
      const response = await fetch(
        "https://www.secure.manuscriptedit.com/api/submit_quotation_out.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      if (!response.ok) {
        throw new Error(`Error submitting quotation: ${response.statusText}`);
      }

      const { Message } = await response.json();
      if (Message === "Data Saved Successfully") {
        alert("Quotation submitted successfully!");
        window.location.href = "https://secure.manuscriptedit.com/register";
      } else {
        alert("Something went wrong with the submission.");
      }
    } catch (err: any) {
      console.error("Error encountered:", err.message);
      alert(
        "Error encountered while submitting the Quotation. Please try again."
      );
    }
  };

  useEffect(() => {
    setHideGoalSection(!hideGoalSection);
  }, [selectedGoal]);

  return (
    <div className="container">
      <div className="row mt-4 ">
        <div className="col-md-8 p-4 border bg-light shade">
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
              <h5 style={{ marginTop: "30px" }}>Select Your Goals</h5>
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
                <h5>Choose a Service for {selectedGoal} :</h5>

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
                  <div className="col-md-6">
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
                  </div>
                  <div className="col-md-6">
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
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="PhoneNum"
                      className="form-control"
                      value={formData.PhoneNum}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
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
                  </div>
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
                <button type="submit" className="btn btn-primary">
                  Submit & Register
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="summary-container">
            <div className="card border rounded shadow-sm p-3 card_holderHeight scrollable-summary">
              <div className="card-body">
                <h5 className="card-title border-bottom pb-2">Summary</h5>
                <p className="mb-2 text-left">
                  <strong>Category:</strong> &nbsp;
                  {selectedGoal}
                </p>
                <div className="mb-3">
                  <strong>Service:</strong>
                  <p className="d-flex justify-content-between align-items-center border p-2 rounded mt-2">
                    <span>{selectedOption || "None"}</span>
                    {selectedGoal === "Editing & Language Services" &&
                      (optionTotalPrice != 0 ? (
                        <span className="fw-bold">
                          $
                          {selectedOption
                            ? goalOptions[selectedGoal]?.find(
                                (opt: any) => opt.text === selectedOption
                              )?.price || totalPrice.toFixed(2)
                            : "0"}
                        </span>
                      ) : (
                        ""
                      ))}
                  </p>
                </div>
                <div className="mb-3">
                  <strong>Selected Add-Ons:</strong>
                  {/* {selectedAddOns.length > 0 && addOnOptions[selectedOption] ? (
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
                                  <h6 className="TableQuote">
                                    Price after discussion
                                  </h6>
                                )}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  ) : (
                    <p className="border p-2 rounded mt-2 text-muted">0</p>
                  )} */}

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
                    <p className="border p-2 rounded mt-2 text-muted">0</p>
                  )}
                </div>
                <div>
                  {selectedGoal === "Editing & Language Services" ? (
                    optionTotalPrice != 0 ? (
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
        </div>
      </div>
    </div>
  );
}
