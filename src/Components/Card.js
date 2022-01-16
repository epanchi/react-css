import React from "react";
import '../Css/Card.css';

// Generate element by using JSX
function Card(props){
    return(
        <li className="card">
            <span className="card__icon">
                OK
            </span>
            <p className="card__p">
                {props.text}
            </p>
            <span className="card__icon">
                X
            </span>
        </li>

    );
}

// Export 
export { Card }