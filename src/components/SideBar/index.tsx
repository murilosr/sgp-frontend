import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TuneIcon from '@mui/icons-material/Tune';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import TodayIcon from '@mui/icons-material/Today';
import ScoreIcon from '@mui/icons-material/Score';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerWidth = 240;

export default function ClippedDrawer() {

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="persistent"
        open={true}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
              <ListItem button key={"Dashboard"}>
                <ListItemIcon>
                  <TuneIcon />
                </ListItemIcon>
                <ListItemText primary={"Dashboard"} />
              </ListItem>
              <ListItem button key={"Projetos"}>
                <ListItemIcon>
                  <WorkOutlineIcon />
                </ListItemIcon>
                <ListItemText primary={"Projetos"} />
              </ListItem>
              <ListItem button key={"Cronograma"}>
                <ListItemIcon>
                  <TodayIcon />
                </ListItemIcon>
                <ListItemText primary={"Cronograma"} />
              </ListItem>
              <ListItem button key={"Relatórios"}>
                <ListItemIcon>
                  <ScoreIcon />
                </ListItemIcon>
                <ListItemText primary={"Relatórios"} />
              </ListItem>
              <ListItem button key={"Usuários"} onClick={handleClick}>
                <ListItemIcon>
                  <PeopleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary={"Usuários"} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <PeopleOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="Ver todos" />
                  </ListItemButton>
                </List>
              </Collapse>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
