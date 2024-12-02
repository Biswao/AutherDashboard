import useManuscript from '@/app/hooks/authorDashboard/useManuscript';
import { useEffect, useState } from 'react';

const StepForm3 = ({setCheck}: any) => {
    const [formData, setFormData] = useState({
        bill_name: '',
        bill_addr1: '',
        bill_addr2: '',
        bill_phone: '',
        bill_city: '',
        bill_state: '',
        bill_zip: '',
        bill_country: ''
    });

    const { countryList, error, loading } = useManuscript()

    useEffect(() => {
        if(formData.bill_name){
            setCheck(true)
        }else{
            setCheck(false)
        }
    },[formData])

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
    };

    return (
        <div className="container">
            <h2>Payment Details</h2>
            <h3>Your Discounts</h3>
            <p>No discount coupon available</p>

            <h3>Please fill your billing details</h3>
            <p>If billing details are the same as your personal details please <a href="#">(Click) here</a>!</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="billingName">Billing Name *</label>
                <input type="text" id="billingName" name="bill_name" value={formData.bill_name} onChange={handleChange} className="input" required />

                <label htmlFor="billingAddress1">Billing Address1 *</label>
                <input type="text" id="billingAddress1" name="bill_addr1" value={formData.bill_addr1} onChange={handleChange} className="input" required />

                <label htmlFor="billingAddress2">Billing Address2</label>
                <input type="text" id="billingAddress2" name="bill_addr2" value={formData.bill_addr2} onChange={handleChange} className="input" />

                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="bill_phone" value={formData.bill_phone} onChange={handleChange} className="input" />

                <label htmlFor="city">City *</label>
                <input type="text" id="city" name="bill_city" value={formData.bill_city} onChange={handleChange} className="input" required />

                <label htmlFor="state">State</label>
                <input type="text" id="state" name="bill_state" value={formData.bill_state} onChange={handleChange} className="input" />

                <label htmlFor="zipCode">Zip Code *</label>
                <input type="text" id="zipCode" name="bill_zip" value={formData.bill_zip} onChange={handleChange} className="input" required />

                <label htmlFor="country">Country *</label>
                <select id="country" name="bill_country" value={formData.bill_country} onChange={handleChange} className="input" required>
                    <option value="">-- Select --</option>
                    {
                        countryList && countryList.length && countryList.map(country => {
                            return (
                                <option value={country.id}>{country.country}</option>
                            )
                        })
                    }
                    {/* Add more options as needed */}
                </select>
            </form>

            <style jsx>{`
                .container {
                    max-width: 600px;
                    background-color: #ffffff;
                    border: 1px solid #dee2e6;
                    padding: 20px;
                    border-radius: 4px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h2 {
                    color: #dc3545;
                    font-size: 1.25rem;
                    margin-bottom: 15px;
                }
                h3 {
                    font-size: 1rem;
                    margin-top: 15px;
                }
                label {
                    font-weight: bold;
                    display: block;
                    margin-top: 15px;
                    margin-bottom: 5px;
                }
                .input {
                    width: 100%;
                    padding: 8px;
                    margin-top: 5px;
                    border: 1px solid #ced4da;
                    border-radius: 4px;
                }
                select.input {
                    height: 38px;
                }
                .button-group {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 20px;
                }
                .prev-btn,
                .next-btn {
                    background-color: #28a745;
                    color: #fff;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 4px;
                    font-size: 1rem;
                    cursor: pointer;
                }
                .prev-btn:hover,
                .next-btn:hover {
                    background-color: #218838;
                }
                a {
                    color: #dc3545;
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
};

export default StepForm3;
