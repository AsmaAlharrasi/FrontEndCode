
//rest
function calculation(x,y,...argus){
    sub = x-y;
    if( argus.length !=0)
    for (let i = 0; i < argus.length; i++) {
       sub = sub - argus[i];
    }
    return sub;
}
console.log(calculation(200,8,7,6,5,4,3));
console.log("----------------------")

//spread
let arr1 = ["one" , "tow" , "three"];
let arr2 = [...arr1 , "four" , "five" , "six"];
console.log(arr2);

console.log("----------------------")
let arr3 = [ 100,11,12,13];
console.log(calculation(...arr3));
