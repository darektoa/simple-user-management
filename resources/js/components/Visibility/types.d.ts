import type { FC, HTMLAttributes, JSX } from 'react';

export type VisibilityProps = HTMLAttributes<Element> & {
    hidden?: boolean;
    value?: any;
};

export type VisibilityReturn = JSX.Element;