import './productList.css'
import { DataGrid } from '@mui/x-data-grid'
import { productRows } from '../../dummyData'
import { Delete } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ProductList = () => {
  const [productRowData, setUserRowData] = useState(productRows)

  const handleDelete = id => {
    setUserRowData(productRowData.filter(DeletedRow => DeletedRow.id !== id))
  }

  const productColumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: params => {
        return (
          <div className="productListItem">
            <img
              className="productListItemImg"
              src={params.row.image}
              alt="product"
            />
            {params.row.name}
          </div>
        )
      },
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: params => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <button className="productListEdit">Edit</button>
            </Link>

            <Delete
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]
  return (
    <div className="productList">
      <DataGrid
        rows={productRowData}
        columns={productColumns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default ProductList
