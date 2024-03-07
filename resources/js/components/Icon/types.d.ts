import type { TFeatherIcon } from './FeatherIcon/types';
import type React, { FC, HTMLAttributes, JSX } from 'react';

export type IconProps = HTMLAttributes<Element> & {
    path: string;
};

export type IconReturn = JSX.Element;

export interface TIcon extends FC<IconProps> {
    FeatherIcon: TFeatherIcon;
}
