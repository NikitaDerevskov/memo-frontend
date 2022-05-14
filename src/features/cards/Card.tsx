
type Card = {
    id: number,
    title: string,
    content: string,
    last_modified: string,
    showContent: boolean
}
// TODO export type Card

function Card({id, title, content, last_modified, showContent, onClick} :any) {
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