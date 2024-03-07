import './style.css';
import type { SelectProps } from './types';
import { Children, SyntheticEvent, useState } from 'react';
import Icon from '../Icon';
import Option from '../Option';
import Str from '@/utilities/Str';

function Select(props: SelectProps) {
    const { children, onBlur, onFocus, placeholder, ...attrs } = props;
    const [showOptions, setShowOptions] = useState(false);

    const selectFocusHandle = (event: SyntheticEvent) => {
        setTimeout(() => setShowOptions(true), 100);
        if (onFocus) onFocus(event);
    };

    const selectBlurHandle = (event: SyntheticEvent) => {
        setShowOptions(false);
        if (onBlur) onBlur(event);
    };

    const selectCoverClickHandle = () => {
        setShowOptions(!showOptions);
    };

    return (
        <div className="select-component">
            <div
                {...attrs}
                className="select-component__select"
                onBlur={selectBlurHandle}
                onFocus={selectFocusHandle}
                role="combobox"
                tabIndex={0}
                aria-haspopup="menu"
            >
                <div
                    className={Str.joinWithSpace(
                        'select-component__select__cover',
                        'select-component__select__cover--active',
                    )}
                    onClick={selectCoverClickHandle}
                />
                <div className="select-component__select__content">
                    {placeholder || Children.toArray(children)?.[0]}
                </div>
                <Icon.FeatherIcon.ChevronDown
                    className={Str.joinWithSpace(
                        'w-6 shrink-0',
                        showOptions ? 'rotate-180' : '',
                    )}
                />
                <Option.List className={showOptions ? '' : 'hidden'}>
                    {children}
                </Option.List>
            </div>

            <select className="hidden">{children}</select>
        </div>
    );
}

export default Select;
