(function(){
//1.Spread Operator& Rest Parameter

//1-1 Create  a JavaScript function that takesa string as argument and returns a string with letters in alphabetical
// order.Examplestring:'dbca'ExpectedOutput:‘abcd’Note:Use Arrow function with spread operator to achieve solution

const sortedString = (str) => str.split("").sort().join("")
console.log(sortedString("bgsade"));


//1-2 Solve using arguments object and spread operator
  //Define a function that concatenates several
 // stringsin below format–Function should take a separatoras first argumentand multiple strings
 // arguments–Function should return stringsconcatenated and separated by
 // separatorInput: test(", ", "Hello Sir", "How are you", "My name is Mike");Output -"Hello Sir, How are you, My name is Mike"

function concatTest(separator, ...arguments) {
    var str = arguments.join(separator);
    //
    console.log(str);
}

concatTest(", ", "Hello Sir", "How are you", "My name is Mike");

//1-3 Solve using arrow function and ...rest param
  //Define a function that concatenates several
 // stringsin below format–Function should take a separatoras first argumentand multiple strings
 // arguments–Function should return stringsconcatenated and separated by
 // separatorInput: test(", ", "Hello Sir", "How are you", "My name is Mike");Output -"Hello Sir, How are you, My name is Mike"

const concatTest1= (separator, ...arguments) => arguments.join(separator)

concatTest1(", ", "Hello Sir", "How are you", "My name is Mike");

//1-4
  // const myfunc = (...arg, separator)=>arg.join(separator);
  // const myVal = myfunc(10,20,30,",");
  // console.log(myVal); //error rest param will be last formal param


//1-5

  // const myfunc = ...arg =>arg.join(",");
  // const myVal = myfunc(10,20,30);
  // console.log(myVal); //unexpected token ... , use brackets ()


//1-6 Solve using spread operator Write an arrow function that takes Integer as argument and returns integer in reverseExample: Input –funcReverse(123456);Output –654321

  const funcReverse = (num) => parseInt(num.toString().split("").reverse().join(""))

  console.log(funcReverse(123456));


//1-7
  let array1 = [1,2];
  let array2 = [3,4,5];
  array1.push(array2);
  console.info(array1); //[1,2, [3,4,5]]

//1-8
const concatArrays = (base,...arguments) => {
  for(var i=0;i<arguments.length;i++) {
    base.push.apply(base,arguments[i]);

  }

  console.log(base)
}


concatArrays([1,2,3], [4,5,6],[7,8,9]);

//1-9

const concatArrays2 = (base, ...arguments) => {
  for(var i=0;i<arguments.length;i++) {
    base.push(...arguments[i]);

  }

  console.log(base);
}

concatArrays2([1,2,3], [4,5,6],[7,8,9]);


//2. Destructuring

//2-1
  // function f() {
  //   return [2, 5, 6];
  // }
  // let a, b;
  // [a , , b] = f();
  // console.log(a); //2
  // console.log(b); //6


//2-2

// let obj = { a: 2, b: 4 };
//
// let {a, b} = obj;


//2-3

  // let data = {
  //   role:"Engineer",
  //   company:"SR",
  //   personal: {
  //     name:"Sumit",
  //     age:25,
  //     country:"IND",
  //     state:undefined,
  //     spouse: {
  //       name:"Reena"
  //     }
  //   }
  // }
  //
  // let {company="sapient"} = data
  // let {name, age,country, state="AP"} = data.personal;
  // let {spouse} = data.personal;
  //
  // console.log(spouse);


  //2-4
  // let arr = [
  //   {name:"Mike", age :25, role:"Engineer", company:"SR"},
  //   {name:"Sam", age :27, role:"Senior Engineer", company:"SR"},
  //   {name:"Peter", age :28, role:"Senior Program Manager", company:"SR"}
  // ];
  // let newArray=[];
  // for(item of arr) {
  //     const {name, company} = item;
  //
  //     newArray.push({name,company});
  //
  // }
  // console.log(newArray);


//2-5
// let data1 = {
//   role:"Engineer",
//   company:"SR",
//   personal: {
//     name:"Sumit",
//     age:25,
//     country:"IND",
//     state:undefined,
//     children:[ {
//       name:"Mayank"
//     }]
//   }
// }
//
// const {children:[{name}]} = data1.personal;



// console.log(data1.personal.children[0].name);

// const {name} = data1.personal.children[0];
// console.log(name);

//2-6

// let dobj = {
//   name: "abc",
//   age: 13
// }
//
// const DestructureObj = (obj) => {
//     const{name="test", age=10} = obj;
//
//     console.log(name, age);
// }
// DestructureObj(dobj);

//2-7

// let dArray = [ 10, 20];
//
// const addition = (op, ...arr) => {
//
//   const [val1, val2] = arr;
//
//   console.log(val1);
//   console.log(val2);
//
// }
//
// addition("add",dArray);
//
// let dObj= {
//   "first":"abc",
//   "last":"cdg"
// }
//
// const dStrucObj = (...dObj) => {
//
// }
//
// dStrucObj(dObj);

})();
