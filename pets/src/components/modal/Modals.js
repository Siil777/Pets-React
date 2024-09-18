import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import style from './Modals.scss';
import petList from './../../Pets.json';

const styles = {
    position: 'absolute',
    width: '600px',
    height: '400px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
}

const Modals = ({ open, onClose, card }) => {

    if(!card) {
        return null;
    }
    
    return (
            <Modal 
            keepMounted
            open={open}
            onClose={onClose}
            aria-labelledby='card-title'
            aria-describedby='card-description'
            >
            <Box className='d-flex p-5' sx={styles}>
                <CardMedia 
                sx={{height:200,width: 1500}}
                image={card.img}
                />
                <div className='d-block ps-5 pe-1'>
                <Typography id='card-title' variant='h5'>
                    {card.name}
                </Typography>
                <Typography id='card-description'>
                    {card.description}
                </Typography>
                </div>
            </Box>
            </Modal>                
    )

}
export default Modals;