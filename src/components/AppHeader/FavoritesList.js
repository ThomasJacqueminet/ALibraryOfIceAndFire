import { AppBar, Box, Card, Container, Dialog, IconButton, Slide, Toolbar, Typography } from "@mui/material";
import { Close } from '@mui/icons-material';
import { forwardRef, useEffect } from "react";
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const FavoritesList = (props) => {
    const {open, setOpen} = props 

    const handleClose = () => {
        setOpen(false);
    }


    const getFavoritesBooks = () => {
        let itemsList = []
        Object.keys(sessionStorage).forEach((value, key) => {
            if (sessionStorage.getItem(value) === 'true') {
                itemsList.push(
                    <Card key={key}>
                        <Typography gutterBottom variant="h5" component="div">
                            <MenuBookIcon /> {value}
                        </Typography>
                    </Card>
                    )
            }
        })
        return itemsList
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
                    {
                        getFavoritesBooks()
                    }
                </Box>
            </Container>
        </Dialog>
    )
}

export default FavoritesList;



