class InsertionSort {
    /**
     * sort
     */
    public sort(arr: number[]): number[] {
        // 1 3 3
        for (let i = 1; i < arr.length; i++) {
            const current = arr[i];
            let j = i - 1
            while (j >= 0 && arr[j] > current) {
                arr[j + 1] = arr[j]
                j--
            }
            arr[j + 1] = current
        }
        return arr
    }

    private swap(array: number[], index1: number, index2: number) {
        const element = array[index1];
        array[index1] = array[index2]
        array[index2] = element
    }
}

export default InsertionSort