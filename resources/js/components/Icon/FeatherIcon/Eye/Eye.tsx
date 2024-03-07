import './style.css';
import type { IconProps } from '../types';
import React from 'react';
import Str from '@/utilities/Str';

function Users(props: IconProps) {
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
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle
                cx="12"
                cy="12"
                r="3"
            />
        </svg>
    );
}

export default Users;
