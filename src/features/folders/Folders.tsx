import {useEffect, useState} from "react";
import Api from "../../common/api";
import {Link} from "react-router-dom";
import FoldersTable from "./FoldersTable";

function Folders() {
    let [folders, setFolders] = useState([])

    useEffect(() => {
        Api.getFolders()
            .then(({data}: any) => {
                setFolders(data)
            })
            .then(() => {
                console.log('f', folders)
            })
            .catch((e: { response: { data: any; }; }) => alert(e.response.data))
    }, [])

    return (
        <div className="folders">
            {'Folders'}
            <FoldersTable />
            {/* TODO export type */}
            { folders.map(({id, title, created}: {id: number, title: string, created: string}) =>
                <Link
                    style={{ display: "block", margin: "1rem 0" }}
                    to={{
                        pathname: `/folder/${id}`
                    }}
                    state={{id, title, created}}
                    key={id}>
                    {title}
                </Link>
            )}
        </div>
    );
}

export default Folders;
