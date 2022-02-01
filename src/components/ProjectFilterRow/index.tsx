import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ProjectFilterRow = () => {

    const refEl = React.useRef<HTMLButtonElement|null>(null);

    const [menuOpen, menuSetOpen] = React.useState<boolean>(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        menuSetOpen(true);
    };
    const handleClose = () => {
        menuSetOpen(false);
    };

    return (
        <Box sx={{ display: "flex", marginBottom: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={3} md={2} xl={1}>
                    <Button
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{ color: "#000", display: 'flex', justifyContent: 'space-between', border: "1px solid rgba(0,0,0,.15)", textTransform: 'capitalize' }}
                        fullWidth
                        ref={refEl}
                        onClick={handleClick}
                    >
                        Status
                    </Button>
                </Grid>
                <Grid item xs={6} sm={3} md={2} xl={1}>
                    <Button
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{ color: "#000", display: 'flex', justifyContent: 'space-between', border: "1px solid rgba(0,0,0,.15)", textTransform: 'capitalize' }}
                        fullWidth
                    >
                        Membros
                    </Button>
                </Grid>
                <Grid item xs={6} sm={3} md={2} xl={1}>
                    <Button
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{ color: "#000", display: 'flex', justifyContent: 'space-between', border: "1px solid rgba(0,0,0,.15)", textTransform: 'capitalize' }}
                        fullWidth
                    >
                        Prioridade
                    </Button>
                </Grid>
                <Grid item xs={6} sm={3} md={2} xl={1}>
                    <Button
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{ color: "#000", display: 'flex', justifyContent: 'space-between', border: "1px solid rgba(0,0,0,.15)", textTransform: 'capitalize' }}
                        fullWidth
                    >
                        Risco
                    </Button>
                </Grid>
            </Grid>
            <Menu
                id="status-filter-menu"
                anchorEl={refEl.current}
                open={menuOpen}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Aberto</MenuItem>
                <MenuItem onClick={handleClose}>Atrasado</MenuItem>
                <MenuItem onClick={handleClose}>Finalizado</MenuItem>
            </Menu>
        </Box>
    )
}

export default ProjectFilterRow;