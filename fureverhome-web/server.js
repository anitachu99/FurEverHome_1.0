const port = 3001;

const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());

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

        // const res = await fetch (
        //     tokenUrl,
        //     {
        //         method: "POST",
        //         body: params
        //     }
        // );
        const res = await axios.post(tokenUrl, params);
        // console.log(await res.json());
        // const data = await res.json();
        const data = res.data;
        return data.access_token;
    } catch (error) {
        console.error(error);
        throw new Error('Something is wrong with the fetching of the access token');
    }
};

app.get('/Adopt', async (request, result) => {
    try {
        const token = await fetchToken();
        const { id, name, type, breeds, gender, location, age,
            color, photos} = request.query;
        const res = await axios.get(dataUrl, {
            params: {
                id,
                name,
                type,
                breeds,
                gender,
                location,
                age,
                color,
                photos
            },
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/multipart/form-data',
            }
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

