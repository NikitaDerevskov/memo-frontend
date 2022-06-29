function Table(props: { children: any }) { /* TODO change type to good */
    return (
        <>
            { props.children }
            {/* TODO don't show pagination if count <= limit */}
            <div className="pagination">
                {/* TODO use good function like in hooks tutorial :) */}
                {/* TODO add disabled when needed */}
                <button>{'<'}</button>
                {'0 from 5'}
                <button>{'>'}</button>
            </div>
        </>)
}

export default Table
