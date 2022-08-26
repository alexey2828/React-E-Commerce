import { FC } from "react";
import { useNavigate } from "react-router-dom";
import List from "../components/list";
import Loader from "../components/loader";
import { Alert } from "@mui/material";
import UserItem from "../components/userItem";
import { IUser } from "../types/types";
import { useHttpGet } from "../Infrastructure/hooks/useHttpGet";

const UserPage: FC = () => {
  const navigate = useNavigate();
  const url = 'https://jsonplaceholder.typicode.com/users';
  const { data, error, isLoading } = useHttpGet<IUser[]>({url});
    return (
        <div>
          {isLoading ? <Loader/> : (error ? 
              <Alert severity="error">Post not found :/ </Alert> 
            : 
            (data &&
              <List items={data} renderItem={(user: IUser) => <UserItem user={user} key={user.id} onClick={(user: IUser) => navigate('/user/' + user.id)}/>}/>
            ))}
        </div>
    );
}

export default UserPage;
