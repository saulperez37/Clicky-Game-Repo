import React from 'react';
import "./ImageContainer.css";

const ImageContainer = (props) => {
    return (
        <div className="card col-sm-6">
            <div className="img-container">
            <img alt={props.name} src={props.image} />
            </div>
        </div>
    );
};

export default ImageContainer;