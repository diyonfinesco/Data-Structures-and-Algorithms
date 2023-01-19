class Entry {

    constructor(private _k: number, private _v: string) { }

    public get k(): number {
        return this._k;
    }

    public get v(): string {
        return this._v;
    }
    public set v(value: string) {
        this._v = value;
    }
}

export default Entry