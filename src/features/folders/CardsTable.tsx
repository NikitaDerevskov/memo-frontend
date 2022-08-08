import Table from '../utils/Table';
import { CardT } from '../../common/types';
import { Link } from 'react-router-dom';

function CardTable({ folderId, cards, deleteAction }: any) { /* TODO add good type */
  const fetchAction = () => { console.log('fetchAction'); };

  console.log('cards', cards);
  return (
    <div>
      <Table fetchAction={fetchAction}>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>LastModified</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              cards.map(({ id, title, content, last_modified }: CardT) => (
                <tr key={id}>
                  <td>
                    {title}
                  </td>
                  <td>
                    {last_modified}
                  </td>
                  <td>
                    <Link
                      style={{ textDecoration: 'none' }}
                      to={{ pathname: `/folder/${folderId}/card/${id}/edit` }}
                      state={{ id, title, content, folderId }}
                    >
                      Edit
                    </Link>
                  </td>
                  <td onClick={() => { deleteAction(id); }}>
                    X
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

export default CardTable;
