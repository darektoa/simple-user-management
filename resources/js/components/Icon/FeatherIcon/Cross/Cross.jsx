import './style.css';
import React from 'react';
import Str from '@/utilities/Str';

function Cross(props) {
    const { className, ...attrs } = props;

    return (
        <svg
            {...attrs}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={Str.joinWithSpace('feather-icon', className)}
        >
            <line
                x1="18"
                y1="6"
                x2="6"
                y2="18"
            />
            <line
                x1="6"
                y1="6"
                x2="18"
                y2="18"
            />
        </svg>
    );
}

export default Cross;
