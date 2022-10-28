import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import InfoIcon from '@mui/icons-material/InfoOutlined';

const Character = (props) => {
    const {character} = props 

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {character.name ? character.name : character.aliases[0]}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {character.titles[0]}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><InfoIcon/> Détails du personnage</Button>
            </CardActions>
        </Card>
    )
}

export default Character;