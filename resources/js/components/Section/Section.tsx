import './style.css';
import { SectionProps } from './types';
import React from 'react';
import Str from '@/utilities/Str';
import Visibility from '../Visibility';

function Section(props: SectionProps) {
    const { children, className, hidden, ...attrs } = props;

    return (
        <Visibility hidden={hidden}>
            <section
                {...attrs}
                className={Str.joinWithSpace('sectionComponent', className)}
            >
                {children}
            </section>
        </Visibility>
    );
}

export default Section;
