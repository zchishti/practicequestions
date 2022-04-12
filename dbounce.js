function myDbounce(callback,timedelay){
    let timer
    return function(...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout( callback(...args), timedelay);
    }
}

myDbounce(
    console.log("hi"),
    5000
)