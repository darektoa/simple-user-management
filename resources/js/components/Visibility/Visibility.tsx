import './style.css';
import type { VisibilityProps } from './types';

function Visibility(props: VisibilityProps) {
    const { children, hidden, value } = props;

    return hidden ? null : children || value;
}

export default Visibility;
