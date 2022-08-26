import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../utils/Modal";
import Api from "../../common/api";
import Header from "../header/Header";
import { PrimaryButton } from "../utils/PrimaryButton";

/* TODO add validation */
/* TODO refactor work to state from url it will be better */
function CreateCard({ title, content, last_modified }: any) {
  /* TODO fix type */
  const isCardExisted = Boolean(last_modified);
  const location = useLocation();
  const { id } = location.state as any;

  const navigate = useNavigate();

  /* TODO add work with loading and error */
  const [isLoading, setIsLoading] = useState(false);
  console.log("isLoading", isLoading);
  const [err, setError] = useState("");
  console.log("err", err);
  const [cardData, setCardData] = useState({ title, content, last_modified });

  const handleClick = async () => {
    try {
      /* TODO think about last_modified - now this is undefined */
      const response = await Api.createCard({ folderId: id, ...cardData });

      navigate(`/folder/${id}`, { state: { id } });
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

  const newCardJsx = (
    <>
      <Header
        pageName="New card"
        backRoute={{ to: `/folder/${id}`, options: { state: { id } } }}
      />
      <main className="container h-screen flex flex-col align-middle items-center">
        <div className="create-card-title flex flex-col space-y-4 mt-4">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Cuber Punk"
            onChange={(event) => {
              setCardData({ ...cardData, title: event.target.value });
            }}
          />
        </div>
        <div className="create-card-content flex flex-col space-y-4 mt-4">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            placeholder="V going to change the world"
            onChange={(event) => {
              setCardData({ ...cardData, content: event.target.value });
            }}
          />
        </div>
        <PrimaryButton
          text="Create"
          onClick={handleClick}
          className="max-w-xs mt-4 mb-4"
        />
      </main>
    </>
  );

  const existedCardJsx = (
    <Modal>
      <>
        <div className="create-card-title">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Cuber Punk"
            value={title}
          />
        </div>
        <div className="create-card-content">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            placeholder="V going to change the world"
            value={content}
          />
        </div>
        <div className="create-card-last_modified">{last_modified}</div>
        <button className="create-card-edit">Edit</button>
      </>
    </Modal>
  );
  return isCardExisted ? existedCardJsx : newCardJsx;
}

export default CreateCard;
