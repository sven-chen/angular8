export interface DialogPos{
    top: string,
    left: string,
    width: string;
    height: string;
}
export interface ChildConfig{
    inputs: object;
    outputs: object;
    position?: DialogPos;
}