import './style.css';
import type { OptionProps } from './types';
import Icon from '../Icon';
import Str from '@/utilities/Str';

function Option(props: OptionProps) {
    const { children, className, selected, ...attrs } = props;

    return (
        <div
            {...attrs}
            role="menuitem"
            className={Str.joinWithSpace('option-component', className)}
        >
            <div className="option-component__content">{children}</div>
            <Icon.FeatherIcon.Check
                className={Str.joinWithSpace(
                    'option-component__selected-icon',
                    selected ? 'option-component__selected-icon--selected' : '',
                )}
            />
        </div>
    );
}

export default Option;
