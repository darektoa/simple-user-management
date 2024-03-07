import './style.css';
import type { HeaderProps } from './types';
import React from 'react';
import Str from '@/utilities/Str';

function Header(props: HeaderProps) {
    const { className, ...attrs } = props;

    return (
        <header
            {...attrs}
            className={Str.joinWithSpace('header-app-component', className)}
        >
            <nav className="flex h-10 w-full">
                <ul className="flex h-full w-full items-center text-base">
                    <li>
                        <a
                            href="#"
                            className="font-semibold text-primary-main"
                        >
                            Application
                        </a>
                    </li>
                    {/* <li>
                        <a href="#" className="font-semibold text-gray-600">
                            Dashboard
                        </a>
                    </li> */}
                    <li className="ml-auto">
                        <a
                            href="#profile"
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-accent text-sm font-bold !text-white"
                        >
                            {/* <img src="" alt=" " /> */}A
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
