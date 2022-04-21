import React, { useContext, useEffect } from 'react';
import { serviceDetail } from '../../App';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    
    const [services, setServices] = useContext(serviceDetail);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div id='services'>
            <h1 className='services-title'>Our Services</h1>
           <div  className='services-container text-center'>
           {
                services.map(service => <Service
                key={service._id}
                service={service}
                ></Service>)
            }
           </div>
        </div>
    );
};

export default Services;



