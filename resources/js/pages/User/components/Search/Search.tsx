import './style.css';
import type { SearchProps } from './types';
import { useSearchParams } from 'react-router-dom';
import React, { InputHTMLAttributes, SyntheticEvent, useMemo } from 'react';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Str from '@/utilities/Str';

function Search(props: SearchProps) {
    const { className } = props;
    const [searchParams, setSearchParams] = useSearchParams(
        new URLSearchParams({
            search: '',
        }),
    );

    const search = useMemo(() => searchParams.get('search'), [searchParams]);

    const searchChangeHandle = (e: SyntheticEvent) => {
        const target = e.target as HTMLInputElement;
        searchParams.set('search', target.value);
        setSearchParams(searchParams);
    };

    const reloadHandle = (e: SyntheticEvent) => {
        e.preventDefault();
        window.location.reload();
    };

    return (
        <form
            className={Str.joinWithSpace(
                'affiliator-request-component-search',
                className,
            )}
            onSubmit={reloadHandle}
        >
            <input
                className="mr-2 grow rounded-lg border border-gray-200 px-2"
                type="text"
                placeholder="Search here . . ."
                value={search || undefined}
                onChange={searchChangeHandle}
            />
            <Button
                type="submit"
                className="border border-gray-200 bg-white p-2 shadow-none"
            >
                <Icon.FeatherIcon.Search className="h-5 w-5" />
            </Button>
        </form>
    );
}

export default Search;
