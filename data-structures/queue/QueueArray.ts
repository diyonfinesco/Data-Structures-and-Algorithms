class QueueArray {
    private array: number[];
    private front = 0;
    private rear = 0;
    private count = 0;

    constructor(size: number) {
        this.array = new Array(size)
    }

    /**
     * enqueue
     */
    public enqueue(item: number): void {
        if (this.isFull())
            throw new Error("Queue is full!")

        this.array[this.rear] = item
        this.rear = (this.rear + 1) % this.array.length
        this.count++;
    }

    /**
     * dequeue
     */
    public dequeue(): number {
        const item = this.array[this.front]
        this.array[this.front] = 0
        this.front = (this.front + 1) % this.array.length
        this.count--;
        return item;
    }

    /**
     * peek
     */
    public peek(): number {
        return this.array[this.front]
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
        return this.count === this.array.length
    }

    /**
     * print
     */
    public print() {
        console.log(this.array)
    }
}

export default QueueArray