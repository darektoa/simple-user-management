import './style.css';
import type { CardProps } from './types';
import React from 'react';
import Str from '@/utilities/Str';

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
    const { children, className, disabled, ...attrs } = props;

    return (
        <div
            {...attrs}
            ref={ref}
            className={Str.joinWithSpace(
                'card-component',
                className,
                disabled && 'card-component--disabled',
            )}
        >
            {children}
        </div>
    );
});

export default Card;
