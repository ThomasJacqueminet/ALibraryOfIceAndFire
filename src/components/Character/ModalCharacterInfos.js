import { Box, Modal, Typography } from '@mui/material';
import CakeIcon from '@mui/icons-material/Cake';
import ChurchIcon from '@mui/icons-material/Church';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import * as React from 'react';

const ModalCharactersInfo = (props) => {
    const {setOpenModal, openModal, character} = props 
    return (
        <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={modaleStyle}>
                <Typography id="modal-modal-title" variant="h4" component="h2">
                    {character.gender === 'Male' ? <MaleIcon/> : <FemaleIcon/> }
                    {character.name ? character.name : character.aliases[0]}
                </Typography>

                {character.aliases ? 
                (
                <Typography variant="h5" component="h3">
                    {character.aliases[0]}
                </Typography>
                ): ''}
                {character.titles ? 
                (
                <Typography variant="h5" component="h3">
                    {character.titles[0]}
                </Typography>
                ): ''}
                {character.born ?
                (
                <Typography sx={{ mt: 2 }} component="h6">
                    <CakeIcon/> Naissance : {character.born}
                </Typography>) : '' }

                {character.died ?
                (
                <Typography sx={{ mt: 2 }} component="h6">
                    <ChurchIcon/> Décès : {character.died}
                </Typography>) : '' }
            </Box>
        </Modal>
    )
}

const modaleStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
export default ModalCharactersInfo;