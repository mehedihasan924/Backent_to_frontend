import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phonedetails = () => {
     const phonedata=useLoaderData()
    return (
        <div>
            This is Details Page
            <div>
                <h3>ID: {phonedata.id}</h3>
                <img src={phonedata.image} alt="" />
                <h1>Name: {phonedata.name}</h1>
                <h2>{phonedata.price}</h2>
            </div>
        </div>
    );
};

export default Phonedetails;