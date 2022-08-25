import { ReactChild, ReactFragment, ReactPortal } from 'react';

type TestT = { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined };

function Modal(props: TestT) { // TODO refactor type
  const { children } = props;
  /* TODO refactor styles, this only for test purpose */
  return (
    <div className="modal h-max">
      <div className="modal-wrapper w-full">
        <div className="modal-container flex flex-col items-center">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
