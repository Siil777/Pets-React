import imgAbout from '../assets/about-pets.svg';
import '../css/ComponentTwo.css';



const ComponentTwo =()=> {
    return(
        <div className='wrapper'>
                    <main className='col-lg-12 bg-color d-lg-flex d-flex justify-content-center ps-5 pe-5'>
            <div className="d-flex col-md-10 flex-column-reverse flex-lg-row align-items-center mt-5">
                <div className='py-sm-5'>
                    <img src={imgAbout} style={{height: '40vh'}} alt='about'/>
                </div>
                    <div className='ms-lg-5 d-block cust-s'>
                    <div className='custom-style-h3 col-md-6 col-lg-10'>
                            About the shelter “Cozy House”
                    </div>
                    <div className='p-style mt-4'>
                    Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find 
                    a family. The others will continue to live with us and will be waiting for a lucky chance to become dearly 
                    loved.
                    </div>
                    <div className='p-style mt-4'>
                    We feed our wards with the best food and make sure that they do not get sick, feel comfortable 
                    (including psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill 
                    levels. About 12% of the animals are taken by the shelter staff. Taking care of the animals, they become 
                    attached to the pets and would hardly ever leave them alone.
                    </div>
                    </div>
                </div>
        </main>
        </div>
    );
}

export default ComponentTwo;