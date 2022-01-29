import TitleBar from 'components/TitleBar';
import SideBar from 'components/SideBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';

function LoggedInTemplate(props : {children : React.ReactNode}) {

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <TitleBar />
            <SideBar />
            <Box component="main" sx={{ width: "100%", flexGrow: 1, p: 3 }}>
                {props.children}
            </Box>
        </Box>
    );
}

export default LoggedInTemplate;
