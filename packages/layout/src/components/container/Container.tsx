import React from 'react';
import { useBem } from '@jacobii/hooks';

export type ContainerProps = {
    className?: string;
    children?: React.ReactNode;
    isPageContainer?: boolean;
};

export function Container({
    className = '',
    children,
    isPageContainer = false,
}: ContainerProps) {
    const { bem, base } = useBem('jx-container');

    return (
        <div
            className={bem(base, {
                [className]: true,
                'jx-container--page-container': isPageContainer,
            })}
        >
            {children}
        </div>
    );
}
