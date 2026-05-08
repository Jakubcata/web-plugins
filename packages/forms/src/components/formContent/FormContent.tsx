import { ReactNode } from 'react';
import { useBem } from '@jacobii/hooks';

type FormContentProps = {
    children: ReactNode;
    className?: string;
};

export function FormContent({ children, className = '' }: FormContentProps) {
    const { bem, base } = useBem('jx-form-content');

    return <div className={bem(base, className)}>{children}</div>;
}
