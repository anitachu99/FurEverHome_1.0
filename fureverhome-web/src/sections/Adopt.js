import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import style from './styling/Adopt.module.scss';
import AdoptCards from './Adopt_cards';
import CardPhotos from './cardPhotos';
import { Grid } from '@material-ui/core';

function Adopt () {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchingData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/Adopt', {
                    headers: {
                        'Content-Type': 'application/multipart/form-data',
                    }
                });
                setData(response.data.animals || []);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchingData();
    }, []);
    console.log(data);
    return (
        <main className={style.Adopt_page}>
            <h1>Adopt Your FurEver Pet</h1>
            <Grid container spacing={2}>
                {loading ? (
                    <CircularProgress />
                ) : (
                    data.map((cards, index) => (
                        <Grid className={style.grid} item xs={12} sm={6} md={4} key={index}>
                            <AdoptCards cards={cards} />
                            {/* {cards.photos 
                            && cards.photos.length > 0 
                            && (<CardPhotos imageUrls={cards.photos.map(photo => photo.full || photo.large || photo.medium || photo.small )} /> )} */}
                        </Grid>
                    ))
                    
                )}

            </Grid>
        </main>
    )
}

export default Adopt