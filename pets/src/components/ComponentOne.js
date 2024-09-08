import {NavDropDown, Nav, Container, Navbar} from 'react-bootstrap';
import { useEffect } from 'react';
import puppy from '../img/puppy.png';
import  '../css/ComponentOne.scss';
const One =()=> {
    return(

            <div className='wrapper'>
                <div className='ps-5 pe-5 pe-sm-0 point d-block d-lg-flex justify-content-lg-between mx-auto'>
                    <div className='ms-sm-5 ps-sm-5 ps-lg-0 ms-lg-0 d-lg-flex'>
                    <div className='not-only justify-content-center sm'>
                        <h2>Not only people<span className='d-block'>need a home</span></h2>
                        <p className='col-sm-8 class col-md-10'>We offer to give a chance to a little and nice puppy with an extremely wide and open heart.
                            He or she will love you more than anybody else in the world, you will see!
                        </p>
                        <div>
                        <div id='btn' className='btn-one col-sm-6 d-flex justify-content-center align-items-center py-3'><a>Make a friend</a></div>
                        </div>
                    </div>
                    <div className='mt-5 pe-2 vw-50'>
                        <img src={puppy} alt='puppy' style={{height: '50vh', objectFit: 'fill'}}></img>
                    </div>
                    </div>
                </div>
            </div>

    );
}
export default One;