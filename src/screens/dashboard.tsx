import React from "react";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ImportantProjectsTable from 'components/ImportantProjectsTable';
import Divider from '@mui/material/Divider';
import SummaryCard from 'components/SummaryCard';

const DashboardScreen = () => {
    return (
        <React.Fragment>
            <Toolbar />
                    
            <Typography variant='h4'>Dashboard</Typography>
            <Typography variant='body2'>Seja bem-vindo Murilo!</Typography>
            <Divider style={{marginTop: 12, marginBottom: 24}}/>

            <SummaryCard />

            <ImportantProjectsTable />
        </React.Fragment>
    )
}

export default DashboardScreen;