import React from 'react';
import SvgFccLogo from './SVG.js';

export default function Title(props) {
    return (
    <div className="title row d-flex align-items-center bg-info m-0 p-1">
        <SvgFccLogo />
        <h2 className="col-10 p-0 m-0">{props.text}</h2>
    </div>
    )
}
