//selection sort
//[0,2,34,22,10,19]
function selectionsort(array){
    
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i+1; j < array.length; j++) {
            if( array[j] < array[min]){
                min = j;
            }
            
        }
        if(i!== min){
            temp = array[i];
            array[i] = array [min];
            array[min] = temp;
        }
    }
    return array;
}

const res = selectionsort([0,2,34,22,10,19]);
console.log(res);