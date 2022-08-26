import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Menu from '../components/menu';
import PostItem from '../components/postItem';
import { useNavigate } from 'react-router-dom';
import { useHttpGet } from '../Infrastructure/hooks/useHttpGet';
import { IPost } from '../types/types';
import { Alert } from "@mui/material";
import List from '../components/list';
import Loader from '../components/loader';
import UserCard from '../components/userCard';

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const url = 'https://jsonplaceholder.typicode.com/posts?_limit=30/posts';
    const { data, error, isLoading } = useHttpGet<IPost[]>({url});
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <div style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
            <Box sx={{ flexGrow: 1}}>
              <Grid container spacing={3}>
                <Grid item xs>
                  <Item>
                    <Menu/>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    {isLoading ? <Loader/> : (error ? 
                        <Alert severity="error">Post not found :/ </Alert> 
                    : 
                    (data &&
                        <List items={data} renderItem={(post: IPost) => <PostItem post={post} key={post?.id} onClick={(post) => navigate('/post/' + post.id)}/>}/> 
                    ))}
                  </Item>
                </Grid>
                <Grid item xs>
                  <Item>
                    <UserCard/>
                  </Item>
                </Grid>
              </Grid>
            </Box>
        </div>
    );
}

export default HomePage;



// <PostItem data={data}/>
