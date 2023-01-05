class LinkedListNode {
    public value: number;
    public next: LinkedListNode | null;

    constructor(val: number) {
        this.value = val
        this.next = null;
    }
}

class LinkedList {
    private first: LinkedListNode | null;
    private last: LinkedListNode | null;

    constructor() {
        this.first = null;
        this.last = null;
    }

    /**
     * addFirst
     */
    public addFirst(item: number): void {
        const node = new LinkedListNode(item)

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
    public addLast(item: number): void {
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
    public indexOf(item: number): number {
        let index = 0;
        let current = this.first;

        while (current !== null) {
            if (current.value === item) return index;
            index++
            current = current.next
        }
        return -1;
    }

    /**
     * contains
     */
    public contains(item: number): boolean {
        return this.indexOf(item) !== -1
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
     * getPrevious
     */
    public getPrevious(node: LinkedListNode): LinkedListNode {
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
    public toArray(): number[] {
        const arr: number[] = []
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
    public getKthFromTheEnd(k: number): number {
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