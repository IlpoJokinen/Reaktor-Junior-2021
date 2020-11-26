import React, { useState } from 'react'
import './App.css'
import { AppBar, Toolbar, Typography, Tabs, Tab, Grid } from '@material-ui/core'

const App = () => {
  const [category, setCategory] = useState('jackets')

  const changeCategory = (category) => {
    setCategory(category)
  }

  return (
    <Grid container>
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
  )
}
export default App