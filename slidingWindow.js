// Find max sum subarray of fixed size K

const maxSum = (array,k) => {

    let maxSum = -Infinity;
    let runningSum = 0;

    for(let i = 0; i < array.length; i++){
        runningSum += array[i];
        
        if(i >= k - 1){
            maxSum = Math.max(maxSum, runningSum);
            runningSum -= array[i - (k-1)]
        }
    }
    return maxSum;
}

let arr = [4,2,1,7,8,1,2,8,1,0];
//console.log(maxSum(arr,3));

// smallest subarray length with given sum which is >= target

const smallestSubArraySize = (array,target) => {
    let smallestSubArray = Infinity;
    let runningSum = 0;
    let windowStart = 0;

    for(let windowEnd = 0; windowEnd < array.length; windowEnd++){
        runningSum += array[windowEnd];
        
        while(runningSum >= target){
            smallestSubArray = Math.min(smallestSubArray, (windowEnd - windowStart) + 1);
            runningSum -= array[windowStart];
            windowStart++;
        }
    }

    return smallestSubArray;
}  

//console.log(smallestSubArraySize(arr,20));

//longest substring without repeating characters

const longestWORepeating = (string) => {
    
    let strArr = string.split('');
    let windowStart = 0, windowEnd = 0;
    let maxLen = -Infinity;
    let set = new Set();

    while(windowEnd < strArr.length){
        while(set.has(strArr[windowEnd])){
            set.delete(strArr[windowStart]);
            windowStart++;
        }
        set.add(strArr[windowEnd]);
        maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
        windowEnd++;
        console.log(set);
    }
    
    return maxLen;
}

console.log(longestWORepeating("PWWKEW"));