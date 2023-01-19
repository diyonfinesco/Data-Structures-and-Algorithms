import Entry from "./Entry";
import LinkedList from "./LinkedList";

class HashTable {
    private array: LinkedList<Entry>[] = new Array(5)

    constructor() {

    }

    /**
     * put
     */
    public put(key: number, value: string): void {
        const entry = this.getEntry(key)

        if (entry) {
            entry.v = value
            return
        }
        const bucket = this.getOrCreateBucket(key)
        bucket.addLast(new Entry(key, value))
    }

    /**
     * get
     */
    public get(key: number): string | null {
        const entry = this.getEntry(key)
        return entry ? entry.v : null
    }

    /**
     * remove
     */
    public remove(key: number) {
        const entry = this.getEntry(key)

        if (!entry) throw new Error("Key not found!")

        this.getBucket(key).remove(entry)
    }

    private getBucket(key: number): LinkedList<Entry> {
        return this.array[this.hashFunction(key)]
    }

    private getOrCreateBucket(key: number) {
        const index = this.hashFunction(key)
        let bucket = this.array[index];

        if (!bucket) {
            this.array[index] = new LinkedList<Entry>()
            bucket = this.array[index];
        }
        return bucket
    }

    private getEntry(key: number): Entry | null {
        const bucket = this.getBucket(key)

        if (bucket) {
            for (const entry of bucket.toArray()) {
                if (entry.k === key) {
                    return entry
                }
            }
        }

        return null
    }

    private hashFunction(key: number): number {
        return key % this.array.length;
    }
}

export default HashTable;