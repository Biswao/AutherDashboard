"use client";

import { LoginResponse, UseAuthReturn } from "@/app/utils/interfaces/types";
import { useState } from "react";
import { useRouter } from "next/navigation";

const useSignin = (): UseAuthReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const login = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    setError(null); // Clear previous errors

    try {
      const response = await fetch(
        "https://secure.manuscriptedit.com/api/author_signin_jwt.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, pswd: password }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error: ${errorText}`);
      }

      const data: LoginResponse[] = await response.json();
      console.log(data)

      if (
        data[0] &&
        data[0].Message === "Login Successfully" &&
        data[0].token
      ) {
        localStorage.setItem("token", data[0].token);
        localStorage.setItem("email", email);
        localStorage.setItem("user_id", data[0].user_id || "");

        router.push("/");
      } else {
        setError(data[0]?.Message || "Login failed. Try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useSignin;
