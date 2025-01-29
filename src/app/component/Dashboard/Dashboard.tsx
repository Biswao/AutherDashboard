"use client"
import { OrderDetails, SidebarProps } from "@/app/utils/interfaces/types"
import Table from "../Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faFileInvoice, faFileSignature } from "@fortawesome/free-solid-svg-icons";
import useFetchOrder from "@/app/hooks/authorDashboard/useFetchOrder";
import { useContext, useEffect, useState } from "react";
import "./Dashboard.css"
import { MainContext } from "@/app/context/MainContext";
import ImageSlider from "../ImageSlider/ImageSlider";
import { useRouter } from 'next/navigation'


export const Dashboard = () => {
    const [tableData, setTableData] = useState<(string | React.ReactNode)[][]>([])

    const userId: string | null = typeof window !== 'undefined' ? localStorage.getItem("user_id") : null
    const {fetchOrder,error,loading}:{fetchOrder: OrderDetails[] | null, error: boolean, loading: boolean} = useFetchOrder(userId)
    const { active, setActive } = useContext(MainContext)
    const router = useRouter()

    useEffect(() => {
      if(fetchOrder && fetchOrder.length){
        const table_data: (string | React.ReactNode)[][] = fetchOrder.map((order:OrderDetails) => {
          const arr = []
          
          arr.push(order.order_id)
          arr.push(order.service_type)
          arr.push(order.submit_date)
          arr.push(order.delivery_date)
          arr.push(order.status)
          arr.push(order.total_price)
          arr.push(<button className="PaynOwww" onClick={()=> console.log('hii')}>Pay Now</button>)
          

          return arr
        })
        setTableData(table_data)
      }
    },[fetchOrder])

    const headers: string[] = ['Order Id', 'Service Type', 'Submit Date', 'Delivery Date', 'Payment Status','price'  , 'Pay Now'];
    const data: (string | React.ReactNode)[][] = tableData;
    return (

      <>
        <div style={{ margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif' }} className="">
          {/* Header Buttons */}
          <div className="row justify-content-around" style={{ paddingTop: '40px' }}>
            {/* Submit New Manuscript Button */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <button
                className="btn w-100 d-flex align-items-center justify-content-center"
                style={{ backgroundColor: '#688bb2', borderRadius: '15px', color: '#fff', padding: '22px' }}
                onClick={() => router.push('/ManuscriptSubmit')}
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
                onClick={() => router.push('/QuotationRequest')}
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
                onClick={() => router.push('/QuotationRequest')}
              >
                <FontAwesomeIcon icon={faFileSignature} style={{ marginRight: '10px' }} />
                Request A Sample !
              </button>
            </div>
          </div>


          {/* Testimonials and Discounts */}
          <div className="row mt-4" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
            <div className="col-md-8">
              {/* <div className="card testiHeight p-3" style={{ height: '191px', justifyContent: 'center', lineHeight: '33px' }}> */}
              <h5 style={{ marginBottom: '20px',fontWeight:'bold' }}>Author Testimonials</h5>
               
                <ImageSlider />
              {/* </div> */}
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
          <Table mainHeader="Your Available Orders" headers={headers} data={data} emptyMessage={loading ? "Loading Orders..." :"No Order Avilable"} />
        </div>
    </>


  )
}