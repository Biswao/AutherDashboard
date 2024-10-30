import Sidebar from "@/app/component/Sidebar/Sidebar";
import Table from "@/app/component/Table/Table";



const SubmitOrders = () => {
    const headers: string[] = ['Orders Id', 'Service Type', 'Submit Date', 'Delivery Date'];
    const data: string[][] = [];
    return (

        <Sidebar>
            <Table mainHeader="Your Orders" headers={headers} data={data} emptyMessage="No orders Avilable"/>
        </Sidebar>

    )
}

export default SubmitOrders;