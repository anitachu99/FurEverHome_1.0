import { CardMedia } from "@material-ui/core";
import React from "react";

const cardPhotos = ({ imageUrls }) => {

    if (!imageUrls || imageUrls.length === 0) {
        return null;
    } 
    const imageUrl = imageUrls[0];

    return (
        <div>
            <CardMedia component="img" alt="Pet" image={imageUrl} />
        </div>
    )
}

export default cardPhotos;