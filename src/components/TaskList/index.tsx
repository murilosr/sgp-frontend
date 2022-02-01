import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import WorkIcon from '@mui/icons-material/Work';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UserAvatar from 'components/UserAvatar';

import fakeUsers from 'fakedata/users';
import DatePill from 'components/DatePill';

const TaskList = () => {

    return (
        <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} flexDirection={"row"} alignItems={"center"} sx={{mb: 2}}>
                <WorkIcon sx={{mr: 1}} />
                <Typography variant="h5" sx={{marginRight: 1}}>Tarefas do projeto</Typography>
                <DatePill startDate={new Date(2022,0,1)}  endDate={new Date(2022,1,1)} checkDate={false} />
                <Button variant="contained" sx={{marginLeft: "auto"}} startIcon={<AddIcon />}>Nova tarefa</Button>
            </Box>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box display={"flex"} sx={{width: "100%", marginRight: 2}}>
                        <Typography>Nome da tarefa</Typography>
                        <Box sx={{display: "flex", marginLeft: "auto", "*:not(*:last-child)": {marginRight: 1}}}>
                            <UserAvatar user={fakeUsers[0]} />
                            <DatePill endDate={new Date(2022,0,1)} />
                        </Box>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    Ola
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    Oi
                </AccordionSummary>
                <AccordionDetails>
                    Ola
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    Oi
                </AccordionSummary>
                <AccordionDetails>
                    Ola
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    Oi
                </AccordionSummary>
                <AccordionDetails>
                    Ola
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default TaskList;