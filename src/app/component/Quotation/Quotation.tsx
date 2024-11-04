import Sidebar from "@/app/component/Sidebar/Sidebar"
import Table from "@/app/component/Table/Table";
import "./Quotation.css"

const Quotation = () => {
    // const headers: string[] = ['Quotation Id', 'Service Type', 'Submit Date', 'Delivery Date'];
    // const data: string[][] = [];
    return (
        <div style={{ margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ marginBottom: "20px" }}>Request a Quotation</h2>
            <div className="QuotationDivide" style={{ display: 'flex', gap: '50px' }}>
                {/* Left Side - Form Fields */}
                <div style={{ flex: '1' }}>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Full Name*</label>
                        <input type="text" placeholder="Enter your name here" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Email Address*</label>
                        <input type="email" placeholder="Enter your email here" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Your Current Academic Role*</label>
                        <select style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}>
                            <option>Please select your current academic role</option>
                            <option>Student</option>
                            <option>Researcher</option>
                            <option>Professor</option>
                        </select>
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Phone Number*</label>
                        <input type="tel" placeholder="+91 (India)" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Preferred Communication Method*</label>
                        <select style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}>
                            <option>Select your communication method</option>
                            <option>Email</option>
                            <option>Phone</option>
                        </select>
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Preferred Time for Contact*</label>
                        <select style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}>
                            <option>Please select preferred time for contact</option>
                            <option>Morning</option>
                            <option>Afternoon</option>
                            <option>Evening</option>
                        </select>
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Urgency of your requirement*</label>
                        <select style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}>
                            <option>Please select urgency of your requirement</option>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                </div>

                {/* Right Side - Services */}
                <div style={{ flex: '1' }}>
                    <label style={{ marginBottom: "20px" }}>Service Required*</label>
                    <div className="LabelsService" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                        <label><input type="checkbox" /> Writing Manuscript/Thesis</label>
                        <label><input type="checkbox" /> Data Analysis for Manuscript/Thesis</label>
                        <label><input type="checkbox" /> Editing/Rewriting/Formatting/Proofreading</label>
                        <label><input type="checkbox" /> Publication of Manuscript</label>
                        <label><input type="checkbox" /> Paper from Thesis</label>
                        <label><input type="checkbox" /> Expert Book Chapter Publishing Support</label>
                        <label><input type="checkbox" /> PhD Support & Assistance</label>
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Next</button>
            </div>
        </div>
    )
}

export default Quotation