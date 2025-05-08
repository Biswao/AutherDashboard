"use client"
import { useState } from 'react';
import { toast } from 'react-toastify';

const useEmail = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const acceptNewsLetter = (body:any) => {
        setIsLoading(true);
        setError(null);

        try {
            fetch('https://www.manuscriptedit.com/api/subscribe.php',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            }).then(response => {
                return response.json()
            }).then(responseData => {
                const [{Status,message}] = responseData
                if(Status){
                    toast.success("Your email has been successfully registered")
                }else{
                    toast.error("Your mail cannot be registered")
                }
            }).catch(err => {
                setError("Your mail cannot be registered");
                toast.error("Your mail cannot be registered")
            }).finally(() => {
                setIsLoading(false);
            })
        } catch (error) {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        error,
        acceptNewsLetter
    }
}

export default useEmail