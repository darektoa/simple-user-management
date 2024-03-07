'use client';
import './style.css';
import { PropsWithChildren } from 'react';
import SideMenu from '../SideMenu';

function Content({ children }: PropsWithChildren) {
    return (
        <div className="app__content px-container">
            {/* <SideMenu /> */}
            {children}
        </div>
    );
}

export default Content;
