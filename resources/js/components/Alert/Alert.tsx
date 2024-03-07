import './style.css';
import type { AlertProps } from './types';
import React from 'react';
import Str from '@/utilities/Str';
import Visibility from '@/components/Visibility';

function Alert(props: AlertProps) {
    const { children, className, hidden, value, ...attrs } = props;

    return (
        <Visibility hidden={hidden}>
            <div
                {...attrs}
                className={Str.joinWithSpace('alert-component', className)}
            >
                {children || value}
            </div>
        </Visibility>
    );
}

export default Alert;
