import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import Person4 from '@mui/icons-material/Person4';
import CharactersList from "../CharactersList";
import { useState } from "react";

const Book = (props) => {
    const {book} = props 
    const [openCharactersList, setOpenCharactersList] = useState(false)

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
            <CardActions>
                <Button size="small" onClick={() => setOpenCharactersList(true)}><Person4/>Personnages</Button>
            </CardActions>
            <CharactersList book={props.book} setOpen={setOpenCharactersList} open={openCharactersList}/>
        </Card>
    )
}

export default Book;

