import Entry from "./Entry";

class LinkedListNode<T> {
    public value: T;
    public next: LinkedListNode<T> | null;

    constructor(val: T) {
        this.value = val
        this.next = null;
    }
}

class LinkedList<T> {
    private first: LinkedListNode<T> | null;
    private last: LinkedListNode<T> | null;

    constructor() {
        this.first = null;
        this.last = null;
    }

    /**
     * addFirst
     */
    public addFirst(entry: T): void {
        const node = new LinkedListNode<T>(entry)

        if (!this.first) {
            this.last = node
        } else {
            node.next = this.first;
        }
        this.first = node;
    }

    /**
     * addLast
     */
    public addLast(item: T): void {
        const node = new LinkedListNode(item)

        if (!this.first) {
            this.first = node;
        } else {
            this.last!.next = node;
        }
        this.last = node
    }

    /**
     * indexOf
     */
    public indexOf(entry: T): number {
        let index = 0;
        let current = this.first;

        while (current !== null) {
            if (current.value === entry) return index;
            index++
            current = current.next
        }
        return -1;
    }

    /**
     * contains
     */
    public contains(entry: T): boolean {
        return this.indexOf(entry) !== -1
    }

    /**
     * removeFirst
     */
    public removeFirst(): void {
        if (!this.first) {
            throw new Error("Linked List is empty!")
        }

        if (this.first === this.last) {
            this.first = null;
            this.last = null
            return
        }

        const second = this.first.next
        this.first.next = null
        this.first = second;
    }

    /**
     * removeLast
     */
    public removeLast(): void {
        if (!this.first || !this.last) {
            throw new Error("Linked List is empty!")
        }

        if (this.first === this.last) {
            this.first = null
            this.last = null
            return
        }

        const previous = this.getPrevious(this.last)
        previous.next = null
        this.last = previous
    }

    /**
     * remove
     */
    public remove(item: T) {
        if (!this.first || !this.last) {
            throw new Error("Linked List is empty!")
        }

        if (this.first === this.last) {
            this.first = null
            this.last = null
            return
        }

        let current = this.first;

        while (current.value !== item) {
            current = current.next!
        }

        const previous = this.getPrevious(current)
        previous.next = current.next
    }

    /**
     * getPrevious
     */
    public getPrevious(node: LinkedListNode<T>): LinkedListNode<T> {
        let current = this.first!

        while (current.next != node) {
            current = current.next!
        }

        return current
    }

    /**
     * size
     */
    public size(): number {
        let current = this.first
        let size = 0

        while (current !== null) {
            size++;
            current = current.next
        }

        return size
    }

    /**
     * toArray
     */
    public toArray(): T[] {
        const arr: T[] = []
        let current = this.first

        while (current !== null) {
            arr.push(current.value)
            current = current.next
        }
        return arr
    }

    /**
     * reverse
     */
    public reverse(): void {
        if (!this.first || !this.last) {
            throw new Error("Linked List is empty!")
        }

        this.last = this.first
        let previous = this.last
        let current = previous.next
        previous.next = null

        while (current !== null) {
            const next = current.next
            current.next = previous
            previous = current
            current = next
        }
        this.first = previous
    }

    /**
     * getKthFromTheEnd
     */
    public getKthFromTheEnd(k: number): T {
        if (!this.first || !this.last) {
            throw new Error("Linked List is empty!")
        }

        if (k === 0 || k > this.size()) {
            throw new Error("invalid k value!")
        }

        let index = 0
        let pointer = this.first
        let current = this.first

        while (current !== null) {
            index++
            if (index > k)
                pointer = pointer.next!
            current = current.next!
        }

        return pointer!.value
    }

    /**
     * printMiddle
     */
    public printMiddle(): void {
        if (!this.first || !this.last) {
            throw new Error("Linked List is empty!")
        }

        let pointer = this.first
        let current = this.first
        while (current !== this.last && current.next !== this.last) {
            current = current.next!.next!
            pointer = pointer.next!
        }

        if (current === this.last) {
            console.log(pointer.value)
        } else {
            console.log(pointer.value, pointer.next?.value)
        }
    }

    /**
    * print
    */
    public print(): void {
        let current = this.first

        while (current !== null) {
            console.log(current.value)
            current = current.next
        }
    }
}

export default LinkedList