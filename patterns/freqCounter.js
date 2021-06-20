// write a function to take 2 arrays and check if arr1 all values are arr2 but squared

function sameSquare(arr1, arr2) {
    let result = false;
    if (arr1 && arr2) {
        if (arr1.length === arr2.length) {
            let resObj = {};
            for (let i = 0; i < arr1.length; i++) {
                let val1 = arr1[i];
                let val2 = arr2[i];
                val1 = val1 * val1;
                if (resObj[val1]) {
                    delete resObj[val1];
                } else {
                    resObj[val1] = true;
                }
                if (resObj[val2]) {
                    delete resObj[val2];
                } else {
                    resObj[val2] = true;
                }
            }
            if (Object.keys(resObj).length === 0) {
                result = true;
            }
        }
    }
    console.log(arr1, arr2, result);
    return result;
}

sameSquare([ 1, 2, 3 ], [ 4, 1, 9 ]); // true
sameSquare([ 1, 2, 3 ], [ 4, 9, 9 ]); // false
sameSquare([ 1, 2, 3, 2, 5 ], [ 4, 1, 4, 25, 9 ]); // true
