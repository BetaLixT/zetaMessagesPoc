import React, { useEffect } from 'react';
import Button from "react-bootstrap/Button"

export default function LinkButton(props) {
    useEffect(() => {
        if (typeof document !== `undefined`) {
        }
    });

    if (props?.properties?.link == null){
        return null;
    }
    var buttonText = props?.properties?.text || "Click"
    var variant = props?.properties?.variant || "primary"

    return(
        <Button variant={variant} size="lg" href={props.properties.link} target="_blank">
            {buttonText}
        </Button>
    );
}