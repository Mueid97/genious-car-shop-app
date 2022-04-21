import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { serviceDetail } from '../../App';

const ServicesDetails = () => {
    const [services, setServices] = useContext(serviceDetail);

    const { id } = useParams();

    const service = services.find((service) => service._id == id);
    return (
        <div className='d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
            <div className=' g-4 col-sm-12 col-md-6 col-lg-4'>
                <div className="card" style={{ width: "25rem" }}>
                    <img src={service.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{service.name}</h5>
                        <p>Price: {service.price}</p>
                        <p className="card-text">{service.description}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;