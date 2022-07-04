import {useEffect, useState} from "react";
import Api from "../../common/api";
import FoldersTable from "./FoldersTable";
import Header from "../header/Header";

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
        <>
            <Header />
            <div className="folders">
                {'Folders'}
                <FoldersTable folders={folders} />
            </div>
        </>
    );
}

export default Folders;
