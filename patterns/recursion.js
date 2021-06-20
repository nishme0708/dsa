function countDown(num) {
    if (num <= 0) {
        console.log('all done');
        return;
    }
    console.log(num);
    countDown(num - 1);
}

function sumRange(num) {
    if (num === 1) {
        return 1;
    }
    return num + sumRange(num - 1);
}

function fact(num) {
    if(num <= 1) return 1;
    return num * fact(num-1);
}

//5 -> 5+4+3+2+1

// 5 + f(4) -> 5+4+f(3) -> 5+4+3+f(2) -> 5+4+3+2+1


function power(base, expo){
    if(expo <= 0 ) {
        return 1;
    }
    return base * power(base, expo-1);
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    if(arr.length <= 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num){
   if(num < 0 ) {return null;}
   if(num ===1 ) { return 1;}
   return num + recursiveRange(num -1);
}


function fib(n) {
    if(n<=2) return 1;
    return fib(n-1) + fib(n-2);
}

//recursive reverse 
//nish hsin
function reverse(str) {
    if(str.length == 1) { return str;}
    return str[str.length -1] + reverse(str.slice(0,-1));
}

function isPalindrome(str) {
    if(!str.length) return true;
    if(str.length === 1) { return true;}
    
    if(str[0] === str.slice(-1)) {
        return isPalindrome(str.slice(1,-1));
    } else {
        return false;
    }
}

// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, callback){
    // add whatever parameters you deem necessary - good luck!
    debugger;
    if(arr.length === 0) { return false;}
    if(arr.length === 1) { return callback(arr[0])}
    return callback(arr[0]) || someRecursive(arr.slice(1),callback);
  }

  function flatten(arr){
    // add whatever parameters you deem necessary - good luck!
    if(!arr.length) return [];
    var newarr = [];
    for(let i =0;i<arr.length;i++) {
        let val = arr[i];
        if(Array.isArray(val)) {
            newarr = newarr.concat(flatten(val));
        } else {
            newarr.push(val);
        }
    }
    return newarr;
  }
  
  // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3


 