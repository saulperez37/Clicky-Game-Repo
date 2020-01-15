import React from 'react';
import "./Header.css"

const Header = (props) => {
    return (
        <div className="header"> 
        <h1>{props.children}</h1>
        </div>
    );
};

export default Header;