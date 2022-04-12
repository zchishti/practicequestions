
const cal = {
    val:0,
    add(a){
        this.val += a;
        return this;
    },
    sub(b){
        this.val -= b;
        return this;
    },
    mult(c){
        this.val *= c;
        return this;
    }
}


console.log(cal.add(5).sub(3).mult(10));