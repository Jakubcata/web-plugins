export type DummyProps = {
    dummyText: string;
};

export function Dummy({ dummyText }: DummyProps) {
    return <div className={'jwp-dummy'}>{`Your dummy text ${dummyText}`}</div>;
}
