export type DummyProps = {
    dummyText: string;
};

export function Dummy({ dummyText }: DummyProps) {
    return (
        <div className={'jx-dummy'}>
            <span>{`Your dummy text ${dummyText}`}</span>
        </div>
    );
}
