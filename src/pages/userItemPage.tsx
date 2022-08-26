import { Alert } from "@mui/material";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loader from "../components/loader";
import { Urls } from "../const/url";
import { useAction } from "../Infrastructure/hooks/useAction";
import { useHttpGet } from "../Infrastructure/hooks/useHttpGet";
import { useTypeSelector } from "../Infrastructure/hooks/useTypeSelector";
import { IUser } from "../types/types";

const UserItemPage: FC = () => {
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

export default UserItemPage;
