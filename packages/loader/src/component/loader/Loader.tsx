import React from 'react';
import { useBem } from '@jakubcata/hooks';

export interface LoaderProps {
    loading?: boolean;
    children?: React.ReactNode;
}

export const Loader = ({ loading = true, children }: LoaderProps) => {
    const { bem } = useBem('jwp-loader');

    return <>{loading ? <div className={bem()}></div> : children}</>;
};
