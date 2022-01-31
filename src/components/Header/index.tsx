import React from "react";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ImportantProjectsTable from 'components/ImportantProjectsTable';
import Divider from '@mui/material/Divider';
import SummaryCard from 'components/SummaryCard';

const Header = (props : {title : string, subtitle? : string, breadcrumb? : string}) => {
    return (
        <React.Fragment>
            <Typography variant='h4'>{props.title}</Typography>
            <Typography variant='body2'>{props.subtitle}</Typography>
            <Divider style={{marginTop: 12, marginBottom: 24}}/>
        </React.Fragment>
    )
}

export default Header;