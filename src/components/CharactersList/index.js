import { AppBar, Box, Container, Dialog, IconButton, Slide, Toolbar, Typography } from "@mui/material";
import { Person4, Close } from '@mui/icons-material';
import { forwardRef, useEffect, useState } from "react";
import Character from "../Character";
import { getThreeFirstCharacters } from "../../api/CharacterApi";
import ButtonMoreCharacters from "./ButtonMoreCharacters";
import CharacterLoading from "../Character/CharacterLoading";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const CharactersList = (props) => {
    const {open, setOpen, book} = props 
    const [currentCharacters, setCurrentCharacters] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect( () => {
        const fetchData = async () => {
            getThreeFirstCharacters(book).then((response) => {
                setCurrentCharacters({
                    0: response[0],
                    1: response[1],
                    2: response[2]
                })
            })
        }

        if (open) {
            fetchData()
        }
    }, [open, book])

    const handleClose = () => {
        setOpen(false);
    }

    const getCharactersContent = () => {
        let itemsList = []
        Object.keys(currentCharacters).forEach((key) => {
            itemsList.push(<Character key={key} character={currentCharacters[key].data}/>)
        })
        return itemsList
    }

    const getIsLoadingContent = () => {
        let loadingContent = ''
        if (isLoading) {
            loadingContent = <CharacterLoading/>
        }
        return loadingContent
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
                        {book.name}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container sx={{marginTop: '10%'}}>
                <Person4/> {book.characters.length} personnages dans ce livre
                <Box sx={{
                    display: 'grid',
                    gap: 5,
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    marginTop: '50px'
                    }}
                >
                    { getCharactersContent() }
                    { getIsLoadingContent() }
                </Box>
                
                <ButtonMoreCharacters book={book}
                currentCharacters={currentCharacters} setCurrentCharacters={setCurrentCharacters}
                isLoading={isLoading} setIsLoading={setIsLoading}/>
            </Container>
        </Dialog>
    )
}

export default CharactersList;



