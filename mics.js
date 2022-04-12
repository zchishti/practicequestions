// Write a function that takes an array of objs and returns a array of onbect's name property if it exists

function getNames(objs){
    let res = [];

    objs.forEach(obj => {
        if(obj.hasOwnProperty("name")){
            res.push(obj.name);
        }
    });

    return res;
}

console.log(
    getNames([
        { a:1 },
        {name: "Jane"},
        {},
        {name: "Patrick"},
        {b:2}
    ])
);

//Wirte a funciton that returns a promise that reolves after n miliseconds

function delay(n){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve();
        },n)
    })
}


const useDelay = (async () => {
    console.time("testing delay");
    await delay(2000);
    console.timeEnd("testing delay");
});

useDelay();