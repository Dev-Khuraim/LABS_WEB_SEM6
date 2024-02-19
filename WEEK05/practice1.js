let arr = [1, 3, 6,8, 2]
let arr1 = arr.filter(function(i,index) {
if(i%2==0){
    return i;
}
else{
    return null
}
} )


let arr2 = arr.filter(i => i%3 && i%2)
console.log(arr2)