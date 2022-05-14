import Folder from "./Folder";
import {useEffect, useState} from "react";
import Api from "../../common/api";
import {Link} from "react-router-dom";

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

    // @ts-ignore
    return (
        <div className="folders">
            {'Folders'}
            { folders.map(({id, title, created}: {id: number, title: string, created: string}) =>
                // <Folder id={id} title={title} created={created} key={id} />
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