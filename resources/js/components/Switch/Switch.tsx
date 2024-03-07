import './style.css';
import { SwitchProps } from './types';
import { useEffect, useState } from 'react';
import Str from '@/utilities/Str';

function Switch({
    children,
    className,
    thumbClassName,
    name,
    onClick,
    onChange,
    defaultValue = false,
    isDisabled,
}: SwitchProps) {
    const [state, setState] = useState(defaultValue);

    function handleClick() {
        if (isDisabled) return;

        setState((state) => !state);
        onClick?.();
    }

    useEffect(() => {
        onChange?.(state);
    }, [state]);

    return (
        <div
            className={Str.joinWithSpace(
                'switchComponent',
                isDisabled ? 'disabled' : '',
                state ? 'switchComponent--active' : '',
                className,
            )}
            onClick={handleClick}
        >
            <input
                className="hidden"
                type="radio"
                name={name}
                value={0}
                defaultChecked={state === false}
                aria-hidden="true"
            />
            <input
                className="hidden"
                type="radio"
                name={name}
                value={1}
                defaultChecked={state === true}
                aria-hidden="true"
            />
            <div
                className={Str.joinWithSpace(
                    'switchComponent__thumb',
                    state ? 'switchComponent__thumb--active' : '',
                    thumbClassName,
                )}
            ></div>
        </div>
    );
}

export default Switch;
