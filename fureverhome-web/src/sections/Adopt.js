import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import style from './styling/Adopt.module.scss';
import AdoptCards from './Adopt_cards';
import CardPhotos from './cardPhotos';
import { Grid } from '@mui/material';
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';
import styling from "./styling/Login.module.scss";

function Adopt () {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [popup, setPopup] = useState(false);
    
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
            <NavBar setPopup={setPopup} />
            <Login onAction={popup} setonAction={setPopup} />
            <Grid
                className={style.main_grid}
                container 
                direction="row" 
                justifyContent="center" 
                alignItems="stretch" 
                spacing={2} >
                {loading ? (
                    <CircularProgress />
                ) : (
                    data.map((cards, index) => (
                        <Grid className={style.grid} item xs={12} sm={6} md={3} key={index}>
                            <AdoptCards className={style.cards} cards={cards} />
                        </Grid>
                    ))
                    
                )}

            </Grid>
        </main>
    )
}

export default Adopt