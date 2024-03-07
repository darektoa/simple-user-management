import type { FC, HTMLAttributes, JSX, SyntheticEvent } from 'react';
import type { TOption } from '../Option/types';

export type SelectProps = HTMLAttributes<Element> & {
    children?: Iterable<TOption>;
    onBlur?: (event: SyntheticEvent) => void;
    onFocus?: (event: SyntheticEvent) => void;
    placeholder?: string;
};

export type SelectReturn = JSX.Element;
