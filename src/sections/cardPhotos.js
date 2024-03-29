import { CardMedia } from "@mui/material";
import React from "react";

const cardPhotos = ({ imageUrls }) => {

    if (!imageUrls || imageUrls.length === 0) {
        return null;
    } 
    const imageUrl = imageUrls[0];

    return (
        <div>
            <CardMedia component="img" alt="Pet" image={imageUrl} style={{width:350, height: 330}} />
        </div>
    )
}

export default cardPhotos;