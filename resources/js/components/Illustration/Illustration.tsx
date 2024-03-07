import './style.css';
import type { IllustrationProps } from './types';
import React from 'react';
import Str from '@/utilities/Str';

function Illustration(props: IllustrationProps) {
    const { className, path, ...attrs } = props;

    return (
        <div
            {...attrs}
            className={Str.joinWithSpace('illustration-component', className)}
            style={{ backgroundImage: `url('/illustrations/${path}')` }}
        />
    );
}

export default Illustration;
