import { useBem } from '@jacobii/hooks';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    className?: string;
    accent?: boolean;
    rounded?: boolean;
};

export function Button({
    children,
    className = '',
    accent = false,
    rounded = false,
    ...props
}: ButtonProps) {
    const { bem, base } = useBem('jx-button');

    return (
        <button
            className={bem(base, {
                [className]: true,
                'jx-button--rounded': rounded,
                'jx-button--accent': accent,
            })}
            {...props}
        >
            {children}
        </button>
    );
}
