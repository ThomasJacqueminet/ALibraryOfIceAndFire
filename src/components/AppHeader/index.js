import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";
import FavoritesList from './FavoritesList'

const AppHeader = () => {
  const [openFavorites, setOpenFavorites] = useState(false)

  return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpenFavorites(true)}
          >
            <FavoriteIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            A Libray Of Ice And Fire
          </Typography>
        </Toolbar>
      </AppBar>
      <FavoritesList open={openFavorites} setOpen={setOpenFavorites}/>
    </Box>
    )
}

export default AppHeader;