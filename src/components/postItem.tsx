import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IPost } from "../types/types";
import { FC } from 'react';
import { Colors } from '../const/colors';
import Likes from './likes';
import { store } from '../store';

interface PostItemProps {
	post: IPost;
  onClick : (user: IPost) => void;
}

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const PostItem: FC<PostItemProps> = ({post, onClick}: PostItemProps) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const randColor = Math.floor(Math.random() * 7);
    let currColor = Colors.find(color => color.id === randColor);
    const firstSymbolFromName = post.title[0];
    
  return (
    <Card sx={{ maxWidth: '100%', marginTop: 1 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: currColor?.color }} aria-label="recipe">
            {firstSymbolFromName}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        style={{textAlign: 'left'}}
        title={post.title}
        subheader="September 14, 2016 •"
        onClick={() => onClick(post)}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" style={{textAlign: 'left'}}>
            {post.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Likes store={store} likes={{postId: post.id}}/>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default PostItem;
