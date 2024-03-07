import type { FC, HTMLAttributes, JSX } from 'react';

export type ModalProps = HTMLAttributes<Element> & {
    onClose?: CallableFunction;
    onShow?: CallableFunction;
    show?: boolean;
    wrapperClassName?: string;
};

export type ModalReturn = JSX.Element;

export interface TModal extends FC<IconProps> {
    Confirm: FC;
}
