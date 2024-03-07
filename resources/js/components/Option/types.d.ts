import type { FC, OptionHTMLAttributes, JSX, SyntheticEvent } from 'react';
import type { TList } from './List/types';

export type OptionProps = OptionHTMLAttributes<Element> & {
    selected?: boolean;
};

export type OptionReturn = JSX.Element;

export interface TOption {
    (props: OptionProps): OptionReturn;
    List: TList;
}
