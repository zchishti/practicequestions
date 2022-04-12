function close1(){
    for(var i = 1; i <= 5; i++){
        setTimeout(() => {
            console.log(i);
        },1000);
    }
}

//To take care of the above problem we can use let
function close2(){
    for(let i = 1; i <= 5; i++){
        setTimeout(() => {
            console.log(i);
        },1000);
    }
}

// To do the same as above but with var we can use clousers

function close3(){
    for(var i = 1; i <= 5; i++){
        function close(x){
            setTimeout(() => {
                console.log(x);
            },1000)
        }
        close(i);
    }
}

//close1();
//close2();
//close3();


// data encapsulation

function count(){
    var counter = 0;
    function increment(){
        counter++;
        console.log(counter);
    }
    return increment;
}

const increment = count();
increment();

//to scale the count function

function newCount(){
    var counter = 0;

    this.increment = function() {
        counter++;
        console.log(counter);
    }

    this.decrement = function() {
        counter--;
        console.log(counter);
    }
}

var newCounter = new newCount();
newCounter.increment();
newCounter.decrement();