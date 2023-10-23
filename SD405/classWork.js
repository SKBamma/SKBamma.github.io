let array = [1, "apple", true, [1,2], {a:1, b:2}]
// let array = arry.toString();
function findLength(array){
    let newArr=[];
    for(let i =0; i<array.length; i++){
        if(typeof array[i]==="object"){
            newArr.push(0);

        }else if (typeof array[i]!="object"){
        
        }else{
            newArr.push(array[i].toString().length);
        }
    }
    return newArr;
}
console.log(findLength(array));