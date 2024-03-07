import type { FC, HTMLAttributes, JSX } from 'react';

export type SignUpProps = HTMLAttributes<Element> & {};

export type SignUpReturn = JSX.Element;

export interface TSignUp extends FC<SignUpProps> {
    (): JSX.Element;
    Success: FC;
}
