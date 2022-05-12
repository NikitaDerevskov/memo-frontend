import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Folders from "./features/folders/Folders";
import {useState} from "react";
import Welcome from "./features/auth/Welcome";
import Login from "./features/auth/Login";
import Registration from "./features/auth/Registration";

function App() {
  const [folders, setFolders] = useState([]);
  // TODO fetch folders list

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="main" element={<Folders />} />
              <Route path="login" element={<Login />} />
              <Route path="registration" element={<Registration />} />
          </Routes>
      </BrowserRouter>
    // <div className="App">
    //     <Welcome />
    //     <Folders />
    // </div>
  );
}

export default App;
