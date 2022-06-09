import React from 'react';

function Avatar(props) {
    return (
        <div className={`avatar ${props.className}`}>
            {/* "img-fluid rounded-circle" */}
            <img
                src={props.src}
                className={`${props.className}`}
                alt={props.alt}
                style={{ width: props.width, height: props.height }}
            />
        </div>
    );
}

export default Avatar;