import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../utils/Modal';
import Api from '../../common/api';

/* TODO add validation */
/* TODO refactor work to state from url it will be better */
function createFolder() { /* TODO fix type */
  const navigate = useNavigate();

  /* TODO add work with loading and error */
  const [isLoading, setIsLoading] = useState(false);
  const [err, setError] = useState('');
  console.log(isLoading, err);
  const [folderTitle, setFolderTitle] = useState('');

  const handleClick = async () => {
    try {
      const response = await Api.createFolder(folderTitle);
      // TODO return from createfolder folder id and move to it.
      navigate('/main');

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
    } catch (err: any) { /* TODO fix type */
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const createFolderJsx = (
    <Modal>
      <>
        <div className="edit-folder-button">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Cuber Punk"
            onChange={(event) => {
              setFolderTitle( event.target.value );
            }}
          />
        </div>
        <button className="edit-folder-button" onClick={handleClick}>Create</button>
      </>
    </Modal>

  );

  return (
    createFolderJsx
  );
}

export default createFolder;
