import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const {id, name, price, description, img } = service;
    const navigate = useNavigate();

    const hendleBuyService = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='g-4 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "25rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Price: {price}</p>
                    <p className="card-text">{description}</p>
                    <button onClick={()=>hendleBuyService(id)} className="btn btn-primary">Buy Service</button>
                </div>
            </div>
        </div>
    );
};

export default Service;