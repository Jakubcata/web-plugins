export type DummyProps = {
    dummyText: string;
};

export function Dummy({ dummyText }: DummyProps) {
    return <div className={'jx-dummy'}>{`Your dummy text ${dummyText}`}</div>;
}
