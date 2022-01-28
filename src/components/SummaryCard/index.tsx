import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Grid from '@mui/material/Grid';
import { maxWidth } from '@mui/system';

function SummaryCard() {
    return (
        <Paper sx={{display: "flex", flexDirection: "column", position: "relative", padding: 2, width: "100%"}}>
            <Typography variant="h4">8</Typography>
            <Typography variant="body2" color={"rgba(0,0,0,0.6)"}>Tarefas pendentes</Typography>
            <CheckCircleIcon style={{"position": "absolute", top: "8px", right: "8px", color: "#2e7d32", width: 32, height: 32}}/>
        </Paper>
    )
}

function SummaryCardRow() {
    return (
        <Grid container spacing={4} sx={{marginBottom: 4}}>
            <Grid item xs={12} md={3}><SummaryCard /></Grid>
            <Grid item xs={12} md={3}><SummaryCard /></Grid>
            <Grid item xs={12} md={3}><SummaryCard /></Grid>
            <Grid item xs={12} md={3}><SummaryCard /></Grid>
        </Grid>
    )
}

export default SummaryCardRow