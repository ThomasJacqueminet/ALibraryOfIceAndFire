import { Box, Container } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Book from '../Book';

const Library = () => {

  return(
      <Container sx={{marginTop: '50px'}}>
        <MenuBookIcon/> 3 livres dans la bibliothèque
        <Box sx={{
              display: 'grid',
              gap: 5,
              gridTemplateColumns: 'repeat(3, 1fr)',
              marginTop: '50px'
            }}
        >
            <Book/>
            <Book/>
            <Book/>
        </Box>
      </Container>
    )
}

export default Library;