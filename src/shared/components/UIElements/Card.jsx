import React from 'react';

function Card(props) {
    return (
        <div className="card mx-auto d-flex flex-row text-black shadow-lg bg-white">
            {props.children}
        </div>
    );
}

export default Card;