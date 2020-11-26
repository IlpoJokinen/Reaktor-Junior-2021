import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Tabs, Tab, Grid } from '@material-ui/core'
import JacketList from './components/JacketList'

const App = () => {
    const [category, setCategory] = useState('jackets')

    const changeCategory = (category) => {
        setCategory(category)
    }

    return (
        <Grid container direction='column' style={{ height: '100vh' }}>
            <Grid item style={{ height: '20%' }}>
                <AppBar position='static'>
                    <Toolbar>
                        <Typography variant='h6'>
                            Warehouse management tool
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
                <Grid item style={{ height: '80%' }}>
                    <JacketList />
                </Grid>
            )}
        </Grid>
    )
}
export default App