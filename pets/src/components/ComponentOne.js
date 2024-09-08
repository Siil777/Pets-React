import {NavDropDown, Nav, Container, Navbar} from 'react-bootstrap';
import { useEffect } from 'react';
import puppy from '../img/puppy.png';
import  '../css/ComponentOne.css';
const One =()=> {
    return(
        <Container>
            <div>
                <div className='point mx-md-auto d-block d-lg-flex  d-grid mt-5 justify-content-lg-between justify-content-sm-center'>
                    <div className='not-only'>
                        <h2>Not only people<span className='d-block'>need a home</span></h2>
                        <p className='mt-5'>We offer to give a chance to a little and nice puppy with an extremely wide and open heart.
                            He or she will love you more than anybody else in the world, you will see!
                        </p>
                        <div id='btn' className='btn-one col-sm-4 col-md-4 d-flex justify-content-center align-items-center p-2'><a>Make a friend</a></div>
                    </div>
                    <div className='mt-5'>
                        <img src={puppy} alt='puppy' height={'450px'}></img>
                    </div>
                </div>
            </div>
        </Container>
    );
}
export default One;