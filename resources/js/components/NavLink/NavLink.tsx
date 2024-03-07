import './style.css';
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { NavLinkProps, NavLinkReturn } from './types';
import Str from '@/utilities/Str';

function NavLink(props: NavLinkProps): NavLinkReturn {
    const [isActive, setIsActive] = useState(false);
    const { pathname } = useLocation();
    const [search] = useSearchParams();
    const {
        activeExactSearch,
        activeWithSearch,
        children,
        className,
        ...attrs
    } = props;

    const loadHandler = useCallback(() => {
        const baseUrl = Str.baseUrl(window?.location?.href || '');
        const redirectUrl = new URL(attrs.href, baseUrl);
        const redirectSearch = redirectUrl.searchParams;
        const combinedSearch = new URLSearchParams(
            `${search.toString()}&${redirectSearch.toString()}`,
        );
        let isMatch = pathname === redirectUrl.pathname;

        if (isMatch && activeExactSearch) {
            const keys = new Set(combinedSearch.keys());
            keys.forEach((key) => {
                const searchStr = search.getAll(key).sort().join(',');
                const redirectSearchStr = redirectSearch
                    .getAll(key)
                    .sort()
                    .join(',');
                if (searchStr !== redirectSearchStr) isMatch = false;
            });
        } else if (isMatch && activeWithSearch) {
            const keys = new Set(redirectSearch.keys());
            keys.forEach((key) => {
                const searchValues = search.getAll(key);
                const redirectSearchValues = redirectSearch.getAll(key);
                const filtered = redirectSearchValues.filter((value) =>
                    searchValues.includes(value),
                );
                if (filtered.length === 0) isMatch = false;
            });
        }

        setIsActive(isMatch);
    }, [activeExactSearch, activeWithSearch, pathname, search, attrs]);

    useEffect(() => {
        loadHandler();
    }, [loadHandler]);

    return (
        <a
            {...attrs}
            className={Str.joinWithSpace(className, isActive ? 'active' : '')}
        >
            {children}
        </a>
    );
}

export default NavLink;
