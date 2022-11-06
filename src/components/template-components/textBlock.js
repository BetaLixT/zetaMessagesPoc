import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown'

export default function TextBlock(props) {
    useEffect(() => {
        if (typeof document !== `undefined`) {
        }
    });

    if (props?.properties?.text == null){
        return null;
    }

    return(
        <ReactMarkdown>{props.properties.text}</ReactMarkdown>
    );
}