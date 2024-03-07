import './style.css';
import type { HeaderProps } from './types';
import React from 'react';
import Str from '@/utilities/Str';

function Header(props: HeaderProps) {
    const { children, className, ...attrs } = props;

    return (
        <header
            {...attrs}
            className={Str.joinWithSpace('header-component', className)}
        >
            {children}
        </header>
    );
}

export default Header;
