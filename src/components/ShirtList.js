import React, { useEffect, useState } from 'react'
import { Paper } from '@material-ui/core'
import DataTable from './DataTable'
import { fetchShirts } from '../utils/apiRequests'
import { columns } from '../utils/columns'

const ShirtList = () => {
    const [shirts, setShirts] = useState([])

    useEffect(() => {
        fetchShirts(setShirts)
    }, [])

    return (
        <Paper>
            <DataTable columns={columns} data={shirts} />
        </Paper>
    )
}
export default ShirtList