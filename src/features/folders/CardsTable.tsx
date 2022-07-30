import Table from '../utils/Table';
import { CardT } from '../../common/types';

function CardTable({ cards, deleteAction }: any) { /* TODO add good type */
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
              cards.map(({ id, title, last_modified }: CardT) => (
                <tr key={id}>
                  <td>
                    {title}
                  </td>
                  <td>
                    {last_modified}
                  </td>
                  <td>
                    Edit
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
