"use client";
import Sidebar from "@/app/component/Sidebar/Sidebar";
import "./UpdateProfile.css";
import { useState } from "react";
import Link from "next/link";

const UpdateProfile = () => {


    const [password, setPassword] = useState(true);

    function ClickToogle() {
        setPassword(!password)
    }


    return (
        <>
            <Sidebar>
                <div className="profile-container">
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
                                    <input type="text" placeholder="Institution" />
                                </div>
                                <div className="form-group">
                                    <label>Department</label>
                                    <input type="text" placeholder="Department" />
                                </div>
                                <div className="form-group">
                                    <label>Primary Affiliation</label>
                                    <select>
                                        <option value="">--Select--</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Primary Position</label>
                                    <select>
                                        <option value="">--Select--</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Address Line 1</label>
                                    <input type="text" placeholder="Address Line 1" />
                                </div>
                                <div className="form-group">
                                    <label>Address Line 2</label>
                                    <input type="text" placeholder="Address Line 2" />
                                </div>
                                <div className="form-group">
                                    <label>City</label>
                                    <input type="text" placeholder="City" />
                                </div>
                                <div className="form-group">
                                    <label>State/Province</label>
                                    <input type="text" placeholder="State/Province" />
                                </div>
                                <div className="form-group">
                                    <label>Zip/Postal Code</label>
                                    <input type="text" placeholder="Zip/Postal Code" />
                                </div>
                                <div className="form-group">
                                    <label>Country</label>
                                    <input type="text" value="Tanzania" disabled />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" value="9937598699" disabled />
                                </div>
                                <div className="form-group">
                                    <label>Fax</label>
                                    <input type="text" placeholder="Fax" />
                                </div>
                                <div className="form-group">
                                    <label>Preferred Email ID</label>
                                    <input type="email" value="" />
                                </div>

                                <div className="form-group">
                                    <label>Alternate Email ID</label>
                                    <input type="email" value="" />
                                </div>

                                <div className="form-group">
                                    <label>Website URL</label>
                                    <input type="text" value="" />
                                </div>

                                <button className="bg-primary updateButton">Update</button>
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
                </div>

            </Sidebar>


        </>

    );
};

export default UpdateProfile;
