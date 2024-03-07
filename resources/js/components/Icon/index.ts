import type { TIcon } from './types';
import IconComponent from './Icon';
import FeatherIcon from './FeatherIcon';

const Icon = IconComponent as TIcon;

Icon.FeatherIcon = FeatherIcon;

export { FeatherIcon };

export default Icon;
