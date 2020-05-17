var obj1 = {
    x : 1,
    f : function(){
        console.log(this);
        this.x = 2;
    }
}

var obj2 = {
    x : obj1.x
}

obj1.f()
console.log(obj2.x);
// Output 1

