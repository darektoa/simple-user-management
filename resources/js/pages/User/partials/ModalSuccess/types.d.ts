import type { FC, HTMLAttributes, JSX } from 'react';
import type { ModalProps } from '@/components/Modal/types';

export type ModalSuccessProps = ModalProps & {
    data?: any;
    onClose?: CallableFunction;
}