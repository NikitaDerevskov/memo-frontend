import { Link } from 'react-router-dom';
import Table from '../utils/Table';
import { FolderT } from '../../common/types';
import editSquare from '../../common/img/icons/edit-square.svg';

function FoldersTable(props: any) { /* TODO add good type */
  let { folders, deleteAction }: { folders: FolderT[], deleteAction: (id: number) => void } = props;
  const fetchAction = () => { console.log('fetchAction'); };

  console.log('folders', folders);

  return (
    <div className="mt-4">
      <Table fetchAction={fetchAction}>
        <table className="w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>Studied/Count</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              folders
                .map(({ id, title, created }: { id: number, title: string, created: string }) => (
                  <tr key={id}>
                    <td>
                      <Link
                        style={{ textDecoration: 'none' }}
                        to={{ pathname: `/folder/${id}` }}
                        state={{ id, title, created }}
                      >
                        {title}
                      </Link>
                    </td>
                    <td className="text-center">
                      ?
                      {' '}
                      {/* TODO - receive from backend studied and count */}
                    </td>
                    <td className="flex justify-center">
                      <Link
                        style={{ textDecoration: 'none' }}
                        to={{ pathname: `/folder/${id}/edit` }}
                        state={{ id, title }}
                      >
                        <img src={editSquare} className="w-8" alt="edit"/>
                      </Link>
                    </td>
                    <td onClick={() => { deleteAction(id); }}>
                      <span className="cursor-pointer">X</span>
                    </td>
                  </tr>
                ))
            }
          </tbody>
        </table>
      </Table>
    </div>
  );
}

export default FoldersTable;
