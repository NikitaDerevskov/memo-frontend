import Modal from "../utils/Modal";
import {useState} from "react";
import Api from "../../common/api";
import {CardT} from "../../common/types";

/* TODO add validation */
function EditCard({folderId, title, content, last_modified, showEditModal}: any) {/* TODO fix type*/

    let isCardExisted = Boolean(last_modified)

    /* TODO add work with loading and error */
    const [isLoading, setIsLoading] = useState(false);
    const [err, setError] = useState('');
    const [cardData, setCardData] = useState({title, content, last_modified});

    const handleClick = async () => {
        try {
            /* TODO think about last_modified - now this is undefined */
            console.log('TO SEND', folderId, cardData)
            const response = await Api.createCard({folderId, ...cardData})

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            showEditModal(false)
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
