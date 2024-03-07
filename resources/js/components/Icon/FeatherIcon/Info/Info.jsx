import './style.css';
import React from 'react';
import Str from '@/utilities/Str';

function Link(props) {
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
            <circle
                cx="12"
                cy="12"
                r="10"
            ></circle>
            <line
                x1="12"
                y1="16"
                x2="12"
                y2="12"
            ></line>
            <line
                x1="12"
                y1="8"
                x2="12.01"
                y2="8"
            ></line>
        </svg>
    );
}

export default Link;
