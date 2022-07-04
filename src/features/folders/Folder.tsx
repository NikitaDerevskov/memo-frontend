import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import Api from "../../common/api";
import {FolderT} from "../../common/types";
import CardsTable from "./CardsTable";
import Header from "../header/Header";

function Folder() {
    let location = useLocation();
    const {id} =  location.state as FolderT

    let [cards, setCards] = useState([])

    useEffect(() => {
        Api.getFolderCards(id)
            .then(({data}: any) => {
                setCards(data)
            })
            .catch((e: { response: { data: any; }; }) => alert(e.response.data))
    }, [])

    return (
        <>
        <Header />
        <div className="folder">
                {'Cards'}
                <button>Repeat</button>
                <CardsTable cards={cards} />
            </div>
        </>
    );
}

export default Folder;
