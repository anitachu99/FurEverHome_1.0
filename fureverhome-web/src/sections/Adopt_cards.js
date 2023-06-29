import { Card, CardContent, CardHeader, CardMedia, Typography } from "@material-ui/core";
import style from "./styling/Adopt.module.scss";
import { useEffect, useState } from "react";
import axios from 'axios';
import CardPhotos from "./cardPhotos";
import NoImage from "./images/icons8-no-image-100.png";

const AdoptCards = ({cards}) => {
    const [images, setImages] = useState([]);
    
    useEffect(() => {
        const getImage = async () => {
            try {
                if (cards.photos && Object.keys(cards.photos).length > 1) {
                    const photoObjects = Object.values(cards.photos);
                const extractUrls = photoObjects.flatMap(photo => Object.values(photo));
                setImages(extractUrls);
                }
            } catch (error) {
                console.error('Error extracting url', error);
            }
        };
        getImage();
    }, [cards.photos]);
    return (
        <Card sx={{ maxWidth: 345 }}>
            {images.length > 0 ? (
                <CardPhotos imageUrls={images} />
            ) : (
                <img src={NoImage} alt="no_image" />
            )}
            <CardContent>
                <Typography gutterBottom variant="h5"  component="div">
                    {cards.name}
                </Typography>
                <Typography variant="body2">
                    <li>{cards.type}</li>
                    <li>{cards.age}</li>
                    <li>{cards.gender}</li>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default AdoptCards