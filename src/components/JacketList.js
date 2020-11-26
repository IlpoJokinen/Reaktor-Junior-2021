import React, { useEffect, useState } from 'react'
import { Paper } from '@material-ui/core'
import DataTable from './DataTable'

const JacketList = () => {
    const [jackets, setJackets] = useState([])
    const columns = [
        {
            minWidth: 100,
            label: 'Id',
            dataKey: 'id'
        },
        {
            minWidth: 200,
            label: 'Name',
            dataKey: 'name'
        },
        {
            minWidth: 200,
            label: 'Color',
            dataKey: 'color'
        },
        {
            minWidth: 100,
            label: 'Price',
            dataKey: 'price',
            numeric: true
        },
        {
            minWidth: 100,
            label: 'Manufacturer',
            dataKey: 'manufacturer'
        }
    ]

    const fetchJackets = () => {
        fetch('https://bad-api-assignment.reaktor.com/products/jackets')
            .then(response => response.json())
            .then(data => setJackets(data))
    }

    useEffect(() => {
        fetchJackets()
    }, [])

    //console.log(jackets)

    return (
        <Paper style={{ height: '100%', width: '100%' }}>
            <DataTable columns={columns} data={jackets} />
        </Paper>
    )
}
export default JacketList