import type { FC, ButtonHTMLAttributes, JSX } from 'react';

export type ButtonProps = ButtonHTMLAttributes & {
    disabled?: boolean;
    hidden?: boolean;
    value?: any;
};

export type ButtonReturn = JSX.Element;