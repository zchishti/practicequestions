const isEqual = (object1,  object2) => {
    
    if(typeof object1 === 'object' && typeof object2 === 'object'){
        if(Object.keys(object1).length === Object.keys(object2).length){
           return Object.keys(object1).reduce((prev,curr) => {
                return prev && isEqual(object1[curr],  object2[curr]);
            },true)
        }
    }else{
        return object1 === object2;
    }

    return false;
}


const isEqual2 = (obj1,obj2) => {
    if(typeof ob1 === 'object' && typeof obj2 === 'object'){
        if(Object.keys(obj1).length === Object.keys(ob2)){
            return Object.keys(obj1).reduce((prev, curr) => {
                return prev && isEqual(obj1[curr],obj2[curr]);
            },true)
        }
    }else{
        return obj1 === obj2;
    }

    return false;
}

let o1 = {a:2,b:{c:55, d:7}};
let o2 = {a:2,b:{c:55}};

console.log(isEqual2(o1,o2));