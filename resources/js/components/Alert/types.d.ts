import type { FC, HTMLAttributes, JSX } from 'react';

export type AlertProps = HTMLAttributes<Element> & {
    hidden?: boolean;
    value?: any;
};

export type AlertReturn = JSX.Element;