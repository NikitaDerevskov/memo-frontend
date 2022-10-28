import { Routes, Route, useNavigate } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./features/auth/authSlice";
import Api from "./common/api";

function ProtectedRoutes(currentUser: string) {
  return currentUser ? (
    <>
      <Route element={<Folders />} path="main" />
      <Route path="folder">
        <Route element={<CreateFolder />} path="new" />
        <Route element={<EditFolder />} path=":folderId/edit" />
        <Route element={<Folder />} path=":folderId" />
        <Route element={<CreateCard />} path=":folderId/card/new" />
        <Route element={<EditCard />} path=":folderId/card/:cardId/edit" />
      </Route>
    </>
  ) : null;
}

function App() {
  const currentUser = useSelector((state: any) => state.auth.token); // TODO change type

  const navigate = useNavigate();
  // TODO change to name instead of token

  const dispatch = useDispatch();

  if (!currentUser) {
    const token = localStorage.getItem("token");
    // TODO get current user by token
    if (token) {
      dispatch(setToken(token));
      Api.setToken(token);
    }
  }

  return (
    <Routes>
      <Route element={<Welcome />} path="/" />
      <Route element={<Login />} path="login" />
      <Route element={<Registration />} path="registration" />
      {ProtectedRoutes(currentUser)}
      <Route
        element={
          <main style={{ padding: "1rem" }}>
            <p>{"There's nothing here!"}</p>
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Go to login
            </button>
          </main>
        }
        path="*"
      />
    </Routes>
  );
}

export default App;
