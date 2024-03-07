import type { FC, HTMLAttributes, JSX } from 'react';
import type { ModalProps } from '@/components/Modal/types';

export type ModalAddProps = ModalProps & {
    onChange?: CallableFunction;
    onClose?: CallableFunction;
    onSubmit?: CallableFunction;
};
