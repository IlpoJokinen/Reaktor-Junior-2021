import React, { useState } from 'react'
import { Button, IconButton, CircularProgress, Grid } from '@material-ui/core'
import { fetchManufacturersAvailability } from '../utils/apiRequests'
import { Refresh, CancelOutlined, CheckCircleOutlined } from '@material-ui/icons';

const AvailabilityButton = ({ label, productId, manufacturer }) => {
    const [availability, setAvailability] = useState({ loading: false, id: '', status: null, error: null })

    const showAvailability = async (id, manufacturer) => {
        setAvailability(prevState => ({ ...prevState, id: id, error: null }))
        const fetchedManufacturerData = await fetchManufacturersAvailability(manufacturer, id, setAvailability)
        return fetchedManufacturerData
    }

    return (
        <Grid container direction='row' justify='center'>
            {
                label === 'Availability' && !availability.loading && !availability.status && !availability.error && (
                    <Button
                        variant='outlined'
                        color='primary'
                        onClick={() => showAvailability(productId, manufacturer)}>
                        Availability
                    </Button>
                )
            }
            {
                label === 'Availability' && availability.loading && !availability.status && availability.id === productId && (
                    <CircularProgress />
                )
            }
            {
                label === 'Availability' && availability.loading && availability.status && availability.id === productId && (
                    <CircularProgress />
                )
            }
            {
                label === 'Availability' && availability.loading && !availability.status && availability.id !== productId && (
                    <Button
                        disabled
                        variant='outlined'
                        color='primary'
                        onClick={() => showAvailability(productId, manufacturer)}>
                        Availability
                    </Button>
                )
            }
            {
                label === 'Availability' && !availability.loading && availability.status && availability.id === productId && (
                    <Grid item container justify='center' alignItems='center' spacing={1}>
                        <Grid item>
                            <p>{availability.status}</p>
                        </Grid>
                        {availability.status !== 'OUTOFSTOCK' ? (
                            <Grid item>
                                <CheckCircleOutlined color='action' />
                            </Grid>
                        ) :
                            <Grid item>
                                <CancelOutlined color='error' />
                            </Grid>
                        }
                    </Grid>
                )
            }
            {
                label === 'Availability' && !availability.loading && availability.status && availability.id !== productId && (
                    <Button
                        variant='outlined'
                        color='primary'
                        onClick={() => showAvailability(productId, manufacturer)}>
                        Availability
                    </Button>
                )
            }
            {
                label === 'Availability' && availability.loading && availability.status && availability.id !== productId && (
                    <Button
                        disabled
                        variant='outlined'
                        color='primary'
                        onClick={() => showAvailability(productId, manufacturer)}>
                        Availability
                    </Button>
                )
            }
            {
                label === 'Availability' && availability.error && availability.id === productId && (
                    <Grid item container direction='row'>
                        <Grid item><p style={{ color: 'red' }}>Request failed, try again</p></Grid>
                        <Grid item>
                            <IconButton onClick={() => showAvailability(productId, manufacturer)} >
                                <Refresh />
                            </IconButton>
                        </Grid>
                    </Grid>
                )
            }
        </Grid>
    )
}
export default AvailabilityButton