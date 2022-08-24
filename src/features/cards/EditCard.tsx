import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Api from '../../common/api';
import Header from '../header/Header';

/* TODO add validation */
/* TODO refactor work to state from url it will be better */
function EditCard() { /* TODO fix type */
  const location = useLocation();
  const { folderId,  id, title, content, last_modified: lastModified } = location.state as any;

  const navigate = useNavigate();

  /* TODO add work with loading and error */
  const [isLoading, setIsLoading] = useState(false);
  console.log('isLoading', isLoading);
  const [err, setError] = useState('');
  console.log('err', err);
  const [cardData, setCardData] = useState({ title, content, last_modified: lastModified, id });

  const handleClick = async () => {
    try {
      /* TODO think about last_modified - now this is undefined */
      const response = await Api.editCard(cardData.title, cardData.content, cardData.id);

      navigate(`/folder/${folderId}`, { state: { id: folderId } });
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
    } catch (err: any) { /* TODO fix type */
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const editCardJsx = (
      <>
        <Header pageName="New Folder" backRoute={{ to: `/folder/${folderId}`, options: { state: { id: folderId } } }}/>
        <div className="create-card-title">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={cardData.title}
            onChange={(event) => {
              setCardData({ ...cardData, title: event.target.value });
            }}
          />
        </div>
        <div className="create-card-content">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={cardData.content}
            onChange={(event) => {
              setCardData({ ...cardData, content: event.target.value });
            }}
          />
        </div>
        <button className="create-card-edit" onClick={handleClick}>Create</button>
      </>
  );

  return (
    editCardJsx
  );
}

export default EditCard;
