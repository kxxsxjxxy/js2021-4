// 무명함수 ES6 이전에 사용
//let foo = function () {
  //  console.log("첫줄");
   // console.log("둘째줄");
//}

//let bar = 135;

//foo();
//console.log(foo);
//console.log(bar);


//선언적 함수
// function foo () {
//   console.log("첫줄");
//   console.log("둘째줄");
// }

// foo()
// console.log(foo);

// 화살표 함수. ES6 문법.

// let foo = () =>  {
//     console.log("첫줄");
//    console.log("둘째줄");
// }

// foo();
// console.log(foo);

// function power(x) {
//     return x * x;
// }

// console.log(power(10));
// console.log(power(20));

// function foo(x) {
//     bar = x * x;
//     return bar;
// }

// function multiply(x,y) {
//     return x * y;
// }

// console.log(multiply(10,20));
// console.log(multiply(20,6));

// function print(x) {
//     console.log(`"${x}"이라고말했습니다.`);
// }

// print("안녕하세요");

// function sum(min,max) {
//     let output = 0;
//     for(let i = min; i <= max; i++) {
//     output +=1;
//     }
//     return output;
// }


// console.log(1,100);



// 콜백함수
// function callTenTimes(callback) {
//     for (let i=0; i<10; i++) {
//         callback();
//     }
// }

// callTenTimes(function()) {
//     console.log("함수 호출");
// })


//

// let inputA = "52";
// let inputB = "52.273";
// let inputC = "1401동";
// let inputD = "1A동입니다.";

// console.log(parseInt(inputA));
// console.log(parseFloat(inputA));

// console.log(parseInt(inputB));
// console.log(parseFloat(inputB));

// console.log(parseInt(inputC));
// console.log(parseInt(inputD));

// console.log(Number(inputA));
// console.log(Number(inputB));
// console.log(Number(inputC));
// console.log(Number(inputD));

setTimeout(function() {
    console.log("1초 지남")
}, 1000);

setInterval(() => {
    console.log("1초지남~")
    
}, 1000);