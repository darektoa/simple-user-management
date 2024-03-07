import type { FC, HTMLAttributes, JSX } from 'react';

export type ConfirmProps = HTMLAttributes<Element> & {
    onClose?: CallableFunction;
    onShow?: CallableFunction;
    onSubmit?: CallableFunction;
    show?: boolean;
    wrapperClassName?: string;
};

export type ConfirmReturn = JSX.Element;
