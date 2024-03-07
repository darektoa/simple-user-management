import './style.css';
import type { DividerProps } from './types';
import React from 'react';
import Str from '@/utilities/Str';

function Divider(props: DividerProps) {
    const { className, ...attrs } = props;

    return (
        <hr
            {...attrs}
            className={Str.joinWithSpace('divider-component', className)}
        />
    );
}

export default Divider;
