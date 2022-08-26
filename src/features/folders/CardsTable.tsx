import Table from "../utils/Table";
import { CardT } from "../../common/types";
import { Link } from "react-router-dom";
import deleteIcon from "../../common/img/icons/delete.svg";
import editSquare from "../../common/img/icons/edit-square.svg";

function CardTable({ folderId, cards, deleteAction }: any) {
  /* TODO add good type */
  const fetchAction = () => {
    console.log("fetchAction");
  };

  console.log("cards", cards);
  return (
    <div>
      <Table fetchAction={fetchAction}>
        <table className="w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>LastModified</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cards.map(({ id, title, content, last_modified }: CardT) => (
              <tr key={id}>
                <td>{title}</td>
                <td className="text-center">
                  {new Date(last_modified).toLocaleString()}
                </td>
                <td>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={{ pathname: `/folder/${folderId}/card/${id}/edit` }}
                    state={{ id, title, content, folderId }}
                  >
                    <img src={editSquare} className="w-8 mx-auto" alt="edit" />
                  </Link>
                </td>
                <td>
                  <img
                    onClick={() => {
                      deleteAction(id);
                    }}
                    src={deleteIcon}
                    className="w-8 mx-auto cursor-pointer"
                    alt="delete"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Table>
    </div>
  );
}

export default CardTable;
