import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';

const Cards=()=>{
    const [petList,setPetList] = useState([]);
    const [currIndex] = useState(3);

     useEffect(()=>{
        const fetchPets = async () => {
       try{
            const response = await fetch('/Pets-React/pets.json');
            console.log('response out here', response);
            if(!response.ok){
                throw new Error('response must be Json not html');
            }
            const data = await response.json();
            console.log(data);
            setPetList(data);
       }catch(e){
        console.error(e);
       };
    };
       fetchPets();
    }, []);
    const visible = petList.slice(0, currIndex);
    if(petList.length===0){
        return <p>...Loading</p>
    }  
    return(
        <div className='d-flex justify-content-center gap-5'>
            {visible.map(card=>{
                console.log(card.img);
                return(
                    <div key={card.id}>
                         <div className=''>
                            <img src={card.img} alt={card.name}/>
                            <div className='text-center'>
                                {card.name}
                            <div>
                                <Button color="secondary">Learn more</Button>
                            </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
    
}

export default Cards;