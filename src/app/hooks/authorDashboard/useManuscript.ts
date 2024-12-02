"use client"

import { countryListType } from "@/app/utils/interfaces/types";
import { useEffect, useState } from "react";

const useManuscript = () => {
    const [countryList, setCountryList] = useState<countryListType[]>([]);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchCountryList()
    },[])


    const fetchCountryList = async() => {
        try {
            const countryData = await fetch(`https://www.secure.manuscriptedit.com/api/get_all_country_list.php`);
            if (!countryData.ok) {
                throw new Error('Order Fetching Failed.')
            }
            const dataRcvd = await countryData.json();
            if (dataRcvd && dataRcvd.length > 0) {
                setCountryList(dataRcvd);
            } else {
                setCountryList([]);
            }
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    return {countryList,error,loading}
}

export default useManuscript