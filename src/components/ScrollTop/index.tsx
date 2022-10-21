import React, {useState} from 'react';
import {Button} from "@mui/material";
import {KeyboardArrowUp} from "@mui/icons-material";

const ScrollButton = () =>{

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200){
            setVisible(true)
        }
        else if (scrolled <= 200){
            setVisible(false)
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'auto'
            /* you can also use 'auto' behaviour
                in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button sx={{
            position: 'fixed',
            width: '100px',
            right: '8px',
            bottom: '110px',
            height: '20px',
            fontSize: '3rem',
            zIndex: '1',
            cursor:' pointer',
            color: 'white',

            }} >
            <KeyboardArrowUp sx={{fontSize: '3rem', bgcolor: 'lightgrey', borderRadius: '2rem'}}
                onClick={scrollToTop}
                             style={{display: visible ? 'inline' : 'none'}} />
        </Button>
    );
}

export default ScrollButton;
