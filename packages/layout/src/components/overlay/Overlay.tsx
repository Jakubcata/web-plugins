import { useBem } from '@jacobii/hooks';

type OverlayProps = {
    shouldBeVisible: boolean;
    onClickCallback?: () => void;
};

export function Overlay({ shouldBeVisible, onClickCallback }: OverlayProps) {
    const { bem, base } = useBem('jx-overlay');

    return (
        <div
            className={bem(base, {
                'jx-overlay--visible': shouldBeVisible,
            })}
            onClick={onClickCallback}
        />
    );
}
