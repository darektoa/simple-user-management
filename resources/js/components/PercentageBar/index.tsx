import './style.css';
import { memo } from 'react';
import { PercentageBarProps } from './types';
import Str from '@/utilities/Str';

function PercentageBar({
    children,
    percentage,
    className,
    wrapperClassName,
}: PercentageBarProps) {
    return (
        <div
            className={Str.joinWithSpace(
                'percentage-bar-component',
                wrapperClassName,
            )}
        >
            <div
                style={{ width: percentage }}
                className={Str.joinWithSpace(
                    'percentage-bar-component__bar',
                    className,
                )}
            >
                {children}
            </div>
        </div>
    );
}

export default memo(PercentageBar);
