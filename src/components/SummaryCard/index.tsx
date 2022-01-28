import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import CancelIcon from '@mui/icons-material/Cancel';
import Grid from '@mui/material/Grid';

function SummaryCard(
    props: {title : string,
    subtitle : string,
    icon? : "success" | "warning" | "danger" | undefined,
    link? : string
    }
) {
    let iconComponent = null;
    switch(props.icon){
        case "success":
            iconComponent = (<CheckCircleIcon style={{"position": "absolute", top: "8px", right: "8px", color: "#2e7d32", width: 32, height: 32}}/>);
            break;
        case "warning":
            iconComponent = (<WarningIcon style={{"position": "absolute", top: "8px", right: "8px", color: "#E5FC5A", width: 32, height: 32}}/>);
            break;
        case "danger":
            iconComponent = (<CancelIcon style={{"position": "absolute", top: "8px", right: "8px", color: "#D32F2F", width: 32, height: 32}}/>);
            break;
        
        default:
            iconComponent = null;
    };

    return (
        <Paper sx={{display: "flex", flexDirection: "column", position: "relative", padding: 2, width: "100%", cursor: props.link?"pointer":"default"}}>
            <Typography variant="h4">{props.title}</Typography>
            <Typography variant="body2" color={"rgba(0,0,0,0.6)"}>{props.subtitle}</Typography>
            {iconComponent}
        </Paper>
    )
}

function SummaryCardRow() {
    return (
        <Grid container spacing={4} sx={{marginBottom: 4}}>
            <Grid item xs={12} md={3}><SummaryCard title={"8"} subtitle={"Tarefas pendentes"} icon="success" /></Grid>
            <Grid item xs={12} md={3}><SummaryCard title={"8"} subtitle={"Tarefas atrasadas"} icon="warning" /></Grid>
            <Grid item xs={12} md={3}><SummaryCard title={"8"} subtitle={"Tarefas para amanhã"} icon="danger" /></Grid>
            <Grid item xs={12} md={3}><SummaryCard title={"8"} subtitle={"Tarefas para esta semana"} /></Grid>
        </Grid>
    )
}

export default SummaryCardRow