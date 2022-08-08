import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from '../utils/Modal';
import Api from '../../common/api';

/* TODO add validation */
/* TODO refactor work to state from url it will be better */
function editFolder() { /* TODO fix type */
  const navigate = useNavigate();
  const location = useLocation();

  const { title, id } = location.state as any; /* TODO add type */

  /* TODO add work with loading and error */
  const [isLoading, setIsLoading] = useState(false);
  const [err, setError] = useState('');
  console.log(isLoading, err, id);
  const [folderTitle, setFolderTitle] = useState(title);

  const handleClick = async () => {
    try {
      const response = await Api.editFolder(folderTitle, id);
      /* TODO add error handling */
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
            value={folderTitle}
            onChange={(event) => {
              setFolderTitle( event.target.value );
            }}
          />
        </div>
        <button className="edit-folder-button" onClick={handleClick}>Edit</button>
      </>
    </Modal>

  );

  return (
    createFolderJsx
  );
}

export default editFolder;

