class BubbleSort {
    /**
     * sort
     */
    public sort(arr: number[]): number[] {
        let isSorted: boolean;

        for (let i = 0; i < arr.length; i++) {
            isSorted = true
            for (let j = 1; j < arr.length - i; j++) {
                console.log(j)
                if (arr[j] < arr[j - 1]) {
                    this.swap(arr, j, j - 1)
                    isSorted = false
                }
            }

            if (isSorted) return arr
        }

        return arr
    }

    private swap(array: number[], index1: number, index2: number) {
        const element = array[index1];
        array[index1] = array[index2]
        array[index2] = element
    }
}

export default BubbleSort