import styles from './fab.module.scss';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';


export default function FloatingActionButtons() {

    const whatslink = 'https://wa.me/5585987220001?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.'


    return (
        <Box sx={{ '& > :not(style)': { m: 1,     margin: 0,
                top: 'auto',
                right: 30,
                bottom: 30,
                left: 'auto',
                position: 'fixed', } }}>
            <Fab  color="success" aria-label="whatsapp">
                <a className={styles.fab} href={whatslink} target='_blank' rel='noreferrer'><WhatsAppIcon fontSize={'large'} /></a>
            </Fab>
        </Box>
    );
}