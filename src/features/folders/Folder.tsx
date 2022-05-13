import Card from "../cards/Card";

type Folder = {
    id: number,
    title: string,
    created: string
}
// TODO export type Folder

function Folder({id, title, created}: Folder) {
    console.log(id, title, created)
    return (
        <div className="folder">
            {'Folder'}
            <div>id - {id}</div>
            <div>title - {title}</div>
            <div>created - {created}</div>
            {/*<Card />*/}
        </div>
    );
}

export default Folder;