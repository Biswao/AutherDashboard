"use client"

import { LoginResponse, UseAuthReturn } from '@/app/utils/interfaces/types';
import { useState } from 'react';

const useSignin = (): UseAuthReturn => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const login = async (email: string, password: string): Promise<void> => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('https://www.secure.manuscriptedit.com/api/author_signin.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, pswd: password })
            });

            const data: LoginResponse = await response.json();

            console.log({data})

            if (data.success) {
                // Handle success (store token, redirect, etc.)
                console.log("Login successful:", data.token);
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return { login, loading, error };
};

export default useSignin;