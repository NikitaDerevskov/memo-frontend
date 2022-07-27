import { ReactChild, ReactFragment, ReactPortal } from "react"

function Modal(props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }) { // TODO refactor type

    /* TODO refactor styles, this only for test purpose */
    return (
        <div className="modal">
            <div className="modal-wrapper">
                <div className="modal-container">
                    {'Modal'}
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Modal
