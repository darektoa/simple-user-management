import { AnchorHTMLAttributes } from 'react';
import { LinkProps } from 'next/link';

export type NavLinkProps = LinkProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        activeExactSearch?: boolean;
        activeWithSearch?: boolean;
    };

export type NavLinkReturn = JSX.Element;
