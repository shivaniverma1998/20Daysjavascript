const users = [{username : "shivani98", email: "shivaniverma@gmail.com"},
                {username : "henry98", email: "henry98@gmail.com"},
                {username : "sam98", email: "sam98@gmail.com"},
            ]

function isuserexist(array, val){
    //let target = {userrname: "shivani98", email: "shivaniverma@gmail.com"}
    for (let item of array) {
        if(item['username'] === val){
            return true;
        }   
    }
    return false;
}
const res = isuserexist(users,"henry8");
console.log(res);
//time complexity - linearO(n)