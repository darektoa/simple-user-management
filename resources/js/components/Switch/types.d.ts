import React, {DetailedHTMLProps, HTMLAttributes } from 'react';

export type SwitchProps = {
    children?: React.ReactNode;
    className?: string;
    defaultValue?: boolean;
    name?: string;
    onChange?: (value: boolean) => void;
    onClick?: CallableFunction;
    thumbClassName?: string;
    isDisabled: boolean
};
