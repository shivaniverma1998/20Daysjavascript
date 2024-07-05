
//use of flag here to check in the current loop li swapping ho bhi rhi h ya nahi agr swap hi ni hora kuch th matlb loop se bhtr aajaao  kyaa ffaltu me loop ko end tk chlaana we have done it already


function bubble(array){

    for (let i = array.length; i > 0; i--) {
        console.log(i);
        let isswapped ;
        for (let j = 0; j < i-1; j++) {
            if(array[j] > array[j+1]){
                [array[j],array[j+1]] = [array[j+1],array[j]];
                isswapped = true;
            }
            
        }
        if(!isswapped){
            break;
        }
    }
    return array;
}

// const res = bubble([6,2,3,5,2,7,6,2,9,8]);
// console.log(res);

const res1 = bubble([9,12,27,1,2,3,4,5,6,7]);
console.log(res1);
