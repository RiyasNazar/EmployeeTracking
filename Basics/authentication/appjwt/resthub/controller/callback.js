/*function check (a,callback1,callback2) {
    if (a % 2 == 0) 
    console.log("the number is even");
    else console.log("the number is odd"); 
    callback1();
    } 
    check (3, function value() {
    });*/

    function check (a,callback1,callback2) {
        if (a % 2 == 0){
        console.log("the number is even");
        callback1();
        } else {
          console.log("the number is odd");
          callback2();
        }}
    check(3);
   