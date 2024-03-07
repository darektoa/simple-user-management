import './style.css';
import { IconProps, IconReturn } from './types';
import Str from '@/utilities/Str';

function Icon({ className, path, ...attrs }: IconProps): IconReturn {
    return (
        <div
            {...attrs}
            className={Str.joinWithSpace('icon-component', className)}
            style={{ backgroundImage: `url('/icons/${path}')` }}
        />
    );
}

export default Icon;
