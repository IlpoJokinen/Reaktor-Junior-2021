import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Typography, Tabs, Tab, Grid } from '@material-ui/core'
import JacketList from './components/JacketList'
import ShirtList from './components/ShirtList'
import AccessoryList from './components/AccessoryList'

const App = () => {
    const [category, setCategory] = useState('jackets')

    const changeCategory = (event, category) => {
        setCategory(category)
    }

    return (
        <Grid container direction='column'>
            <Grid item>
                <AppBar position='static'>
                    <Toolbar>
                        <Typography variant='h6'>
                            Warehouse Manager
                    </Typography>
                    </Toolbar>
                    <Tabs value={category} onChange={changeCategory}>
                        <Tab value='jackets' label='Jackets' />
                        <Tab value='shirts' label='Shirts' />
                        <Tab value='accessories' label='Accessories' />
                    </Tabs>
                </AppBar>
            </Grid>
            {category === 'jackets' && (
                <Grid item>
                    <JacketList />
                </Grid>
            )}
            {category === 'shirts' && (
                <Grid item>
                    <ShirtList />
                </Grid>
            )}
            {category === 'accessories' && (
                <Grid item>
                    <AccessoryList />
                </Grid>
            )}
        </Grid>
    )
}
export default App