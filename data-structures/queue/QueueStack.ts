import StackLinkedList from "../stack/StackLinkedList"

class QueueStack {
    private stack1 = new StackLinkedList()
    private stack2 = new StackLinkedList()

    constructor() {

    }

    /**
     * enqueue
     */
    public enqueue(item: number): void {
        this.stack1.push(item)
    }

    /**
     * dequeue
     */
    public dequeue(): number {
        if (this.isEmpty()) {
            throw new Error("Queue is empty!");
        }

        this.moveStack1ToStack2()
        return this.stack2.pop()
    }

    /**
     * isEmpty
     */
    public isEmpty(): boolean {
        return (this.stack1.isEmpty() && this.stack2.isEmpty())
    }

    /**
     * peek
     */
    public peek(): number {
        if (this.isEmpty()) {
            throw new Error("Queue is empty!");
        }

        this.moveStack1ToStack2();

        return this.stack2.peek()
    }

    private moveStack1ToStack2() {
        if (this.stack2.isEmpty()) {
            while (!this.stack1.isEmpty()) {
                this.stack2.push(this.stack1.pop());
            }
        }
    }
}

export default QueueStack