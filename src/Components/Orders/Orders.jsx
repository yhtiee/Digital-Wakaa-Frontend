import React, { useContext, useEffect } from 'react'
import "./orders.css"
import { DataGrid } from '@mui/x-data-grid';
import OrderContext from '../../Context API/OrdersContext';

const Orders = () => {

  let {orders} = useContext(OrderContext)
  let {getAllOrders} = useContext(OrderContext)

  useEffect(() => {
    getAllOrders()
  }, [])

  console.log(orders)

  const columns = [
    { field: 'service', headerName: 'Service', width: 400 },
    { field: 'cost', headerName: 'Cost', type: 'number',  width: 150 },
    { field: 'status', headerName: 'Status', type: 'number',  width: 150 },
    { field: 'date', headerName: 'Date', width: 150 },
  ];

  const rows = orders

  return (
    <div className="orders__wrapper">
      <h2>Orders</h2>
      <div className="orders__container">
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            sx={{"& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#0288D1",
              color: "white",
              }, 
              "& .MuiDataGrid-footerContainer": {
              backgroundColor: "whitesmoke",
              color: "white",
              },
              "& .MuiDataGrid-cell": {
              cursor : "pointer",
              },
              }}
          />
        </div>
      </div>
    </div>
  )
}

export default Orders