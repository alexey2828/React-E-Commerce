import axios from "axios";
import { FC, useEffect, useState } from "react";
import { ITodo } from "../types/types";
import List from "../components/list";
import TodoItem from "../components/todoItem";

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
  
    useEffect(() => {
        fetchToDos();
    }, [])
  

    async function fetchToDos() {
        try {
          const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
          setTodos(response.data);
        } catch (e) {
          alert(e);
        }
    }

    return (
        <div>
            <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}/>
        </div>
    );
}

export default TodosPage;