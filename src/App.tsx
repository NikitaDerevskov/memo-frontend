import Login from "./features/auth/Login";
import Registration from "./features/auth/Registration";
import Folders from "./features/folders/Folders";
import {useState} from "react";

function App() {
  const [folders, setFolders] = useState([]);
  // TODO fetch folders list

  return (
    <div className="App">
      <Login />
      <Registration />
      <Folders />
    </div>
  );
}

export default App;
