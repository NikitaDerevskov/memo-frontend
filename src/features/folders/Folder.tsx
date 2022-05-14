import Card from "../cards/Card";
import {useNavigate, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import Api from "../../common/api";
type Folder = {
    id: number,
    title: string,
    created: string
}
// TODO export type Folder

function Folder() {
    let location = useLocation();
    let [showContent, setShowContent] = useState(false)
    let [currentCard, setCurrentCard] = useState(0)
    const {id, title, created} =  location.state as Folder

    let [cards, setCards] = useState([])

    useEffect(() => {
        Api.getFolderCards(id)
            .then(({data}: any) => {
                setCards(data)
            })
            .then(() => {
                console.log('cards', cards)
            })
            .catch((e: { response: { data: any; }; }) => alert(e.response.data))
    }, [])


    let navigate = useNavigate();

    const goBack = () => {
        navigate("/main");
    }
    return (
        <div className="folder">
            {'Folder'}
            <button onClick={goBack}>BACK</button>
            <div>id - {id}</div>
            <div>title - {title}</div>
            <div>created - {created}</div>
            {/* TODO show only one 1 card */}
            {
                cards
                    .map(({id, title, content, last_modified}: Card) =>
                        <Card
                            id={id}
                            title={title}
                            content={content}
                            last_modified={last_modified}
                            showContent={showContent}
                            key={id}
                            onClick={() => setShowContent(!showContent)}
                        />)[currentCard]

            }
            <button onClick={() =>
            {
                setShowContent(false)
                setCurrentCard(currentCard - 1)}}>
                PREVIOUS
            </button>
            <button onClick={() =>
            {
                setShowContent(false)
                setCurrentCard(currentCard + 1)}
            }>NEXT</button>
            {/* TODO add normal routing */}
        </div>
    );
}

export default Folder;