import './style.css';
import { useCallback } from 'react';
import { ModalProps } from './types';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import Str from '../../utilities/Str';

function Modal(props: ModalProps) {
    const {
        children,
        className,
        onClose,
        onShow,
        show,
        wrapperClassName,
        ...attrs
    } = props;
    const [showMe, setShowMe] = useState(show);

    const closeHandle = (event: SyntheticEvent) => {
        if (onClose) onClose();
        setShowMe(false);
    };

    const showHandle = useCallback(() => {
        if (onShow) onShow();
    }, [onShow]);

    useEffect(() => {
        if (new Boolean(show)) showHandle();
        setShowMe(show);
    }, [show, showHandle]);

    return (
        <div
            onClick={closeHandle}
            className={Str.joinWithSpace(
                'wrapper-modal-component',
                showMe || 'wrapper-modal-component--hide',
                wrapperClassName,
            )}
        >
            <section
                {...attrs}
                onClick={(e) => e.stopPropagation()}
                className={Str.joinWithSpace('modal-component', className)}
            >
                {children}
            </section>
        </div>
    );
}

export default Modal;
