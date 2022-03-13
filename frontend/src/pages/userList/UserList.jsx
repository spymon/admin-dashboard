import './userList.css'
import { DataGrid } from '@mui/x-data-grid'
import { userRows } from '../../dummyData'
import { Delete } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserList = () => {
  const [userRowData, setUserRowData] = useState(userRows)

  const handleDelete = id => {
    setUserRowData(userRowData.filter(DeletedRow => DeletedRow.id !== id))
  }

  const userColumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: params => {
        return (
          <div className="userListUser">
            <img
              className="userListUserImg"
              src={params.row.avatar}
              alt="avatar"
            />
            {params.row.username}
          </div>
        )
      },
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'string',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: params => {
        return (
          <>
            <Link to={`/users/${params.row.id}`}>
              <button className="userListEdit">Edit</button>
            </Link>

            <Delete
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]

  return (
    <div className="userList">
      <DataGrid
        rows={userRowData}
        columns={userColumns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default UserList
