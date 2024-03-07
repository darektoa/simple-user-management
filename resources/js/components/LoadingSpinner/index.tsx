import './style.css';
import { LoadingSpinnerProps } from './types';
import Section from '../Section';
import Str from '@/utilities/Str';

function LoadingSpinner({ className, ...attributes }: LoadingSpinnerProps) {
    return (
        <Section
            {...attributes}
            className={Str.joinWithSpace('loadingSpinnerComponent', className)}
        >
            <div className="loadingSpinnerComponent__spinnerBox">
                <div className="h-14 w-14 animate-spin rounded-full border-8 border-gray-300 border-t-blue-600" />
            </div>
        </Section>
    );
}

export default LoadingSpinner;
