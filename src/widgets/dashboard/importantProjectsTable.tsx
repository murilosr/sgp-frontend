
import DataTable from 'react-data-table-component';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

const pillStyle = {
    minWidth: "70px",
    height: "24px"
}

const columns = [
    {
        name: 'Nome',
        selector: (row : any) => row.title,
        sortable: true,
        grow: 1
    },
    {
        name: 'Membros',
        selector: (row : any) => row.year,
        center: true
    },
    {
        name: 'Tarefas Pendentes',
        selector: (row : any) => row.year,
        center: true
    },
    {
        name: 'Tarefas Atrasadas',
        selector: (row : any) => row.year,
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
        selector: (row : any) => row.priority,
        cell: (row : any, index : any, column : any, id : any) => {
            switch(row.priority){
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

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
        priority : "high"
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
        priority : "low"
    },
    {
        id: 3,
        title: 'Ghostbusters',
        year: '1984',
        priority : "medium"
    },
    {
        id: 4,
        title: 'Ghostbusters',
        year: '1984',
        priority : "loww"
    },
]

const ImportantProjectsTableWidget = () => {
    return (
        <Paper sx={{display:'flex', flexDirection: "column", padding: 2}}>
            <DataTable
                columns = {columns}
                data = {data}
                title = {"Projetos Importantes"}
                responsive
                striped
                
            />
            <Button sx={{alignSelf: "end"}}>VER TODOS</Button>
        </Paper>
    )
}

export default ImportantProjectsTableWidget;