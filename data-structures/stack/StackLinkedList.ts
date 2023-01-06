import LinkedList from "../linked list/LinkedList"

class StackLinkedList {
    private list

    constructor() {
        this.list = new LinkedList()
    }

    /**
     * push
     */
    public push(item: number): void {
        this.list.addLast(item)
    }

    /**
     * pop
     */
    public pop(): number {
        const last = this.list.getKthFromTheEnd(1)
        this.list.removeLast()
        return last
    }

    /**
     * peek
     */
    public peek(): number {
        return this.list.getKthFromTheEnd(1)
    }

    /**
     * isEmpty
     */
    public isEmpty(): boolean {
        return this.list.size() === 0
    }

    /**
     * print
     */
    public print(): void {
        const arr = this.list.toArray()
        console.log(arr)
    }
}

export default StackLinkedList