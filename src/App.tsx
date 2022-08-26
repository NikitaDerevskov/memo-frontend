import { BrowserRouter, Routes, Route } from "react-router-dom";
import Folders from "./features/folders/Folders";
import Welcome from "./features/auth/Welcome";
import Login from "./features/auth/Login";
import Registration from "./features/auth/Registration";
import Folder from "./features/folders/Folder";
import CreateCard from "./features/cards/CreateCard";
import EditCard from "./features/cards/EditCard";
import CreateFolder from "./features/folders/CreateFolder";
import EditFolder from "./features/folders/EditFolder";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="main" element={<Folders />} />
        <Route path="folder">
          <Route path="new" element={<CreateFolder />} />
          <Route path=":folderId/edit" element={<EditFolder />} />
          <Route path=":folderId" element={<Folder />} />
          <Route path=":folderId/card/new" element={<CreateCard />} />
          <Route path=":folderId/card/:cardId/edit" element={<EditCard />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>{"There's nothing here!"}</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
