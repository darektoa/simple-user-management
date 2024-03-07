import './style.css';
import type { StatusProps } from './types';
import React from 'react';
import Str from '@/utilities/Str';

function Status(props: StatusProps) {
    const { className, children, code, value, ...attrs } = props;
    const colors = {
        0: 'text-gray-500',
        1: 'text-green-500',
        2: 'text-yellow-500',
    };

    const color = colors[code as keyof typeof colors] || colors[0];

    return (
        <span
            {...attrs}
            className={Str.joinWithSpace(color, className)}
        >
            {children || value}
        </span>
    );
}

export default Status;
