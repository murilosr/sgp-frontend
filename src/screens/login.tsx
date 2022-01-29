import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

const LoginTitleBar = () => {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    SGP
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

const LoginScreen = () => {

    const navigate = useNavigate();

    const loginButtonHandler = (event : React.MouseEvent<HTMLElement>) => {
        navigate("/", {replace: true});
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <LoginTitleBar />
            <Box component="main" sx={{ width: "100%", flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Grid container justifyContent={"center"} sx={{marginTop: {"xs": 0, "md": 12}}}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
                            <Avatar sx={{backgroundColor:"#C51162", marginBottom: 2}}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography variant="h5" sx={{marginBottom: 2}}>Login SGP</Typography>
                            <TextField id="email" type="email" label="Email" variant="outlined" fullWidth sx={{marginBottom: 2}}/>
                            <TextField id="password" type="password" label="Senha" variant="outlined" fullWidth sx={{marginBottom: 2}}/>
                            <Button variant="contained" fullWidth sx={{marginBottom: 2}} onClick={loginButtonHandler} >Entrar</Button>
                            <a href="#"><Typography variant="body1" color="#1976D2">Esqueceu a senha?</Typography></a>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default LoginScreen;
