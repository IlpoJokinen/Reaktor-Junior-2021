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
} from '@material-ui/core'
import AvailabilityButton from './AvailabiltyButton'

const DataTable = ({ columns, data }) => {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
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
                                        <AvailabilityButton
                                            label={column.label}
                                            productId={dataObj.id}
                                            manufacturer={dataObj.manufacturer}
                                        />
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