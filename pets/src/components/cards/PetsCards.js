import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActions, Typography } from '@mui/material';
import petList from './../../Pets.json';


const Cards = ({onClickOpenModal}) => {
    const [currIndex] = useState(3);
    const visible = petList.slice(0, currIndex);
    if (petList.length === 0) {
        return <p>...Loading</p>
    }
    return (
        <div style={{ display: "flex", gap: "100px", justifyContent: "center" }}>
            {visible.map(card => {
                console.log(card.img);
                return (
                    <Card key={card.id}>
                        <CardMedia
                            sx={{ height: 245, width: 245 }}
                            image={card.img}
                        />
                        <CardContent>
                            <Typography className='text-center' gutterBottom variant="h5" component='div'>
                                {card.name}
                            </Typography>
                        </CardContent>
                        <CardActions className='d-flex justify-content-center'>
                            <Button size='small' onClick={()=>onClickOpenModal(card)}>Learn more</Button>
                        </CardActions>
                    </Card>
                )
            })}
        </div>
    )

}

export default Cards;