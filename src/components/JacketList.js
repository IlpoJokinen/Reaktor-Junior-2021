import React, { useEffect, useState } from 'react'
import { Grid, Paper } from '@material-ui/core'
import VirtualizedTable from './VirtualizedTable'

const JacketList = () => {
    const [jackets, setJackets] = useState([])
    const tableRows = []
    const columns = [
        {
            width: 100,
            label: 'Id',
            dataKey: 'id'
        },
        {
            width: 200,
            label: 'Name',
            dataKey: 'name'
        },
        {
            width: 200,
            label: 'Color',
            dataKey: 'color'
        },
        {
            width: 100,
            label: 'Price',
            dataKey: 'price',
            numeric: true
        },
        {
            width: 100,
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
        //createData
    }, [])

    console.log(jackets)


    /*const createData = (id, color, manufacturer, name, price) => {
        return { id, color, manufacturer, name, price }
    }

    const formattedObjects = jackets.map((jacket, index) => {
        const object = Object.assign({})
        return tableRows.push(createData(index, ...jacket))
    })*/

    //console.log(tableRows)

    return (
        <Paper style={{ height: '100%', width: '100%' }}>
            <VirtualizedTable
                rowCount={jackets.length}
                rowGetter={({ index }) => jackets[index]}
                columns={columns}
            />
        </Paper>
    )
}
export default JacketList