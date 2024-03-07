import './style.css';
import { EmptyDataProps } from './types';
import Str from '@/utilities/Str';

function EmptyData({ className }: EmptyDataProps) {
    return (
        <section
            className={Str.joinWithSpace('empty-data-component', className)}
        >
            <p className="empty-data-component__text">No Data</p>
        </section>
    );
}

export default EmptyData;
