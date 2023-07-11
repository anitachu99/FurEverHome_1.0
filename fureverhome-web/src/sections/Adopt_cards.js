import { Card, CardContent, CardHeader, CardMedia, Typography } from "@material-ui/core";
import style from "./styling/Adopt_cards.module.scss";
import { useEffect, useState, Truncate } from "react";
import axios from 'axios';
import CardPhotos from "./cardPhotos";
import NoImage from "./images/icons8-no-image-100.png";
import { createTheme, styled, width } from "@mui/system";
import { pink } from "@mui/material/colors";

const AdoptCards = ({cards}) => {
    const [images, setImages] = useState([]);
    const [imageSize, setImageSize] = useState({})
    
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

    const imageStyle = {
        width: 350,
        height: 330
    };

    

    return (
        <Card style={{backgroundColor: "#ffb98a"}} className={style.animalCards} sx={{ maxWidth: 345 }}>
               <CardMedia className={style.images}>
               {images.length > 0 ? (
                        <CardPhotos imageUrls={images} />
                    ) : (
                        <img className={style.noImage} src={NoImage} alt="no_image" />
                )}
               </CardMedia>
                <CardContent className={style.content}>
                <Typography className={style.name} gutterBottom variant="h5"  component="div">
                    {cards.name}
                </Typography>
                <Typography  className={style.info} variant="body2">
                    <li>{cards.type}</li>
                    <li>{cards.age}</li>
                    <li>{cards.gender}</li>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default AdoptCards