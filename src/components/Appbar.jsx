import React from 'react'
import { AppBar, Typography, Toolbar, Tabs, Tab } from '@mui/material';

const Appbar = () => {
    return (
        <div>
            <AppBar>
               <Toolbar>
               <Typography variant='h4'>LOGO</Typography>
               <Tabs sx={{marginLeft:"auto"}} textColor="inherit" indicatorColor="secondary">
                <Tab label='HOME'/>
                <Tab label='ABOUT'/>
                <Tab label='PROJECTS'/>
                <Tab label='CONTACT'/>
               </Tabs>
               {/* <Button variant='contained' color='success' sx={{marginLeft: 'auto'}}>Signup</Button> */}
               </Toolbar>
            </AppBar>

        </div>
    )
}

export default Appbar