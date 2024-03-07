import type { FC, HTMLAttributes, JSX } from 'react';

export type ToastProps = HTMLAttributes<Element> & {
    duration: number;
    onHide?: CallableFunction;
    show: boolean;
    value?: any;
};

export type ToastReturn = JSX.Element;