function validAnagram(str1, str2) {
    // add whatever parameters you deem necessary - good luck!
    if (str1 === str2) {
        return true;
    }
    let result = false;
    if (str1.length === str2.length) {
        let resultObj = {};
        for (let i = 0; i < str1.length; i++) {
            let char1 = str1[i];
            let char2 = str2[i];
            if (resultObj[char1]) {
                if (resultObj[char1] === -1) {
                    delete resultObj[char1];
                } else {
                    resultObj[char1]++;
                }
            } else {
                resultObj[char1] = 1;
            }
            if (resultObj[char2]) {
                if (resultObj[char2] === 1) {
                    delete resultObj[char2];
                } else {
                    resultObj[char2]--;
                }
            } else {
                resultObj[char2] = -1;
            }
        }
        result = Object.keys(resultObj).length == 0;
    }
    console.log(str1, str2, result);
    return result;
}

validAnagram('azz', 'zza');
