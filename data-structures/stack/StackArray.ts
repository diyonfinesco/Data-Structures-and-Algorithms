class StackArray {
    private array: number[] = new Array(5)
    private count = 0;

    constructor() { }

    /**
     * push
     */
    public push(item: number): void {
        if (this.array.length === this.count) {
            throw new Error("Stack is full!")
        }
        this.array[this.count++] = item
    }

    /**
     * pop
     */
    public pop(): number {
        if (this.isEmpty()) {
            throw new Error("Stack is empty")
        }
        return this.array[--this.count]
    }

    /**
     * peek
     */
    public peek(): number {
        return this.array[this.count - 1]
    }

    /**
     * isEmpty
     */
    public isEmpty(): boolean {
        return this.count === 0
    }

    /**
     * print
     */
    public print(): void {
        const content = this.array.slice(0, this.count)
        console.log(content)
    }
}

export default StackArray