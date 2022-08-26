import { FC } from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
	todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {

  return (
    <div>
        <div>
        	<div>{todo.id}</div>
			    <div>{todo.title}
            <input type="checkbox" checked={todo.completed}></input>
          </div>
        </div>
    </div>
  );
};

export default TodoItem;
