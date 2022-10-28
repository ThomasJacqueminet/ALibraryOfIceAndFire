import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import Person4 from '@mui/icons-material/Person4';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorderOutlined';
import CharactersList from "../CharactersList";
import { useEffect, useState } from "react";

const Book = (props) => {
    const {book} = props 
    const [openCharactersList, setOpenCharactersList] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect( () => {
        if(window.sessionStorage.getItem(book.name) === "true") {
            setIsFavorite(true)
        }

    }, [book.name])

    const toggleFavorite = () => {
        console.log('!isFavorite?', !isFavorite)
        setIsFavorite(!isFavorite)
        window.sessionStorage.removeItem(book.name);
        window.sessionStorage.setItem(book.name, !isFavorite);
    }

    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {book.name}
                </Typography>
                <Typography variant="body3">
                    {book.authors}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Publié par {book.publisher}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {book.numberOfPages} pages  
                </Typography>
            </CardContent>
            <CardActions sx={{display: "flex", justifyContent: 'space-between'}}>
                <Button size="small" onClick={() => setOpenCharactersList(true)}><Person4/>Personnages</Button>
                <Button onClick={() => toggleFavorite()}>
                    { isFavorite ? <FavoriteIcon/> : <FavoriteBorder/>}
                </Button>
            </CardActions>
            <CharactersList book={props.book} setOpen={setOpenCharactersList} open={openCharactersList}/>
        </Card>
    )
}

export default Book;

