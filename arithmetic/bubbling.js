let arr = [5,4,3,2,1]

function bubbling(arr) {
    for (let i = 0;i<arr.length-1;i++){
        for(let j = 0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]) {
                let tmp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=tmp
            }
        }
    }
    return arr;
}

console.log(bubbling(arr));
console.log(bubbling([12,44,1,23,555,123]));