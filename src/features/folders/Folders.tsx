import { useEffect, useState } from 'react';
import Api from '../../common/api';
import FoldersTable from './FoldersTable';
import Header from '../header/Header';
import { FolderT } from '../../common/types';
import { useNavigate } from 'react-router-dom';

function Folders() {
  const [folders, setFolders] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    Api.getFolders()
      .then(({ data }: any) => {
        setFolders(data);
      })
      .then(() => {
        console.log('f', folders);
      })
      .catch((e: { response: { data: any; }; }) => alert(e.response.data));
  }, []);

  const deleteAction = async (folderId: number) => {
    /* TODO add error handling */
    await Api.deleteFolder(folderId);
    setFolders((folders => folders.filter((folder: FolderT) => folder.id !== folderId)));
  };

  const createFolderHandler = () => {
    /* TODO rethink */
    navigate('/folder/new');
  };

  return (
    <>
      <Header />
      <div className="folders">
        Folders
        <button onClick={createFolderHandler}>Create new folder</button>
        <FoldersTable folders={folders} deleteAction={deleteAction}/>
      </div>
    </>
  );
}

export default Folders;
