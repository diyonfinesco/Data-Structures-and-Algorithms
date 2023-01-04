class myArray {
    private items: number[];
    private count = 0;

    constructor(size: number) {
        this.items = new Array(size);
    }

    /**
    * insert
    */
    public insert(item: number): void {
        this.increaseArrayIf()

        this.items[this.count++] = item;
    }

    /**
* insertAt
*/
    public insertAt(item: number, index: number): void {
        /*  in JavaScript or TypeScript even we passed invalid index
            we do not get any error but here I have implemented because 
            this is useful for some other programming languages like Java
        */
        if (index < 0 || index > this.count) {
            throw new Error("index is not valid!")
        }

        this.increaseArrayIf()

        for (let i = this.count - 1; i >= index; i--) {
            this.items[i + 1] = this.items[i]
        }
        this.items[index] = item
        this.count++
    }

    /**
     * removeAt
    */
    public removeAt(index: number): void {
        /*  in JavaScript or TypeScript even we passed invalid index
            we do not get any error but here I have implemented because 
            this is useful for some other programming languages like Java
        */
        if (index < 0 || index >= this.count) {
            throw new Error("index is not valid!")
        }

        for (let i = index; i < this.count; i++) {
            const nextElement = this.items[i + 1];
            this.items[i] = nextElement;
        }

        this.count--
    }

    /**
     * indexOf
     */
    public indexOf(item: number): number {
        for (let i = 0; i < this.count; i++) {
            if (this.items[i] === item) return i;
        }

        return -1
    }

    /**
     * max
     */
    public max(): number {
        let max = 0

        for (let i = 0; i < this.count; i++) {
            if (max < this.items[i]) max = this.items[i]
        }

        return max
    }

    /**
     * intersect
     */
    public intersect(array: myArray): myArray {
        const intersection = new myArray(this.count);

        for (let i = 0; i < this.count; i++) {
            const current = this.items[i]
            if (array.indexOf(current) >= 0) intersection.insert(current)
        }

        return intersection
    }

    /**
     * reverse
     */
    public reverse(): void {
        const reverseArr: number[] = []

        for (let i = 0; i < this.count; i++) {
            const current = this.items[this.count - i - 1]
            reverseArr.push(current)
        }

        this.items = reverseArr
    }

    /**
    * print
    */
    public print(): void {
        console.log(this.items.length)
        for (let i = 0; i < this.count; i++) {
            console.log(this.items[i])
        }
    }

    private increaseArrayIf() {
        /* this condition is not useful for JavaScript or TypeScript
            but here I have implemented because this is useful for 
            if arrays are fixed like in Java
        */
        if (this.items.length === this.count) {
            const newItems = new Array(this.count * 2)

            for (let i = 0; i < this.count; i++) {
                newItems[i] = this.items[i];
            }

            this.items = newItems;
        }
    }
}

export default myArray;