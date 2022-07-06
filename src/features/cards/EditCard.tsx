import Modal from "../utils/Modal";
import {useState} from "react";
import Api from "../../common/api";
import {CardT} from "../../common/types";
import {useLocation, useNavigate} from "react-router-dom";

/* TODO add validation */
/* TODO refactor work to state from url it will be better */
function EditCard({title, content, last_modified}: any) {/* TODO fix type*/

    let isCardExisted = Boolean(last_modified)
    let location = useLocation();
    let {id} = location.state as any

    let navigate = useNavigate()

    /* TODO add work with loading and error */
    const [isLoading, setIsLoading] = useState(false);
    const [err, setError] = useState('');
    const [cardData, setCardData] = useState({title, content, last_modified});

    const handleClick = async () => {
        try {
            /* TODO think about last_modified - now this is undefined */
            const response = await Api.createCard({folderId: id, ...cardData})

            navigate(`/folder/${id}`, {state: {id}})
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
        } catch (err: any) { /* TODO fix type */
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    let newCardJsx = (
        <Modal>
            <>
                <div className="create-card-title">
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" placeholder="Cuber Punk" onChange={(event) => {
                        setCardData({...cardData, title: event.target.value})
                    }}/>
                </div>
                <div className="create-card-content">
                    <label htmlFor="content">Content</label>
                    <textarea id="content" placeholder="V going to change the world" onChange={(event) => {
                        setCardData({...cardData, content: event.target.value})
                    }}/>
                </div>
                <button className="create-card-edit" onClick={handleClick}>Create</button>
            </>
        </Modal>

    )

    let existedCardJsx = (
        <Modal>
            <>
                <div className="create-card-title">
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" placeholder="Cuber Punk" value={title}/>
                </div>
                <div className="create-card-content">
                    <label htmlFor="content">Content</label>
                    <textarea id="content" placeholder="V going to change the world" value={content}/>
                </div>
                <div className="create-card-last_modified">{last_modified}</div>
                <button className="create-card-edit">Edit</button>
            </>
        </Modal>
    )
    return (
        isCardExisted ? existedCardJsx : newCardJsx
    );
}

export default EditCard;
