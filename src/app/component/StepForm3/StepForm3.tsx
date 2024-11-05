import { useState } from 'react';

const StepForm3 = () => {
    const [formData, setFormData] = useState({
        billingName: '',
        billingAddress1: '',
        billingAddress2: '',
        phone: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
    });

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
                <input type="text" id="billingName" name="billingName" value={formData.billingName} onChange={handleChange} className="input" required />

                <label htmlFor="billingAddress1">Billing Address1 *</label>
                <input type="text" id="billingAddress1" name="billingAddress1" value={formData.billingAddress1} onChange={handleChange} className="input" required />

                <label htmlFor="billingAddress2">Billing Address2</label>
                <input type="text" id="billingAddress2" name="billingAddress2" value={formData.billingAddress2} onChange={handleChange} className="input" />

                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="input" />

                <label htmlFor="city">City *</label>
                <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="input" required />

                <label htmlFor="state">State</label>
                <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} className="input" />

                <label htmlFor="zipCode">Zip Code *</label>
                <input type="text" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} className="input" required />

                <label htmlFor="country">Country *</label>
                <select id="country" name="country" value={formData.country} onChange={handleChange} className="input" required>
                    <option value="">-- Select --</option>
                    <option value="USA">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">United Kingdom</option>
                    {/* Add more options as needed */}
                </select>

                <div className="button-group">
                    <button type="button" className="prev-btn">Previous</button>
                    <button type="submit" className="next-btn">Next</button>
                </div>
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
