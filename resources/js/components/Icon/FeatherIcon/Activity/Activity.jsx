import './style.css';
import React from 'react';
import Str from '@/utilities/Str';

function Activity(props) {
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
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
    );
}

export default Activity;
