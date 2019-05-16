let arr = [1,2,3,4,5,6,7,8];

function overturn(arr){
    for (let i = 0;i<parseInt(arr.length/2);i++){
        let tmp = arr[arr.length-1-i]
        arr[arr.length-1-i] = arr[i]
        arr[i]=tmp
    }
    return arr;
}

console.log(overturn(arr))
console.log(overturn([3,4,5,1,2]))