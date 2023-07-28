import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Guide = () => {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Admin Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Number: 01792552400
                        Password: 123456
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Customer Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                       Create an account and login to see the details
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default Guide;