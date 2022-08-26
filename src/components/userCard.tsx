import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { FC } from 'react';
import { Colors } from '../const/colors';
import { CardMedia } from '@mui/material';

  const UserCard: FC = () => {
    const randColor = Math.floor(Math.random() * 7);
    let currColor = Colors.find(color => color.id === randColor);
    
  return (
    <Card sx={{ maxWidth: '100%', marginTop: 1 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://cdn.discordapp.com/attachments/497433271567908874/1001090814333694062/unknown.png"
        alt="green iguana"
      />
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: currColor?.color, width: 60, height: 60, borderRadius: '50%', border: '6px solid white', marginTop: -4 }} aria-label="recipe">
            U
          </Avatar>
        }
        style={{textAlign: 'left', marginTop: -10}}
        title='UserName'
        subheader="@UserName:9438"
      />
    </Card>
  );
};

export default UserCard;
