import { AppBar, Container, Dialog, IconButton, Slide, Toolbar } from "@mui/material";
import { Person4, Close } from '@mui/icons-material';
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const CharactersList = (props) => {
  const {open, setOpen} = props 

  const handleClose = () => {
    setOpen(false);
};

  return(
    <Dialog
    fullScreen
    open={open}
    onClose={handleClose}
    TransitionComponent={Transition}
    >
        <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
                <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
                >
                    <Close />
                </IconButton>
            </Toolbar>
        </AppBar>
        <Container sx={{marginTop: '10%'}}>
            <Person4/> 100 personnages dans ce livre
        </Container>
    </Dialog>
    )
}

export default CharactersList;



