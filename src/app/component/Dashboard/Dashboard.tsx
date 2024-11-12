"use client"
import { SidebarProps } from "@/app/utils/interfaces/types"
import Table from "../Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faFileInvoice, faFileSignature } from "@fortawesome/free-solid-svg-icons";
import useFetchOrder from "@/app/hooks/authorDashboard/useFetchOrder";
import { useEffect, useState } from "react";


export const Dashboard = () => {
    const [tableData, setTableData] = useState([])
    const {fetchOrder,error,loading}:any = useFetchOrder()
console.log({fetchOrder})
    useEffect(() => {
      if(fetchOrder && fetchOrder.length){
        let table_data = fetchOrder.map((order:any) => {
          let arr = []
          arr.push(order.order_id)
          arr.push(order.service_type)
          arr.push(order.submit_date)
          arr.push(order.delivery_date)
          arr.push(order.status)

          return arr
        })
        setTableData(table_data)
      }
    },[fetchOrder])

    const headers: string[] = ['Order Id', 'Service Type', 'Submit Date', 'Delivery Date', 'Payment Status'];
    const data: string[][] = tableData;
    return (
        <div style={{ margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif' }} className="">
          {/* Header Buttons */}
          <div className="row justify-content-around" style={{ paddingTop: '40px' }}>
            {/* Submit New Manuscript Button */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <button
                className="btn w-100 d-flex align-items-center justify-content-center"
                style={{ backgroundColor: '#688bb2', borderRadius: '15px', color: '#fff', padding: '22px' }}
              >
                <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: '10px' }} />
                Submit New Manuscript !
              </button>
            </div>

            {/* Request A Quote Button */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <button
                className="btn w-100 d-flex align-items-center justify-content-center"
                style={{ backgroundColor: '#c7715d', borderRadius: '15px', color: '#fff', padding: '22px' }}
              >
                <FontAwesomeIcon icon={faFileInvoice} style={{ marginRight: '10px' }} />
                Request A Quote !
              </button>
            </div>

            {/* Request A Sample Button */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <button
                className="btn w-100 d-flex align-items-center justify-content-center"
                style={{ backgroundColor: '#84a96a', borderRadius: '15px', color: '#fff', padding: '22px' }}
              >
                <FontAwesomeIcon icon={faFileSignature} style={{ marginRight: '10px' }} />
                Request A Sample !
              </button>
            </div>
          </div>


          {/* Testimonials and Discounts */}
          <div className="row mt-4" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
            <div className="col-md-8">
              <div className="card testiHeight p-3" style={{ height: '191px', justifyContent: 'center', lineHeight: '33px' }}>
                <h5 style={{ marginBottom: '20px' }}>Author Testimonials</h5>
                <div className="d-flex">
                  <div className="me-3" style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src="/assets/images/user.png"
                      alt="Author"
                      className="rounded-circle"
                      width="90"
                      height="90"
                    />
                  </div>
                  <div>
                    <p>
                      We are very thankful to you for your help in improving our
                      manuscript! Without your help, we could not have published
                      our reviews. Please accept sincere gratitude from all the
                      authors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3">
                <h5>Discount/Referral Code</h5>
                <input
                  type="text"
                  placeholder="Enter Code"
                  className="form-control mb-2"
                />
                <button className="btn btn-success w-100">Apply</button>
              </div>
              <div className="mt-2">
                <button className="btn btn-secondary w-100">View All Offers & Discounts</button>
              </div>
            </div>
          </div>

        {/* Orders Table */}
        <Table mainHeader="Your Available Orders" headers={headers} data={data} emptyMessage="No Order Avilable"/>
      </div>
    )
}