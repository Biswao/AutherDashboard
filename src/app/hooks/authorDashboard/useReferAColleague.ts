"use client";
import { useState } from "react";
import { toast } from "react-toastify";

const useReferAColleague = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const submitReferAColleague = async (formData: any) => {
        if (!formData.yourEmail || !formData.colleagueEmail) {
            toast.error("Please enter all required fields.");
            return;
        }

        setLoading(true);
        setError(null);

        console.log("Submitting Form Data:", formData); // Debugging

        try {
            const response = await fetch(
                "https://www.secure.manuscriptedit.com/api/refer_a_colleague.php",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();
            console.log("API Response:", data); // Debugging

            if (!response.ok || data.Message !== "Data Saved Successfully") {
                throw new Error(`API Error: ${data.Message || response.statusText}`);
            }

            toast.success("Referral Submitted Successfully!");
        } catch (err: any) {
            setError(err.message || "Something went wrong.");
            toast.error(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, submitReferAColleague };
};

export default useReferAColleague;
