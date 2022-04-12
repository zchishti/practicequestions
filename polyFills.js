//forEach

Array.prototype.myForEach = function(callback){
    for(var i = 0; i < this.length; i++){
        callback(this[i],i,this);
    }
};

let arr = [1,2,3,4,5];
arr.myForEach((i,index) => {
   arr[index] = i + 1;
});

//console.log(arr);

//Map

Array.prototype.myMap = function(callback){
    var newArr = [];
    for(var i = 0; i < this.length; i++){
        newArr.push(callback(this[i], i, this));
    }
    return newArr;
}

let addArr = arr.myMap((i) => {
    return i + 1;
});

//console.log(addArr);

//Filter -- works with a context

Array.prototype.myFilter = function(callback, context){
    let filteredArr = [];
    for(let i = 0; i < this.length; i++){
        if(callback.call(context,this[i],i,this)){
            filteredArr.push(this[i]);
        }
    }
    return filteredArr;
}

/*console.log(arr.myFilter((i) => {
    return i >= 5;
})); */

Array.prototype.myReduce = function(callback,intitialValue){
    var accumulator = (intitialValue !== 'undefined') ? intitialValue : 'undefined';

    for(var i = 0; i < this.length; i++){
        if(accumulator !== 'undefined'){
            accumulator = callback.call(undefined,accumulator,this[i],i,this);
        }else{
            accumulator = this[i];
        }
    }

    return accumulator;
}

/*console.log(arr.myReduce((acc,i) => {
    return acc + i;
},0));*/

//console.log(Array.prototype.slice.call);

//Compose polyfill

function addTwo(a){
    return a + 2;
}

function subtractFour(a){
    return a - 4;
}

function multiplyFive(a){
    return a * 5;
}

const compose = (...functions) => {
    return (args) => {
        return functions.reduceRight((args,fn) => fn(args), args);
    }
}

let evaluate = compose(addTwo,subtractFour,multiplyFive);
console.log(evaluate(5));


//Promise.all polyfill

function myPromiseAll(promises){
    let result = [];
    return new Promise((resolve,reject) => {
        promises.forEach(p =>{
            p.then(value => {
                result.push(value);
                if(result.length === promises.length){
                    resolve(result);
                }
            }).catch(err => {
                reject(err);
            })
        })
    });
}

function showText(text,time){
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(text);
        },time);
    });
}

myPromiseAll([
    showText("hi",1000),
    Promise.resolve("hello"),
    Promise.reject("bad")
]);