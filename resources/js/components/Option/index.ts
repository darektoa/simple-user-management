import type { TOption } from './types';
import OptionComponent from './Option';
import List from './List/List';

const Option = OptionComponent as TOption;

Option.List = List;

export default Option;
