import React, { useState } from 'react'
import { Button, IconButton, CircularProgress, Grid } from '@material-ui/core'
import { fetchManufacturersAvailability } from '../utils/apiRequests'
import RefreshIcon from '@material-ui/icons/Refresh';

const AvailabilityButton = ({ label, productId, manufacturer, setErrorMsg }) => {
    const [availability, setAvailability] = useState({ loading: false, id: '', status: null, error: null })

    const showAvailability = async (id, manufacturer) => {
        setAvailability(prevState => ({ ...prevState, id: id, error: null }))
        const fetchedManufacturerData = await fetchManufacturersAvailability(manufacturer, id, setAvailability)
        return fetchedManufacturerData
    }

    return (
        <Grid container>
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
                    <p>{availability.status}</p>
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
                            <IconButton>
                                <RefreshIcon onClick={() => showAvailability(productId, manufacturer)} />
                            </IconButton>
                        </Grid>
                    </Grid>
                )
            }
        </Grid>
    )
}
export default AvailabilityButton