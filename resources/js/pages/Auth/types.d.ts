import type { FC, HTMLAttributes, JSX } from 'react';
import type { TSignUp } from './SignUp/types';

export type BaseAuthProps = HTMLAttributes<Element> & {};

export type BaseAuthReturn = JSX.Element;

export interface TAuth extends FC<BaseAuthProps> {
    (): JSX.Element;
    SignIn: FC;
    SignUp: TSignUp;
}
