// ***************************************************************
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


//*****************************************************************
console.log('a');

setTimeout(() => {
  console.log('b')
}, 1)

setTimeout(() => {
  console.log('c')
}, 10)

setTimeout(() => {
  console.log('d')
}, 0)

console.log('e');
// Output a e b d c
//Chrome will treat wait value of 0 as 1 only.(Node also does the same as Thomas GENTILHOMME said. 
//Well the underlying engine is same for both so makes sense).
// Firefox wouldn't. It actually considers wait value of 0 as 0.

//So you can have two answers for this question:-
//Chrome/Node - a,e,b,d,c
//Firefox - a,e,d,b,c


//***********************************************************************



