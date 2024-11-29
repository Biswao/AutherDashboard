"use client"

import { LoginResponse, UseAuthReturn } from '@/app/utils/interfaces/types';
import { useState } from 'react';
import { useRouter } from 'next/navigation'

const useSignin = (): UseAuthReturn => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter()

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

            const data: LoginResponse[] = await response.json();


            if (data[0] && data[0].Message === "Login Successfully") {
                localStorage.setItem('email',email)
                localStorage.setItem("user_id",data[0].user_id || "")
                router.push('/');
            } else {
                setError(data[0].Message || 'Login failed');
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