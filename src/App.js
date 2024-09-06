import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import UserCreate from "./components/UserCreate";
import UserDetail from "./components/UserDetail";
import UserEdit from "./components/UserEdit";

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Operation</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList/>}></Route>
          <Route path="/user/create" element={<UserCreate/>}></Route>
          <Route path="/user/detail/:userid" element={<UserDetail/>}></Route>
          <Route path="/user/edit/:userid" element={<UserEdit/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
