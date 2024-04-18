import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./Components/USER_LIST/UserList";
import UserProfile from "./Components/USER_DETAILS/UserProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />}></Route>
          <Route path="/userProfile/:id" element={<UserProfile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
