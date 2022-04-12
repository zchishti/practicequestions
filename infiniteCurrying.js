//Implement infinte currying

function add(a){
    return function (b){
        if(b) return add(a + b);
        else return a;
    }
}

console.log(add(5)(2)(6)(-19)());