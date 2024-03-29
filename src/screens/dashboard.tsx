import React from "react";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ImportantProjectsTable from 'components/ImportantProjectsTable';
import Header from 'components/Header';
import Divider from '@mui/material/Divider';
import SummaryCard from 'components/SummaryCard';

const DashboardScreen = () => {
    return (
        <React.Fragment>
            <Toolbar />
            <Header title={"Dashboard"} subtitle={"Seja bem-vindo Murilo!"}/>

            <SummaryCard />

            <ImportantProjectsTable />
        </React.Fragment>
    )
}

export default DashboardScreen;