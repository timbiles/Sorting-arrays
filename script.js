
    ///////////////////////
    //// Sort Problems ////
    ///////////////////////

    //// Array sort prototype ////

    const nums = [7, 1, 45, 235, 6, 35, 467, 26, 0]

    const addSort = document.querySelector('input.input-sort')
    const addSortButton = document.querySelector('button.btn-sort');

    // nums.sort((a, b) => a - b)

    // console.log(nums)

    //// Bubble Sort ////

    const bubbleSort = arr => {
        let temp;

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp
                }
            }
        }
        return arr
    }

    console.log('Bubble Sort >>', bubbleSort(nums))

    //// Selection Sort ////

    const selectionSort = arr => {
        let temp, min;

        for (let i = 0; i < arr.length; i++) {
            min = i
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    temp = arr[j]
                    arr[j] = arr[min]
                    arr[min] = temp
                }
            }
        }
        return arr
    }

    console.log('Selection Sort >>', selectionSort(nums))

    //// Merge Sort ////

    const mergeSort = arr => {
        if (arr.length === 1){
            return arr
        }

        let mid = Math.floor(arr.length/2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);

        return merge(mergeSort(left), mergeSort(right))
    }

    const merge = (left, right) => {
        let newArr = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while(leftIndex < left.length && rightIndex < right.length){
            if(left[leftIndex] < right[rightIndex]){
                newArr.push(left[leftIndex])
                leftIndex++
            } else {
                newArr.push(right[rightIndex])
                rightIndex++
            }
        }

        return newArr.concat(left.slice(leftIndex), right.slice(rightIndex))
    }

    const newNums = [0, 98, -1, 899, 7, 34]

    console.log('Merge Sort >>', mergeSort(newNums))

    //// Quick Sort ////

    const quickSort = arr => {
        if(arr.length <=1 ) {
            return arr
        }

        let newArr = [];
        let left = [];
        let right = [];
        let pivot = arr.pop()

        for(let i=0; i<arr.length; i++){
            if(arr[i] < pivot) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }

        return newArr.concat(quickSort(left), pivot, quickSort(right))
    }

    console.log('Quick Sort >>', quickSort(newNums))


