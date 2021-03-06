import React, { useEffect, useState } from 'react'
import { Paper } from '@material-ui/core'
import DataTable from './DataTable'
import { fetchJackets } from '../utils/apiRequests'
import { columns } from '../utils/columns'

const JacketList = () => {
    const [jackets, setJackets] = useState([])

    useEffect(() => {
        fetchJackets(setJackets)
    }, [])

    return (
        <Paper>
            <DataTable columns={columns} data={jackets} />
        </Paper>
    )
}
export default JacketList