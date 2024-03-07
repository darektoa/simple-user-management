import './style.css';
import { NavLink, Outlet } from 'react-router-dom';
import { usePage } from '@inertiajs/react';
import App from '@/components/App';
import Divider from '@/components/Divider';
import imageBrandLogo from '@/assets/images/brand-logo.png';
import Icon from '@/components/Icon';
import React from 'react';

function Sidebar() {
    return (
        <section className="sidebar-layout">
            <nav className="sidebar-layout__nav scrollbar-thin">
                <figure className="sticky top-0 w-full bg-inherit px-4 py-7">
                    <img
                        src={imageBrandLogo}
                        alt="Brand Logo"
                        className="w-ful mx-auto object-contain"
                    />
                    <figcaption className="text-center text-xs font-bold text-red-700">
                        PT Hanatekindo Mulia Abadi
                    </figcaption>
                </figure>

                <ul className="sidebar-layout__nav__menu">
                    <li>
                        <NavLink
                            reloadDocument
                            to="/"
                            className="sidebar-layout__nav__menu__item"
                        >
                            <Icon.FeatherIcon.Home className="mr-3" />
                            <span className="text-sm font-semibold">
                                Dashboard
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            reloadDocument
                            to="/users"
                            className="sidebar-layout__nav__menu__item"
                        >
                            <Icon.FeatherIcon.Users className="mr-3" />
                            <span className="text-sm font-semibold">Users</span>
                        </NavLink>
                    </li>
                </ul>

                <Divider className="my-6 border-gray-800/10" />

                <ul className="sidebar-layout__nav__menu">
                    <li>
                        <NavLink
                            reloadDocument
                            to="/sign-out"
                            className="sidebar-layout__nav__menu__item"
                        >
                            <Icon.FeatherIcon.Logout className="mr-3 stroke-red-600" />
                            <span className="text-sm font-semibold text-red-600">
                                Sign Out
                            </span>
                        </NavLink>
                    </li>
                </ul>

                <small className="mt-auto w-full pt-12 text-center text-xs text-gray-400">
                    Version: 1.0.0-Alpha
                </small>
            </nav>

            <section className="content">
                <App.Header className="mb-1 px-6" />

                <div className="content__body">
                    <Outlet />
                </div>
            </section>
        </section>
    );
}

export default Sidebar;
