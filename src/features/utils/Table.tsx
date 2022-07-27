type TableT = {
    children: JSX.Element,
    fetchAction: () => void,
}

function Table({ children, fetchAction }: TableT) {
  return (
    <>
      { children }
      {/* TODO don't show pagination if count <= limit */}
      <div className="pagination">
        {/* TODO use good function like in hooks tutorial :) */}
        {/* TODO add disabled when needed */}
        <button onClick={() => fetchAction()}>{'<'}</button>
        0 from 5
        <button onClick={() => fetchAction()}>{'>'}</button>
      </div>
    </>
  );
}

export default Table;
