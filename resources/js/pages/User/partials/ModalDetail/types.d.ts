import type { FC, HTMLAttributes, JSX } from 'react';
import type { ModalProps } from '@/components/Modal/types';

export type ModalDetailProps = ModalProps & {
    data?: null | UserItem;
    onClose?: CallableFunction;
    onChange?: CallableFunction;
    onSubmit?: CallableFunction;
}