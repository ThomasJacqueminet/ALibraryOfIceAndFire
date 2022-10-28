import { AppBar, Box, Container, Dialog, IconButton, Slide, Toolbar, Typography } from "@mui/material";
import { Close } from '@mui/icons-material';
import { forwardRef, useEffect } from "react";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const FavoritesList = (props) => {
    const {open, setOpen} = props 

    useEffect( () => {

    }, [open])

    const handleClose = () => {
        setOpen(false);
    }

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
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Favoris
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container sx={{marginTop: '10%'}}>
                
                <Box sx={{
                    display: 'grid',
                    gap: 5,
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    marginTop: '50px'
                    }}
                >
                </Box>
            </Container>
        </Dialog>
    )
}

export default FavoritesList;



