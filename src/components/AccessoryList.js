import React, { useEffect, useState } from 'react'
import { Paper } from '@material-ui/core'
import DataTable from './DataTable'
import { fetchAccessories } from '../utils/apiRequests'
import { columns } from '../utils/columns'

const AccessoryList = () => {
    const [accessories, setAccessories] = useState([])

    useEffect(() => {
        fetchAccessories(setAccessories)
    }, [])
    const accessoriesMan = accessories.map(acc => acc.manufacturer)
    const uniqueMan = [...new Set(accessoriesMan)]
    console.log(uniqueMan)
    /*const repsAccessories = accessories.filter((acc) => acc.manufacturer === 'reps')
    const yes = repsAccessories.find((acc) => acc.id = '745ef3b7b4a6a0caf532b6')
    console.log(yes)*/
    return (
        <Paper>
            <DataTable columns={columns} data={accessories} />
        </Paper>
    )
}
export default AccessoryList