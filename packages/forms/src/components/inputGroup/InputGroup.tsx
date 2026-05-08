import { useBem } from '@jacobii/hooks';
import { ReactNode } from 'react';

type InputGroupProps = {
    children: ReactNode;
    className?: string;
};

export function InputGroup({ children, className = '' }: InputGroupProps) {
    const { bem, base } = useBem('jx-input-group');

    return <div className={bem(base, className)}>{children}</div>;
}
