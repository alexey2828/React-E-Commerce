import { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
	user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {

  return (
    <div>
      <div onClick={() => onClick(user)}>
        <div>{user.id}</div>
			  <div>{user.name}</div>
      </div>
    </div>
  );
};

export default UserItem;
