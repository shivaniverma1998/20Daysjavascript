array = [1,2,3,4,5,6,7,8]

function checkodd(array){
    let result = [];
    function helperecursive(inputarray){
        if(inputarray.length === 0){ //checking length if nott 0
            return ;
        }if(inputarray[0] % 2!==0){  // id arr[0] is even or not
            result.push(inputarray[0])  //if arr[0] is even push intt result
        }
        helperecursive(inputarray.slice(1));  // slice arrray anyway evvverrytime

    }
    helperecursive(array)   // here call itt again
    return result;
}
const res = checkodd(array)
console.log(res);