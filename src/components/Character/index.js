import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import InfoIcon from '@mui/icons-material/InfoOutlined';
import { useState } from "react";
import ModalCharactersInfo from "./ModalCharacterInfos";

const Character = (props) => {
    const {character} = props 
    const [openModal, setOpenModal] = useState(false)

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {character.name ? character.name : character.aliases[0]} 
                </Typography>
                <Typography variant="body2" gutterBottom  >
                    {character.name ? character.aliases[0] : ''}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {character.titles[0]}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => setOpenModal(true)} ><InfoIcon/> Détails du personnage</Button>
            </CardActions>
            <ModalCharactersInfo setOpenModal={setOpenModal} openModal={openModal} character={character}/>
        </Card>
    )
}

export default Character;