import Card from "../cards/Card";

function Folder() {
    return (
        <div className="folder">
            {'Folder'}
            <Card />
            {/* Can work with multiply cards in one time? For example just change card state */}
        </div>
    );
}

export default Folder;