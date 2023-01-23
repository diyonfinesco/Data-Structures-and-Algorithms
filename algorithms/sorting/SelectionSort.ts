class SelectionSort {
    /**
     * sort
     */
    public sort(arr: number[]): number[] {
        for (let i = 0; i < arr.length; i++) {
            let j: number;
            let minIndex = i
            for (j = i; j < arr.length; j++) {
                if (arr[j] < arr[minIndex])
                    minIndex = j
            }
            this.swap(arr, i, minIndex);
        }
        return arr
    }

    private swap(array: number[], index1: number, index2: number) {
        const element = array[index1];
        array[index1] = array[index2]
        array[index2] = element
    }
}

export default SelectionSort