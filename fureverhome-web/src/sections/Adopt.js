import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import style from './styling/Adopt.module.scss';
import AdoptCards from './Adopt_cards';
import { Grid } from '@mui/material';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import SearchBar from './SearchBar';

function Adopt () {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loginPopup, setLoginPopup] = useState(false);
    const [regPopup, setRegPopup] = useState(false);
    const [user, setUser] = useState({ name: "", email: "" })
    const [emailInUse, setEmailInUse] = useState(false);
    const [userUnknown, setUserUnknown] = useState(false);
    const [filteredData, setFilteredData] = useState(data);
    
    
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

        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uID = user.uid;
                console.log("uid", uID);
            }
            else {
                console.log("User signed out")
            }
        });
    }, []);
    console.log(data);

    const handleLogIn = userInfo => {
        console.log(userInfo);

        if (userInfo.email !== "" && userInfo.pwd !== "") {
            setUser({
                email: userInfo.email,
            })
        }
    }

    const handleLogOut = () => {
        console.log("Logged Out");
        setUser({ email: "" });
    }

    const handleRegister = userInfo => {
        console.log(userInfo);

        if (userInfo.name !== "" && userInfo.email !== "") {
            setUser({ 
                name: userInfo.name, 
                email: userInfo.email 
            });
        }
    }

    const handleSearch = (query) => {
        if (query == "" ) {
            setFilteredData(data);
        } else {
            const filtered = data.filter(item => 
                item.type.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredData(filtered);
        }
    }

    return (
        <main className={style.Adopt_page}>
            <NavBar 
                setLoginPopup={setLoginPopup} 
                setRegPopup={setRegPopup} 
                user={user} 
                handleLogOut={handleLogOut} 
                handleRegister={handleRegister}
                emailInUse={emailInUse}
                userUnknown={userUnknown}
                onInput={handleSearch}
            />
            <Login 
                onAction={loginPopup} 
                setonAction={setLoginPopup} 
                setRegPopup={setRegPopup}
                setUserUnknown={setUserUnknown} 
                handleLogIn={handleLogIn}
                user={user}
            />
            <Register 
                onAction={regPopup} 
                setonAction={setRegPopup}
                setEmailInUse={setEmailInUse}
                handleRegister={handleRegister}
                user={user}
            />
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
                    filteredData.length > 0 ? (
                        filteredData.map((cards, index) => (
                        <Grid className={style.grid} item xs={12} sm={6} md={3} key={index}>
                                <AdoptCards className={style.cards} cards={cards} />
                        </Grid>
                        )) 
                    ) : (
                        data.map((cards, index) => (
                            <Grid className={style.grid} item xs={12} sm={6} md={3} key={index}>
                                    <AdoptCards className={style.cards} cards={cards} />
                            </Grid>
                        ))
                    )
                )}

            </Grid>
        </main>
    )
}

export default Adopt