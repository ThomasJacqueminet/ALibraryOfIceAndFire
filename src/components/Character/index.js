import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import InfoIcon from '@mui/icons-material/InfoOutlined';

const Character = (props) => {
    const {data} = props 

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Prenom Nom
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Titre
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><InfoIcon/> Détails du personnage</Button>
            </CardActions>
        </Card>
    )
}

export default Character;