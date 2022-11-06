import React, { useEffect } from 'react';
import "../../styles/credits.css"

export default function CreditGroup(props) {
    useEffect(() => {
        if (typeof document !== `undefined`) {
        }
    });

    return <div className="group-credit">
            {props.properties.title != null ? <h4>{props.properties.title}</h4> : <div/>}
            <ul>
                {props.properties.credits.map((credit) => {
                    return <li>{credit}</li>
                })}
            </ul>
            </div>
}
