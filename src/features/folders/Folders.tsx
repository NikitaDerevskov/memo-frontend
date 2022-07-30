import { useEffect, useState } from 'react';
import Api from '../../common/api';
import FoldersTable from './FoldersTable';
import Header from '../header/Header';
import { FolderT } from '../../common/types';

function Folders() {
  const [folders, setFolders] = useState([]);

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

  return (
    <>
      <Header />
      <div className="folders">
        Folders
        <FoldersTable folders={folders} deleteAction={deleteAction}/>
      </div>
    </>
  );
}

export default Folders;
