import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import Person4 from '@mui/icons-material/Person4';


const Book = () => {

  return(
    <Card sx={{ maxWidth: 345 }}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Titre du livre
            </Typography>
            <Typography variant="body3">
                Auteur
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Publié par ...
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Nombre de pages pages  
            </Typography>
        </CardContent>
    </Card>
    )
}

export default Book;

