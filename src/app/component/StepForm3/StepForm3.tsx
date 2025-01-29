import { SubmitManuscriptContext } from '@/app/context/SubmitManuscriptContext';
import useManuscript from '@/app/hooks/authorDashboard/useManuscript';
import { useContext, useEffect, useState } from 'react';

const StepForm3 = ({setCheck, setButton}: any) => {
    const { countryList, error, loading} = useManuscript()
    const { formDataThree, setFormDataThree, setFinalCheck,totalPrice,setTotalPrice } = useContext(SubmitManuscriptContext)

    useEffect(() => {
        setButton(true)
        
    },[])
    // console.log({totalPrice})
    useEffect(() => {
        if(formDataThree.bill_name && formDataThree.bill_addr1 && formDataThree.bill_city && formDataThree.bill_zip && formDataThree.bill_country){
            setCheck(true)
            setFinalCheck(true)
        }else{
            setCheck(false)
        }
    },[formDataThree])

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormDataThree({
            ...formDataThree,
            [name]: value
        });
        
    };

    return (
        <div className="container">
            <h2>Payment Details</h2>
            <h3>Your Discounts</h3>
            <p>No discount coupon available</p>

            <h3>Please fill your billing details</h3>
            <p>If billing details are the same as your personal details please <a href="#">(Click) here</a>!</p>

            <form onSubmit={() => {}}>
                <label htmlFor="billingName">Billing Name *</label>
                <input type="text" id="billingName" name="bill_name" value={formDataThree.bill_name} onChange={handleChange} className="input" required />

                <label htmlFor="billingAddress1">Billing Address1 *</label>
                <input type="text" id="billingAddress1" name="bill_addr1" value={formDataThree.bill_addr1} onChange={handleChange} className="input" required />

                <label htmlFor="billingAddress2">Billing Address2</label>
                <input type="text" id="billingAddress2" name="bill_addr2" value={formDataThree.bill_addr2} onChange={handleChange} className="input" />

                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="bill_phone" value={formDataThree.bill_phone} onChange={handleChange} className="input" />

                <label htmlFor="city">City *</label>
                <input type="text" id="city" name="bill_city" value={formDataThree.bill_city} onChange={handleChange} className="input" required />

                <label htmlFor="state">State</label>
                <input type="text" id="state" name="bill_state" value={formDataThree.bill_state} onChange={handleChange} className="input" />

                <label htmlFor="zipCode">Zip Code *</label>
                <input type="text" id="zipCode" name="bill_zip" value={formDataThree.bill_zip} onChange={handleChange} className="input" required />

                <label htmlFor="country">Country *</label>
                <select id="country" name="bill_country" value={formDataThree.bill_country} onChange={handleChange} className="input" required>
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
