import { Alert } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useHttpGet } from "../Infrastructure/hooks/useHttpGet";
import { IUser } from "../types/types";

const PostItemPage: FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    const url = 'https://jsonplaceholder.typicode.com/users/' + params.id;
    const { data, error } = useHttpGet<IUser>({url});

    return (
        <div>
            {error && 
              <Alert severity="error">Page not found :</Alert>
            }
            <button onClick={() => navigate(-1)}>Back</button>
            <h1>User page {data?.name}</h1>
            <div>
                {data?.email}
                {data?.address.city}
                {data?.address.street}
            </div>
        </div>
    );
}

export default PostItemPage;
