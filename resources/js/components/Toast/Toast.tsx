import './style.css';
import React, { useEffect, useState } from 'react';
import Str from '../../utilities/Str';
import { ToastProps } from './types';

function Toast(props: ToastProps) {
    const { children, className, duration, onHide, show, value, ...attrs } =
        props;
    const [showMe, setShowMe] = useState(show);

    useEffect(() => {
        setShowMe(show);
        if (show) {
            setTimeout(() => {
                setShowMe(false);
                onHide?.();
            }, duration);
        }
    }, [duration, onHide, show]);

    return (
        <section
            {...attrs}
            className={Str.joinWithSpace(
                'toast-component',
                className,
                showMe || 'toast-component--hide',
            )}
        >
            {children || value}
        </section>
    );
}

export default Toast;
