import { HTMLAttributes, JSX } from 'react';

export type StatusProps = HTMLAttributes<Element> & {
    code?: string | number;
    value?: string | number;
};

export type StatusReturn = JSX.Element;