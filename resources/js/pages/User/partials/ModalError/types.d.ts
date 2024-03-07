import type { FC, HTMLAttributes, JSX } from 'react';
import type { ModalProps } from '@/components/Modal/types';

export type ModalErrorProps = ModalProps & {
    data?: any;
    onClose?: CallableFunction;
}