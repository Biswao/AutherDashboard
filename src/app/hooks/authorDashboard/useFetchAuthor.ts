import { AuthorDetails } from '@/app/utils/interfaces/types';
import { useState, useEffect } from 'react';

export const useFetchAuthor = (email?: string) => {
  const [authorDetails, setAuthorDetails] = useState<AuthorDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchAuthorDetails();
  }, [email]);



  const fetchAuthorDetails = async () => {
    try {
      const response = await fetch(`https://www.secure.manuscriptedit.com/api/author_details.php?email_id=${email}`);
      if (!response.ok) {
        throw new Error('Failed to fetch author details');
      }
 
      const data = await response.json();
      if (data && data.length > 0) {
        setAuthorDetails(data[0]);
      } else {
        setAuthorDetails(null);
      }
    }  catch (err) { 
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { authorDetails, error, loading };
};