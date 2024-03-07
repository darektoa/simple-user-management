import './style.css';
import type { ListProps } from './types';
import { cloneElement } from 'react';
import Str from '@/utilities/Str';

function List(props: ListProps) {
    const { children, className, ...attrs } = props;

    return (
        <div
            {...attrs}
            className={Str.joinWithSpace('option-list-component', className)}
        >
            {children}
        </div>
    );
}

export default List;
