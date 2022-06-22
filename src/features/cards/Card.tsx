
import {Card} from "../../common/types";

function Card({id, title, content, last_modified, showContent, onClick} : any) {
    return (
        <div className="card" onClick={onClick}>
            {'Card'}
            {id}
            {title}
            {showContent ? content : ''}
            {last_modified}
        </div>
    );
}

export default Card;
