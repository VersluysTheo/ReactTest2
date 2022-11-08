import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ImageTest from '../img/catglass.jpg';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="400"
        image={ImageTest}
        alt="chat a travers un verre"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Chat
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Le chat est trop beau wesh parce que bon il est choupidou lui la 
        </Typography>
      </CardContent>
    </Card>
  );
}
