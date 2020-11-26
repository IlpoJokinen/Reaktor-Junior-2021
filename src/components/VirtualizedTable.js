import React from 'react'
import { TableCell } from '@material-ui/core'
import { AutoSizer, Column, Table } from 'react-virtualized'

const VirtualizedTable = ({ columns, rowCount, rowGetter }) => {
    const rowHeight = 48
    const headerHeight = 48
    console.log('rowCount', rowCount, 'rowGetter', rowGetter)
    const cellRendered = ({ cellData, columnIndex }) => {

        return (
            <TableCell
                component='div'
                variant='body'
                style={{ height: rowHeight }}
                align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
            >
                {cellData}
            </TableCell>
        )
    }

    const headerRendered = ({ label, columnIndex }) => {

        return (
            <TableCell
                component='div'
                variant='head'
                style={{ height: headerHeight }}
                align={columns[columnIndex].numeric || false ? 'right' : 'left'}
            >
                <span>{label}</span>
            </TableCell>
        )
    }

    return (
        <AutoSizer>
            {({ height, width }) => (
                <Table
                    height={height}
                    width={width}
                    rowCount={rowCount}
                    rowGetter={rowGetter}
                    rowHeight={rowHeight}
                >
                    {columns.map(({ dataKey, ...other }, index) => {
                        return (
                            <Column
                                key={dataKey}
                                headerRenderer={(headerProps) =>
                                    headerRendered({
                                        ...headerProps,
                                        columnIndex: index
                                    })
                                }
                                cellRenderer={cellRendered}
                                dataKey={dataKey}
                                {...other}
                            />
                        )
                    })}
                </Table>
            )}
        </AutoSizer>
    )
}
export default VirtualizedTable