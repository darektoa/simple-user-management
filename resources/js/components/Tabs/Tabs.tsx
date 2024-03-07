import './style.css';
import type { TabsProps } from './types';
import React from 'react';
import Str from '@/utilities/Str';

function Tabs(props: TabsProps) {
    const { children, className, indicatorClassName, ...attrs } = props;

    return (
        <div
            {...attrs}
            className={Str.joinWithSpace('tabs-component', className)}
        >
            {children}
            <div
                className={Str.joinWithSpace(
                    'tabs-component__indicator',
                    indicatorClassName,
                )}
            />
        </div>
    );
}

export default Tabs;
