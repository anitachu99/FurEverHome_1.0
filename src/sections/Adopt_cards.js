import { Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import style from "./styling/Adopt_cards.module.scss";
import { useEffect, useState, Truncate } from "react";
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
                    console.log(`photoObjects: ${cards.photos}`);
                    setImages(extractUrls);
                }
            } catch (error) {
                console.error('Error extracting url', error);
            }
        };
        getImage();
    }, [cards.photos]);

    return (
        <Card style={{backgroundColor: "#ffb98a"}} className={style.animalCards}>
               <CardMedia className={style.images}>
               {images.length > 0 ? (
                        <CardPhotos imageUrls={images} />
                    ) : (
                        <img className={style.noImage} src={NoImage} alt="no_image" />
                )}
               </CardMedia>
                <CardContent className={style.content}>
                <Typography className={style.name} gutterBottom variant="h5"  component="div">
                    {cards.name.length > 10 ? cards.name.substring(0,10) + "\u2026" : cards.name}
                </Typography>
                <Typography  className={style.info} variant="body2">
                    <li>{cards.type}</li>
                    <li>{cards.age}</li>
                    <li>{cards.gender}</li>
                    <li>State: {cards.contact.address.state}</li>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default AdoptCards