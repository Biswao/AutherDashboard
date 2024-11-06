"use client"

import { SignupData, SignupResponse } from '@/app/utils/interfaces/types';
import { useState } from 'react';

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<SignupResponse | null>(null);

  const signup = async (signupData: SignupData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://www.secure.manuscriptedit.com/api/author_signup.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      const result: SignupResponse = await response.json();
      setData(result);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error, data };
};