import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import { useDispatch } from 'react-redux';
import {sidebarToggle} from 'store/slices/ui';

const TitleBar = () => {

    const dispatch = useDispatch();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => dispatch(sidebarToggle({}))}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        SGP
                    </Typography>
                    <Button variant="outlined" color="inherit">
                        <Avatar sx={{ backgroundColor: "rgb(103, 58, 183)", width: 32, height: 32, marginRight: 1 }}><Typography fontSize={16} fontWeight={"bold"}>MR</Typography></Avatar>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default TitleBar;