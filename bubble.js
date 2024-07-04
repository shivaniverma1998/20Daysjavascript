function bubble(array){

    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i-1; j++) {
            if(array[j] > array[j+1]){
                [array[j],array[j+1]] = [array[j+1],array[j]];
            }
            
        }
        
    }
    return array;
}

const res = bubble([6,2,3,5,2,7,6,2,9,8]);
console.log(res);