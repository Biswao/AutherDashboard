"use client";
import Sidebar from "@/app/component/Sidebar/Sidebar";
import "./UpdateProfile.css";
import UpdateProfile from "@/app/component/UpdateProfile/UpdateProfile";

const UpdateProfilePage = () => {
    return (
        <>
            <Sidebar>
                <UpdateProfile />
            </Sidebar>
        </>

    );
};

export default UpdateProfilePage;
