import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrimarySearchAppBar from './components/header';
import { ERoutsName } from './const/routsName';
import HomePage from './pages/homePage';
import PostItemPage from './pages/postItemPage';
import TodoItemPage from './pages/todoItemPage';
import TodosPage from './pages/todosPage';
import UserItemPage from './pages/userItemPage';
import UserPage from './pages/userPage';

const App = () => {

  return (
    <div style={{background: '#f5f5f7'}}>
      <BrowserRouter>
        <div>
          <div>
            <PrimarySearchAppBar/>
          </div>
          <Routes>
            <Route path={ERoutsName.Home} element={<HomePage />} />
            <Route path={ERoutsName.Users} element={<UserPage />} />
            <Route path={ERoutsName.Todos} element={<TodosPage />} />
            <Route path={ERoutsName.UserId} element={<UserItemPage />} />
            <Route path={ERoutsName.PostId} element={<PostItemPage />} />
            <Route path={ERoutsName.ToDoId} element={<TodoItemPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
