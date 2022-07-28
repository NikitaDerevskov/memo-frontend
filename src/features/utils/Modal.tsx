import { ReactChild, ReactFragment, ReactPortal } from 'react';

type TestT = { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined };

function Modal(props: TestT) { // TODO refactor type
  const { children } = props;
  /* TODO refactor styles, this only for test purpose */
  return (
    <div className="modal">
      <div className="modal-wrapper">
        <div className="modal-container">
          Modal
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
