import React from "react";
import Toolbar from '@mui/material/Toolbar';
import Header from 'components/Header';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import { IconButton } from "@mui/material";
import { useParams } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from "components/TabPanel";
import TaskList from "components/TaskList";

const ProjectScreen = () => {
    const urlParams = useParams();
    const projectId = urlParams.id;

    const [activeTab, setActiveTab] = React.useState(0);

    const handleChangeTab = (event : any, newValue : number) => {
        setActiveTab(newValue)
    }

    return (
        <React.Fragment>
            <Toolbar />
            <Header title={`Projeto ${projectId}`} breadcrumb={""}/>
            
            <Box display={"flex"} flexDirection={"column"}>
                <Box display={"flex"} flexDirection={"row"} alignItems={"center"} width="100%" >
                    <Tabs value={activeTab} onChange={handleChangeTab}>
                        <Tab label="Tarefas" id="tab-project-0" />
                        <Tab label="Membros" id="tab-project-1" />
                    </Tabs>
                    <Button variant="contained" sx={{marginLeft: "auto"}} startIcon={<AddIcon/>} >
                        Nova etapa
                    </Button>
                </Box>
                <Box sx={{p: 2}}>
                    <TabPanel idPrefix="tab-project" value={activeTab} index={0}>
                        <TaskList />
                    </TabPanel>
                    <TabPanel idPrefix="tab-project" value={activeTab} index={1}>
                        Tab Membros
                    </TabPanel>
                </Box>
            </Box>

        </React.Fragment>
    )
}

export default ProjectScreen;