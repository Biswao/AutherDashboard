"use client"
import Sidebar from "@/app/component/Sidebar/Sidebar";
import "./Coupon.css";
import Table from "@/app/component/Table/Table";

const Coupon = () => {

    const headers: string[] = ['Coupon Type', 'Coupon ID', 'Discount'];
    const data: string[][] = [];

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <Table mainHeader="Your available discount coupons" headers={headers} data={data} emptyMessage="No Discounts Available " />
                    </div>

                    <div className="col-lg-4">
                        <div className="info-card">
                            <div className="info-card-header">
                                <span className="info-icon">i</span>
                                <h5>More information about discount coupons</h5>
                            </div>
                            <p>Manuscriptedit.com awards coupons for colleague referrals and for new registration. Coupons are only available for use on documents submitted for editing. Coupons may be combined for use towards a single submission or towards any future submission for editing as they do not expire.</p>
                        </div>


                        <div className="info-card" style={{ marginTop: "30px" }}>
                            <div className="info-card-header">
                                <span className="info-icon">i</span>
                                <h5>Avail Discounts</h5>
                            </div>
                            <p>We offer discount programs on our services to organizations, universities, institutions, and authors. We are already working with several universities and institutions to provide our premier services for their faculty and researchers at discounted rates. Please contact us if you would like to enjoy a similar discount agreement with Manuscriptedit on your writing and editing needs.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>



    );
};

export default Coupon;
