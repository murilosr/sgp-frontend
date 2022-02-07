import React from "react";
import Toolbar from '@mui/material/Toolbar';
import Header from 'components/Header';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import DataTable from 'react-data-table-component';
import data from 'fakedata/importantProjectsTable';
import fakeUsers from 'fakedata/users';
import ProjectMembersAvatarRow from 'components/ProjectMembersAvatarRow';
import InputAdornment from "@mui/material/InputAdornment";
import { IconButton } from "@mui/material";
import ProjectFilterRow from "components/ProjectFilterRow";
import { useNavigate } from "react-router-dom";

const pillStyle = {
    minWidth: "70px",
    height: "24px"
}

const columns = [
    {
        name: 'Nome',
        selector: (row : any) => row.title,
        grow: 1
    },
    {
        name: 'Membros',
        // selector: (row : any) => fakeUsers,
        cell: (row : any) => {
            return <ProjectMembersAvatarRow data={fakeUsers} maxDisplay={3} />
        },
        center: true
    },
    {
        name: 'Tarefas Pendentes',
        selector: (row : any) => row.pendingTasks,
        center: true
    },
    {
        name: 'Tarefas Atrasadas',
        selector: (row : any) => row.overdueTasks,
        center: true
    },
    {
        name: 'Prioridade',
        selector: (row : any) => row.priority,
        cell: (row : any, index : any, column : any, id : any) => {
            switch(row.priority){
                case "high":
                    return (<Chip label="Alta" color="error" sx={{...pillStyle}} />)
                case "medium":
                    return (<Chip label="Média" sx={{...pillStyle, backgroundColor: "#E5FC5A", color: "#000"}} />)
                case "low":
                    return (<Chip label="Baixa" color="success" sx={{...pillStyle}} />)
                default:
                    return (<Chip label="Erro" color="secondary" sx={{...pillStyle}} />)
            }
        },
        center: true
    },
    {
        name: 'Risco',
        selector: (row : any) => row.risk,
        cell: (row : any, index : any, column : any, id : any) => {
            switch(row.risk){
                case "high":
                    return (<Chip label="Alto" color="error" sx={{...pillStyle}} />)
                case "medium":
                    return (<Chip label="Médio" sx={{...pillStyle, backgroundColor: "#E5FC5A", color: "#000"}} />)
                case "low":
                    return (<Chip label="Baixo" color="success" sx={{...pillStyle}} />)
                default:
                    return (<Chip label="Erro" color="secondary" sx={{...pillStyle}} />)
            }
        },
        center: true
    }
];

const ProjectsScreen = () => {

    const navigate = useNavigate();

    return (
        <React.Fragment>
            <Toolbar />
            <Header title={"Projetos"} breadcrumb={""}/>
            
            <Box display={"flex"}>
                <Paper sx={{width: "100%", padding: 2}}>
                    <Box sx={{display: "flex", alignItems: "center", marginBottom: 2}}>
                        <SearchIcon sx={{mr:1}}/>
                        <TextField variant="standard" placeholder="Procurar pelo nome do projeto" sx={{flexGrow: 1, maxWidth: "500px"}} InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        <HighlightOffIcon fontSize="small"/>
                                    </IconButton>
                                </InputAdornment>
                            )}}
                        />
                    </Box>
                    <Divider sx={{marginBottom: 2}} />
                    <ProjectFilterRow />
                    {/* <Divider sx={{marginBottom: 2}} /> */}
                    <Box sx={{marginBottom: 2}}>
                        <Typography sx={{color: "rgba(0,0,0,0.54)"}}>Nenhum filtro ativo</Typography>
                    </Box>
                    {/* <Divider /> */}
                    <DataTable
                        columns = {columns}
                        data = {data}
                        responsive
                        striped
                        pagination
                        onRowClicked={(row) => {navigate(`/projects/${row.id}`)}}
                        pointerOnHover
                        highlightOnHover
                        customStyles={{headRow: {style: {backgroundColor: "#F2F2F2"}}}}
                    />
                </Paper>
            </Box>

        </React.Fragment>
    )
}

export default ProjectsScreen;