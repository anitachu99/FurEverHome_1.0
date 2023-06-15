import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
require('dotenv').config();

function Adopt () {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get('/Adopt', {
                    params: {
                        type: 'dog',
                        location: 'New York',
                    },
                });
                setData(response.data.animals);
            } catch (error) {
                console.error(error);
            }
        };
        fetch();
    }, []);
    console.log(data);
    return (
        <main className='Adopt_page'>
            <h1>Adopt Your FurEver Pet</h1>
            {data.length === 0 ? ( 
                <CircularProgress />
            ) : (
                data.map((result) => (
                    <section key={result.id}>
                        <h4>Name: {result.name}</h4>
                        <p>Type: {result.type}</p>
                        <p>Breed: {result.breed}</p>
                        <p>Gender: {result.gender}</p>
                        <p>Location: {result.location}</p>
                    </section>
                ))
            )}
        </main>
    )
}

export default Adopt