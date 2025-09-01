import {
  AuthorDetails,
  updateAuthorDetailsResponse,
} from "@/app/utils/interfaces/types";
import { useState, useEffect } from "react";

export const useFetchAuthor = (email?: string) => {
  const [authorDetails, setAuthorDetails] = useState<AuthorDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string | null>(null);

  // Fetch token once when component mounts
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      window.location.href = "/AuthorDashboard/Auth";
    } else {
      setToken(storedToken);
    }
  }, []);

  // Fetch author details only when token is available
  useEffect(() => {
    if (token) {
      fetchAuthorDetails(token);
    }
  }, [token]);

  const fetchAuthorDetails = async (jwtToken: string) => {
    try {
      const response = await fetch(
        "https://secure.manuscriptedit.com/api/author_details_jwt.php",
        {
          method: "GET",
          cache: "no-store",
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch author details");
      }

      const data = await response.json();

      if (data && data.length > 0) {
        setAuthorDetails(data[0]);
      } else {
        setAuthorDetails(null);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const updateAuthorDetails = async (data: any) => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://secure.manuscriptedit.com/api/update_user_details.php",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const response: updateAuthorDetailsResponse[] = await res.json();

     

      // Re-fetch author details after update
      if (response[0].status && token) {
        fetchAuthorDetails(token);
      }
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { authorDetails, error, loading, updateAuthorDetails };
};
