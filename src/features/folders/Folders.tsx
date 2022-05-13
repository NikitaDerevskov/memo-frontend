import Folder from "./Folder";
import {useEffect, useState} from "react";
import Api from "../../common/api";

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
            { folders.map(({id, title, created}: {id: number, title: string, created: string}) =>
                <Folder id={id} title={title} created={created} key={id} />)}
        </div>
    );
}

export default Folders;