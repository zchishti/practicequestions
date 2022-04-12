var x  = 2;
function fn(){
    var x = 10;
    function fn2(){
        let x = 20;
        console.log(x, "1st");
    }
    
    fn2();
}

fn();

function foo(){
    console.log(a);
    if(true){
        var a = 123;
    }
    
    //bar();    
}

foo();