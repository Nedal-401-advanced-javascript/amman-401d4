import React from 'react'

import './style.scss';

const Modal = (props) => {
    return (
        <div className="overlay">
            <div className="modal">
                <div className="header">
                    <span className="title">{props.title}</span>
                    <button onClick={props.close}>X</button>
                </div>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Modal;