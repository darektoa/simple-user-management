import type { FC, HTMLAttributes, JSX } from 'react';

export type SectionProps = HTMLAttributes<Element> & {
    hidden?: boolean;
};

export type SectionReturn = JSX.Element;