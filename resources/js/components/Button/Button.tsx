import './style.css';
import type { ButtonProps } from './types';
import React from 'react';
import Str from '@/utilities/Str';
import Visibility from '../Visibility';

function Button(props: ButtonProps) {
    const { children, className, disabled, hidden, value, ...attrs } = props;

    return (
        <Visibility hidden={hidden}>
            <button
                {...attrs}
                disabled={disabled}
                className={Str.joinWithSpace(
                    'button-component',
                    disabled ? 'disabled' : '',
                    className,
                )}
            >
                {children || value}
            </button>
        </Visibility>
    );
}

export default Button;
