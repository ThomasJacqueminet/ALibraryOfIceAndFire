import { Card, CardContent, CircularProgress } from "@mui/material";

const CharacterLoading = (props) => {
    return (
        <>
        <Card sx={{ maxWidth: 345 }}>
            <CardContent sx={{textAlign: 'center'}} >
                <CircularProgress/>
            </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
            <CardContent sx={{textAlign: 'center'}} >
                <CircularProgress/>
            </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
            <CardContent sx={{textAlign: 'center'}} >
                <CircularProgress/>
            </CardContent>
        </Card>
        </>
    )
}

export default CharacterLoading;



