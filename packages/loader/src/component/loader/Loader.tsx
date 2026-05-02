import React from 'react';
import { useBem } from '@jacobii/hooks';

export interface LoaderProps {
    loading?: boolean;
    children?: React.ReactNode;
}

export const Loader = ({ loading = true, children }: LoaderProps) => {
    const { bem } = useBem('jx-loader');

    return loading ? <div className={bem()}></div> : children;
};
