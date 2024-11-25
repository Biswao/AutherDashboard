"use client";
import Sidebar from "@/app/component/Sidebar/Sidebar";
import "./UpdateProfile.css";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { MainContext } from "@/app/context/MainContext";
import { useFetchAuthor } from "@/app/hooks/authorDashboard/useFetchAuthor";

const UpdateProfile = () => {
    const [password, setPassword] = useState(true);
    const [formData, setFormData] = useState({
        user_id: "",
        user_name: "",
        institution: "",
        department: "",
        affiliation: "",
        position: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        country: "",
        pin: "",
        phone: "",
        email: "",
        alt_email: "",
        c_name: "",
        c_phone: "",
        c_email: "",
    });
    const email = typeof window !== 'undefined' ? localStorage.getItem('email') : undefined
    const user_id = typeof window !== 'undefined' ? localStorage.getItem('user_id') : undefined
    const { loading, error, authorDetails } = useFetchAuthor(email ?? undefined)
    const { active, setActive } = useContext(MainContext)
    console.log({ activecheck: active })

    useEffect(() => {
        if (authorDetails) {
            setFormData({
                user_id: user_id || "",
                user_name: authorDetails.user_name || "",
                institution: authorDetails.institution || "",
                department: authorDetails.department || "",
                affiliation: authorDetails.affiliation || "",
                position: authorDetails.position || "",
                address1: authorDetails.address1 || "",
                address2: authorDetails.address2 || "",
                city: authorDetails.city || "",
                state: authorDetails.state || "",
                country: authorDetails.country || "",
                pin: authorDetails.pin || "",
                phone: authorDetails.phone || "",
                email: authorDetails.email || "",
                alt_email: authorDetails.alt_email || "",
                c_name: authorDetails.c_name || "",
                c_phone: authorDetails.c_phone || "",
                c_email: authorDetails.c_email || "",
            });
        }
    }, [authorDetails]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Updated Data:", formData);
        // Add logic to submit the updated form data
    };

    function ClickToogle() {
        setPassword(!password)
    }


    return (
        <>
            {loading ? <h1>Loading...</h1> :
                (<div className="profile-container">
                    <div className="profile-header">
                        <h2>User Profile</h2>
                    </div>
                    <div className="profile-content">
                        <div className="profile-sidebar">
                            <div className="profile-picture">
                                <img
                                    src="https://via.placeholder.com/100"
                                    alt="Profile"
                                    className="profile-img"
                                />
                            </div>
                            <h3 className="profile-name">Sita Sahoo</h3>
                            <p className="profile-member">Member since Sep. 2024</p>
                            <div className="profile-info">
                                <div>
                                    <span>Username:</span>
                                    <p>ashutoshsahuu88@gmail.com</p>
                                </div>
                                <div>
                                    <span>Password:</span>
                                    <p>********</p>
                                </div>
                            </div>
                            <button className="change-password-btn" onClick={ClickToogle}>{password ? "Change Password" : "Personal Information"}</button>
                        </div>
                        {password && <div className="profile-form">
                            <h3>Personal Information</h3>
                            <form>
                                <div className="form-group">
                                    <label>Institution</label>
                                    <input name="institution" type="text" placeholder="Institution" value={formData.institution} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Department</label>
                                    <input name="department" type="text" placeholder="Department" value={formData.department} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Primary Affiliation</label>
                                    <select name="affiliation" value={formData.affiliation} onChange={handleInputChange}>
                                        <option value="">--Select--</option>
                                        <option value="Academic">Academic</option>
                                        <option value="Government">Government</option>
                                        <option value="Private Industry">Private Industry</option>
                                        <option value="Others">Others</option>
                                        <option value="None">None</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Primary Position</label>
                                    <select name="position" value={formData.position} onChange={handleInputChange}>
                                        <option value="professor emeritus">Professor Emeritus</option>
                                        <option value="full professor">Full Professor</option>
                                        <option value="associate professor">Associate Professor</option>
                                        <option value="assistant professor">Assistant Professor</option>
                                        <option value="clinician/medical scientist">Clinician/Medical Scientist</option>
                                        <option value="research scientist/associates">Research Scientist/Associates</option>
                                        <option value="post doctoral researcher">Post Doctoral Researcher</option>
                                        <option value="laboratory manager">Laboratory Manager</option>
                                        <option value="instructor/lecturer">Instructor/Lecturer</option>
                                        <option value="graduate/student">Graduate/Student</option>
                                        <option value="undergraduate student">Undergraduate student</option>
                                        <option value="administrative assistant">Administrative Assistant</option>
                                        <option value="independent author">Independent Author</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Address Line 1</label>
                                    <input name="address1" type="text" placeholder="Address Line 1" value={formData.address1} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Address Line 2</label>
                                    <input name="address2" type="text" placeholder="Address Line 2" value={formData.address2} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>City</label>
                                    <input name="city" type="text" placeholder="City" value={formData.city} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>State/Province</label>
                                    <input name="state" type="text" placeholder="State/Province" value={formData.state} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Zip/Postal Code</label>
                                    <input name="pin" type="text" placeholder="Zip/Postal Code" value={formData.pin} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Country</label>
                                    <input name="country" type="text" placeholder="Country" value={formData.country} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input name="phone" type="text" placeholder="Phone" value={formData.phone} onChange={handleInputChange} />
                                </div>
                                {/* <div className="form-group">
    <label>Fax</label>
    <input name="fax" type="text" placeholder="Fax" />
</div> */}
                                <div className="form-group">
                                    <label>Preferred Email ID</label>
                                    <input name="email" type="email" value={formData.email} onChange={handleInputChange} />
                                </div>

                                <div className="form-group">
                                    <label>Alternate Email ID</label>
                                    <input name="alt_email" type="email" value={formData.alt_email} onChange={handleInputChange} />
                                </div>

                                {/* <div className="form-group">
    <label>Website URL</label>
    <input name="website" type="text" value="" />
</div> */}

                                <div className="mt-5"></div>

                                <h3>Additional Billing Information</h3>
                                <div className="form-group">
                                    <label>Contact Name</label>
                                    <input name="c_name" type="text" placeholder="Contact Name" value={formData.c_name} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Contact Phone</label>
                                    <input name="c_phone" type="text" placeholder="Contact Phone" value={formData.c_phone} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Contact Email</label>
                                    <input name="c_email" type="text" placeholder="Contact Email" value={formData.c_email} onChange={handleInputChange} />
                                </div>


                                <button className="bg-primary updateButton" onClick={handleSubmit}>Update</button>
                            </form>
                        </div>}
                        {!password && <div className="profile-form">
                            <h3>Personal Information</h3>
                            <form>
                                <div className="form-group">
                                    <label>Old password</label>
                                    <input type="text" placeholder="Old password" />
                                </div>

                                <div className="form-group">
                                    <label>New Password</label>
                                    <input type="text" placeholder="New Password" />
                                </div>

                                <div className="form-group">
                                    <label>Confirm new password</label>
                                    <input type="text" placeholder="Confirm new password" />
                                </div>

                                <button className="bg-primary updateButton">Update</button>
                            </form>
                        </div>}
                    </div>
                </div>)}
        </>

    );
};

export default UpdateProfile;
