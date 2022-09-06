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
        <Route element={<Welcome />} path="/" />
        <Route element={<Login />} path="login" />
        <Route element={<Registration />} path="registration" />
        <Route element={<Folders />} path="main" />
        <Route path="folder">
          <Route element={<CreateFolder />} path="new" />
          <Route element={<EditFolder />} path=":folderId/edit" />
          <Route element={<Folder />} path=":folderId" />
          <Route element={<CreateCard />} path=":folderId/card/new" />
          <Route element={<EditCard />} path=":folderId/card/:cardId/edit" />
        </Route>
        <Route
          element={
            <main style={{ padding: "1rem" }}>
              <p>{"There's nothing here!"}</p>
            </main>
          }
          path="*"
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
