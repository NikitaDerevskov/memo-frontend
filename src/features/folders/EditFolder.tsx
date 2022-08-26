import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Api from "../../common/api";
import Header from "../header/Header";
import { PrimaryButton } from "../utils/PrimaryButton";
import { Input } from "../utils/Input";

/* TODO add validation */
/* TODO refactor work to state from url it will be better */
function editFolder() {
  /* TODO fix type */
  const navigate = useNavigate();
  const location = useLocation();

  const { title, id } = location.state as any; /* TODO add type */

  /* TODO add work with loading and error */
  const [isLoading, setIsLoading] = useState(false);
  const [err, setError] = useState("");
  console.log(isLoading, err, id);
  const [folderTitle, setFolderTitle] = useState(title);

  const handleClick = async () => {
    try {
      const response = await Api.editFolder(folderTitle, id);
      /* TODO add error handling */
      navigate("/main");

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
    } catch (err: any) {
      /* TODO fix type */
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const createFolderJsx = (
    <>
      <Header pageName="New Folder" backRoute="/main" />
      <main className="container h-screen flex flex-col align-middle items-center">
        <div className="edit-folder-button flex flex-col space-y-4 mt-4">
          <label htmlFor="title">Title</label>
          <Input
            id="title"
            type="text"
            value={folderTitle}
            onChange={(event) => {
              setFolderTitle(event.target.value);
            }}
          />
        </div>
        <PrimaryButton
          text="Edit"
          onClick={handleClick}
          className="max-w-xs mt-4 mb-4"
        />
      </main>
    </>
  );

  return createFolderJsx;
}

export default editFolder;
