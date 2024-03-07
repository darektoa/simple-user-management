import type { FC, HTMLAttributes, JSX } from 'react';

export type CardProps = HTMLAttributes<Element> & {
    disabled?: boolean;
};

export type CardReturn = JSX.Element;