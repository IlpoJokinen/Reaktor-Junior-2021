import React, { useState } from 'react'
import { Button, CircularProgress, Grid } from '@material-ui/core'
import { fetchManufacturersAvailability } from '../utils/apiRequests'

const AvailabilityButton = ({ label, productId, manufacturer }) => {
    const [availability, setAvailability] = useState({ loading: false, id: '', status: null })

    const showAvailability = async (id, manufacturer) => {
        setAvailability(prevState => ({ ...prevState, id: id }))
        const fetchedManufacturerData = await fetchManufacturersAvailability(manufacturer, id, setAvailability)
        return fetchedManufacturerData
    }

    return (
        <Grid item>
            {
                label === 'Availability' && !availability.loading && !availability.status && (
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
        </Grid>
    )
}
export default AvailabilityButton