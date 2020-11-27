import React, { useState } from 'react'
import {
    TableCell,
    Table,
    Paper,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    TableBody,
    Button,
    CircularProgress
} from '@material-ui/core'
import { fetchManufacturersAvailability } from '../utils/apiRequests'

const DataTable = ({ columns, data }) => {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [availability, setAvailability] = useState({ loading: false, id: '', status: null })

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const showAvailability = async (id, manufacturer) => {
        setAvailability(prevState => ({ ...prevState, id: id }))
        const fetchedManufacturerData = await fetchManufacturersAvailability(manufacturer, id, setAvailability)
        return fetchedManufacturerData
    }


    return (
        <Paper>
            <TableContainer style={{ maxHeight: '82vh' }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columns.map((column, index) => (
                                <TableCell
                                    key={index}
                                    align={'center'}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((dataObj) => (
                            <TableRow hover tabIndex={-1} key={dataObj.id}>
                                {columns.map((column, index) => (
                                    <TableCell
                                        key={index}
                                        align={'center'}
                                    >
                                        {dataObj[column.label.charAt(0).toLowerCase() + column.label.slice(1)]}
                                        {column.label === 'Availability' && !availability.loading && !availability.status && (
                                            <Button
                                                variant='outlined'
                                                color='primary'
                                                onClick={() => showAvailability(dataObj.id, dataObj.manufacturer)}>
                                                Availability
                                            </Button>
                                        )}
                                        {column.label === 'Availability' && availability.loading && !availability.status && availability.id === dataObj.id && (
                                            <CircularProgress />
                                        )}
                                        {column.label === 'Availability' && availability.loading && availability.status && availability.id === dataObj.id && (
                                            <CircularProgress />
                                        )}
                                        {column.label === 'Availability' && availability.loading && !availability.status && availability.id !== dataObj.id && (
                                            <Button
                                                disabled
                                                variant='outlined'
                                                color='primary'
                                                onClick={() => showAvailability(dataObj.id, dataObj.manufacturer)}>
                                                Availability
                                            </Button>
                                        )}
                                        {column.label === 'Availability' && !availability.loading && availability.status && availability.id === dataObj.id && (
                                            <p>{availability.status}</p>
                                        )}
                                        {column.label === 'Availability' && !availability.loading && availability.status && availability.id !== dataObj.id && (
                                            <Button
                                                variant='outlined'
                                                color='primary'
                                                onClick={() => showAvailability(dataObj.id, dataObj.manufacturer)}>
                                                Availability
                                            </Button>
                                        )}
                                        {column.label === 'Availability' && availability.loading && availability.status && availability.id !== dataObj.id && (
                                            <Button
                                                disabled
                                                variant='outlined'
                                                color='primary'
                                                onClick={() => showAvailability(dataObj.id, dataObj.manufacturer)}>
                                                Availability
                                            </Button>
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 50, 100, 200]}
                component='div'
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                style={{ border: 'solid lightgray 1px' }}
            />
        </Paper>
    )
}
export default DataTable