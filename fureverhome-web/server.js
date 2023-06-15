const port = 3000;

const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();

const dataUrl = 'https://api.petfinder.com/v2/animals';
const tokenUrl = 'https://api.petfinder.com/v2/oauth2/token';

const fetchToken = async () => {
    const key = process.env.REACT_APP_PETFINDER_KEY;
    const secret = process.env.REACT_APP_PETFINDER_SECRET;

    try {
        const params = new URLSearchParams();
        params.append("grant_type", "client_credentials");
        params.append("client_id", key);
        params.append("client_secret", secret);

        const res = await fetch (
            tokenUrl,
            {
                method: "POST",
                body: params
            }
        );
        // console.log(await res.json());
        const data = await res.json();
        return data.access_token;
    } catch (error) {
        console.error(error);
        throw new Error('Something is wrong with the fetching of the access token');
    }
};

app.get('/Adopt', async (request, result) => {
    try {
        const token = await fetchToken();
        const res = await axios.get(dataUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/x-www-form-encoded',
            },
            params: request.query,
        });
        result.json(res.data);
    } catch (error) {
        console.error(error);
        result.status(500).json({ error: 'An error occurred while fetching API data.' });
    }
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

