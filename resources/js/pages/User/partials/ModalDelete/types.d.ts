import type { FC, HTMLAttributes, JSX } from 'react';
import type { ModalProps } from '@/components/Modal/types';

export type ModalDeleteProps = ModalProps & {
    onClose?: CallableFunction;
    onSubmit?: CallableFunction;
}