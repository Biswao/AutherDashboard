"use client"

import { LoginResponse, UseAuthReturn, UserInteraction, UserInteractionResponse } from '@/app/utils/interfaces/types';
import { useState } from 'react';

const usePostTalkExpert = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const talkToExpert = async(body:UserInteraction) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('https://www.secure.manuscriptedit.com/api/talk_to_an_expert.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            const data: UserInteractionResponse[] = await response.json();

            if (data[0] && data[0].status) {
                setError(null)
            } else {
                setError(data[0].msg || 'Something went wrong');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    return { talkToExpert, loading, error };
}

export default usePostTalkExpert