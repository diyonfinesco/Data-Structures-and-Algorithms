class QueuePriority {
    private items: number[];
    private count = 0

    constructor(size: number) {
        this.items = new Array(size)
    }

    /**
     * add
     */
    public add(item: number) {
        if (this.isFull())
            throw new Error("Queue is full!");

        const i = this.shiftItemsToInsert(item);
        this.items[i] = item
        this.count++


    }

    private shiftItemsToInsert(item: number): number {
        let i: number;
        for (i = this.count - 1; i >= 0; i--) {
            const current = this.items[i];
            if (current > item) {
                this.items[i + 1] = current;
            } else {
                break;
            }
        }
        return i + 1
    }

    /**
     * remove
     */
    public remove(): number {
        if (this.isEmpty())
            throw new Error("Queue is empty!")

        return this.items[--this.count]
    }

    /**
     * isEmpty
     */
    public isEmpty(): boolean {
        return this.count === 0
    }

    /**
     * isFull
     */
    public isFull(): boolean {
        return this.count === this.items.length
    }

    /**
     * print
     */
    public print() {
        console.log(this.items)
    }
}

export default QueuePriority