import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import UserCreate from "./components/UserCreate";
import UserDetail from "./components/UserDetail";
import UserEdit from "./components/UserEdit";
import "./App.css"; // Import CSS file

function App() {
  return (
    <div className="App">
      <div className="center-container"> {/* Add a container for centering */}
        <h1>React JS CRUD Operation</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/create" element={<UserCreate />} />
          <Route path="/user/detail/:userid" element={<UserDetail />} />
          <Route path="/user/edit/:userid" element={<UserEdit/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
