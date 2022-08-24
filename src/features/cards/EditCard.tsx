import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Api from '../../common/api';
import Header from '../header/Header';
import { PrimaryButton } from '../utils/PrimaryButton';

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
        <Header pageName={ `${title} card`} backRoute={{ to: `/folder/${folderId}`, options: { state: { id: folderId } } }}/>
        <main className="container h-screen flex flex-col align-middle items-center">
          <div className="create-card-title flex flex-col space-y-4 mt-4">
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
          <div className="create-card-content flex flex-col space-y-4 mt-4">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              value={cardData.content}
              onChange={(event) => {
                setCardData({ ...cardData, content: event.target.value });
              }}
            />
          </div>
          <PrimaryButton text="Edit" onClick={handleClick} className="max-w-xs mt-4 mb-4" />
        </main>
      </>
  );

  return (
    editCardJsx
  );
}

export default EditCard;
