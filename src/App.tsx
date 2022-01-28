import TitleBar from 'components/TitleBar';
import SideBar from 'components/SideBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ImportantProjectsTableWidget from 'widgets/dashboard/importantProjectsTable';
import Divider from '@mui/material/Divider';
import SummaryCard from 'components/SummaryCard';

function App() {

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <TitleBar />
            <SideBar />
            <Box component="main" sx={{ width: "100%", flexGrow: 1, p: 3 }}>
                <Toolbar />
                
                <Typography variant='h4'>Dashboard</Typography>
                <Typography variant='body2'>Seja bem-vindo Murilo!</Typography>
                <Divider style={{marginTop: 12, marginBottom: 24}}/>

                <SummaryCard />

                <ImportantProjectsTableWidget />
            </Box>
        </Box>
    );
}

export default App;
