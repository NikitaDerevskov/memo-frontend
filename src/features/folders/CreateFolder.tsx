import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../common/api";
import Header from "../header/Header";
import { PrimaryButton } from "../utils/PrimaryButton";
import { Input } from "../utils/Input";

/* TODO add validation */
/* TODO refactor work to state from url it will be better */
function createFolder() {
  /* TODO fix type */
  const navigate = useNavigate();

  /* TODO add work with loading and error */
  const [isLoading, setIsLoading] = useState(false);
  const [err, setError] = useState("");
  console.log(isLoading, err);
  const [folderTitle, setFolderTitle] = useState("");

  const handleClick = async () => {
    try {
      const response = await Api.createFolder(folderTitle);
      // TODO return from createfolder folder id and move to it.
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

  /* TODO extract basic structure of create and edit to 1 component */
  /* TODO add styles to all inputs (Maybe create 1 component for all) */
  const createFolderJsx = (
    <>
      <Header backRoute="/main" pageName="New Folder" />
      <main className="container h-screen flex flex-col align-middle items-center">
        <div className="edit-folder-button flex flex-col space-y-4 mt-4">
          <label htmlFor="title">Title</label>
          <Input
            id="title"
            placeholder="Cyber Punk"
            type="text"
            onChange={(event) => {
              setFolderTitle(event.target.value);
            }}
          />
        </div>
        <PrimaryButton
          className="max-w-xs mt-4 mb-4"
          text="Create"
          onClick={handleClick}
        />
      </main>
    </>
  );

  return createFolderJsx;
}

export default createFolder;
