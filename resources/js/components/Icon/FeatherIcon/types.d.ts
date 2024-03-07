import type React, { FC, HTMLAttributes, JSX } from 'react';

export type IconProps = HTMLAttributes<Element> & {
    
};

export type IconReturn = JSX.Element;

export type TIcon = (props: IconProps) => IconReturn;

export interface TFeatherIcon {
    Activity: TIcon;
    Book: TIcon;
    Bookmark: TIcon;
    BookOpen: TIcon;
    Box: TIcon;
    Briefcase: TIcon;
    Check: TIcon;
    CheckCircle: TIcon;
    ChevronDown: TIcon;
    ChevronRight: TIcon;
    Clipboard: TIcon;
    Clock: TIcon;
    Copy: TIcon;
    Cross: TIcon;
    Edit: TIcon;
    ExternalLink: TIcon;
    Eye: TIcon;
    Filter: TIcon;
    Home: TIcon;
    Icon: TIcon;
    Key: TIcon;
    Link: TIcon;
    Logout: TIcon;
    Plus: TIcon;
    RefreshCw: TIcon;
    Search: TIcon;
    Tag: TIcon;
    Trash: TIcon;
    User: TIcon;
    Users: TIcon;
}
