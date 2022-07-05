
import {CardT} from "../../common/types";
import Modal from "../utils/Modal";

function EditCard({title, content, last_modified}: CardT) {

    let isCardExisted = Boolean(last_modified)

    let newCardJsx = (
        <Modal>
            <>
                <div className="create-card-title">
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" placeholder="Cuber Punk"/>
                </div>
                <div className="create-card-content">
                    <label htmlFor="content">Content</label>
                    <textarea id="content" placeholder="V going to change the world"/>
                </div>
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
            </>
        </Modal>
    )
    return (
        isCardExisted ? existedCardJsx : newCardJsx
    );
}

export default EditCard;
