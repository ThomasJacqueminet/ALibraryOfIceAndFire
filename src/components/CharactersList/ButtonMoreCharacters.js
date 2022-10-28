import * as React from 'react';
import { Button } from '@mui/material';
import { AddCircleTwoTone } from '@mui/icons-material';
import { getThreeNextCharacters } from '../../api/CharacterApi';

const ButtonMoreCharacters = (props) => {
    const {book, currentCharacters, setCurrentCharacters, isLoading, setIsLoading} = props 

    const getMoreCharacters = async () => {
        setIsLoading(true)
        const index = Object.keys(currentCharacters).length
        getThreeNextCharacters(index, book).then((response) => {
            const newCharacters = {
                [index+1]: response[0],
                [index+2]: response[1],
                [index+3]: response[2]
            }
            setCurrentCharacters(Object.assign(currentCharacters, newCharacters))
            setIsLoading(false)
        })
    }

    return (
        <Button variant="contained" startIcon={<AddCircleTwoTone />} sx={{marginTop:10, width : '100%'}}
        onClick={() => getMoreCharacters()}>
            {isLoading ? "Chargement..." : "Charger plus"}
        </Button>
    );
}

export default ButtonMoreCharacters;