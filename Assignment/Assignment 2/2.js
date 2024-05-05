const find=(arr,target)=>{
    for(let i=0;i<arr.length;i++){
       if(arr[i]===target) return i;
    }
    return -1;
}
console.log(find([23,545,656,1],1));