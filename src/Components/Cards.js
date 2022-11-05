import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';


const Cards = (props) => {
 
    return (
        <Grid item xs={12} md={3} lg={2}>
            <Box sx={{ maxWidth: 500, minWidth: 200 }}>
                <Card variant="outlined">
                    <React.Fragment>
                        <CardMedia
                            component="img"
                            height="194"
                            image= {props.img}
                            alt="person images"
                        />
                        <CardContent>
        
                            <Typography variant="h5" component="div">
                                {props.title} {props.first} {props.last}
                            </Typography>
                        </CardContent>
                        <CardActions>
                                 <button onClick={() => { props.deleteItem(props.id) }}>delete</button>
                        </CardActions>
                    </React.Fragment>
          
                </Card>
            </Box>
        </Grid>
   
    );
}

export default Cards

