import { OrderDetails } from '@/app/utils/interfaces/types';
import { useEffect, useState } from 'react';

const useFetchOrder = (email?: string) => {
    const [fetchOrder, setFetchOrder] = useState<OrderDetails[] | null>(null);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        const fetchOrderToTable = async () => {
            try {
                const orderData = await fetch(`https://www.secure.manuscriptedit.com/api/get_order_details_by_user.php?user_id=USER17145`);
                if (!orderData.ok) {
                    throw new Error('Order Fetching Failed.')
                }
                const dataRcvd = await orderData.json();
                if (dataRcvd && dataRcvd.length > 0) {
                    setFetchOrder(dataRcvd);
                } else {
                    setFetchOrder(null);
                }
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchOrderToTable();
    }, [email])


    return {fetchOrder,error,loading}
}

export default useFetchOrder
