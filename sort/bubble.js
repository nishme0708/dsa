function bubble(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j <= arr.length - 2 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}