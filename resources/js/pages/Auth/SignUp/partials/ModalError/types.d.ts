import type { FC, HTMLAttributes, JSX } from 'react';
import type { ModalProps } from '@/components/Modal/types';

export type ModalErrorProps = ModalProps & {
    data?: string | object;
    onClose?: CallableFunction;
}