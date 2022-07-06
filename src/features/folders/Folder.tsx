import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Api from "../../common/api";
import {CardT, FolderT} from "../../common/types";
import CardsTable from "./CardsTable";
import Header from "../header/Header";
import Modal from "../utils/Modal";

function Folder() {
    let location = useLocation();
    const {id} =  location.state as FolderT

    let [cards, setCards] = useState([])
    let [currentCard, setCurrentCard] = useState(0)
    let [showModal, setShowModal] = useState(false)
    let [showContent, setShowContent] = useState(false)
    let navigate = useNavigate();

    /* TODO refactor component - to not fetch data every time */
    /* TODO refactor to async await */
    /* TODO add loading status and error */
    useEffect(() => {
        Api.getFolderCards(id)
            .then(({data}: any) => {
                setCards(data)
            })
            .catch((e: { response: { data: any; }; }) => alert(e.response.data))
    }, [id])

    let card = ({title, content}: CardT, showContent: boolean) => {
        return <div>{title} {showContent && content}</div>
    }

    return (
        <>
        <Header />
        <div className="folder">
                {'Cards'}
                <button onClick={() => {setShowModal(true)}}>Repeat</button>
                <button onClick={() => {
                    /* TODO rethink */
                    navigate(`/folder/${id}/card/new`, { state: { id} });
                }}>Create Card</button>
                <CardsTable cards={cards} />

            </div>
            {/* TODO create another component - card modal with this data */}
            {showModal &&
                <Modal>
                    <div>{currentCard + 1}/{cards.length}</div>
                    {card(cards[currentCard], showContent)}
                    {'Modal example text'}
                    <button onClick={() => setShowContent(true)}>SHOW</button>
                    <div className="pagination">
                        {/* TODO work with pagination better */}
                        <button className="previous" onClick={() => {
                            setCurrentCard(currentCard - 1)
                            setShowContent(false)
                        }
                        }>
                            {'<'}
                        </button>
                        <button className="next" onClick={() => {
                            setCurrentCard(currentCard + 1)
                            setShowContent(false)
                        }}>
                            {'>'}
                        </button>
                    </div>
                    <button onClick={() => {
                        setShowModal(false)
                        setCurrentCard(0)
                    }}>CLOSE</button>
                </Modal>}
        </>
    );
}

export default Folder;
