let finalObj = {};
const flattenObj = (obj,parent) => {
    for(let key in obj){
        if((typeof obj[key]) === "object"){
            flattenObj(obj[key], parent + "_" + key);
        }else{
            finalObj[parent + "_" + key] = obj[key];
        }
    }
}

let user = {
    name: "Zain",
    address: {
        personal:{
            street: "1919 E"
        },
        office:{
            street: "Bryant",
            area:{
                landmark: "UCO"
            }
        }
    }
}

flattenObj(user,"user");
console.log(finalObj);

let newArray = [];
const flattenArray = (arr) => {
    for(let val of arr){
        if(Array.isArray(val)){
            flattenArray(val);
        }else{
            newArray.push(val);
        }
    }
}

flattenArray([[1, 2, 3], [4, [5]]]);
console.log(newArray);