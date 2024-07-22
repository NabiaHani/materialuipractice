import React, {useState} from 'react'
import { AppBar, Typography, Toolbar, Tabs, Tab } from '@mui/material';

const Appbar = () => {
    const [value, setValue] = useState(0)
    return (
        <div>
            <AppBar>
               <Toolbar>
               <Typography variant='h4'>LOGO</Typography>
               <Tabs sx={{marginLeft:"auto"}} textColor="inherit" indicatorColor="inherit" value={value} onChange={(e, val) => setValue(val)}>
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