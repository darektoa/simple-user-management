import './style.css';
import React from 'react';
import Str from '@/utilities/Str';

function Briefcase(props) {
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
            <rect
                x="2"
                y="7"
                width="20"
                height="14"
                rx="2"
                ry="2"
            />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
    );
}

export default Briefcase;
