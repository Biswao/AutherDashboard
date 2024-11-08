import { CountryCodeApiResponse } from '@/app/utils/interfaces/types';
import { useState, useEffect } from 'react';

export const useFetchCountryCode = (email?: string) => {
  const [countryCode, setCountryCode] = useState<CountryCodeApiResponse[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const response = await fetch(`https://www.secure.manuscriptedit.com/api/get_all_country_list.php`);
        if (!response.ok) {
          throw new Error('Failed to fetch author details');
        }

        const data = await response.json();
        if (data && data.length > 0) {
            setCountryCode(data);
        } else {
            setCountryCode(null);
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryCode();
  }, []);

  return { countryCode, error, loading };
};