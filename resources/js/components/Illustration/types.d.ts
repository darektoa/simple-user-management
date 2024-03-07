import type { FC, HTMLAttributes, JSX } from 'react';

export type IllustrationProps = HTMLAttributes<Element> & {
    path: string;
};

export type IllustrationReturn = JSX.Element;
