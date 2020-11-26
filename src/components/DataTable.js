import React, { useState } from 'react'
import {
    TableCell,
    Table,
    Paper,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    TableBody
} from '@material-ui/core'

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
    const dataNames = data.map(dataObj => dataObj.name)

    return (
        <Paper>
            <TableContainer>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columns.map((column, index) => (
                                <TableCell
                                    key={index}
                                    align={'center'}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((dataObj) => {
                            console.log(dataObj)
                            return (
                                <TableRow hover tabIndex={-1} key={dataObj.id}>
                                    {columns.map((column, index) => {
                                        //console.log(column.label)
                                        //console.log(dataObj[column.label.charAt(0).toLowerCase() + column.label.slice(1)])
                                        return (
                                            <TableCell
                                                key={index}
                                                align={'center'}
                                            >
                                                {dataObj[column.label.charAt(0).toLowerCase() + column.label.slice(1)]}
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            )
                        })}
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
            />
        </Paper>
    )
}
export default DataTable