import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props: { children: React.ReactNode, value: number, idPrefix : string, index : number }) {

    const { value, children, idPrefix, index } = props;

    return (
        <div
            {...props}
            role="tabpanel"
            hidden={value !== index}
            id={`${idPrefix}-${index}`}
            aria-labelledby={`${idPrefix}-${index}`}
        >
            {value === index && ([children])}
        </div>
    );
}

export default TabPanel;