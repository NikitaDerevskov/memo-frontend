import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Folders from "./features/folders/Folders";
import Welcome from "./features/auth/Welcome";
import Login from "./features/auth/Login";
import Registration from "./features/auth/Registration";
import Folder from "./features/folders/Folder";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="login" element={<Login />} />
              <Route path="registration" element={<Registration />} />
              <Route path="main" element={<Folders />} />
              <Route path="folder" element={<Folder />}>
                  <Route path=":ifolderId" element={<Folder />} />
              </Route>
              <Route
                  path="*"
                  element={
                      <main style={{ padding: "1rem" }}>
                          <p>There's nothing here!</p>
                      </main>
                  }
              />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
