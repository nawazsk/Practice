(function(){

  //1. Scope& Contextin JS
  //1-1.

  function Bar(){
    (function self(){
      console.log(this);
    })();
  }
  function Drinks(){
    (()=> console.log(this))();
  }
  const barObj = new Bar(); // This will return Window Object as this
  const drinksObj = new Drinks(); // This will return Drinks as this


  //1-2.

  let foo = 0;

  function bar() {
    if (!foo) {
      let foo = 10;
       console.log(foo); //10
    }

    console.log(foo); //0
  }
  bar();

  //1-3.

  let guessMe1 = 1;
  let guessMe2 = 2;

  {
    try {
      console.log( guessMe1, guessMe2 ); // guessMe2 is undefined because we have reintialised it in scope.

    } catch (err){
      console.log("Oops", err)
    }
    let guessMe2 = 3;
    console.log( guessMe1, guessMe2 ); // (1, 3)
  }
  console.log( guessMe1, guessMe2 ); // (1,2)



  //2. Arrow Function

  //2-1.
  const  myfunc = (list) => arguments[0].sort();
  const myList= myfunc([10,20,25]);
  console.log(myList); //error that arguments is empty and no sort on arguments.


  //2-2.

  function foo(n) {
    const f = () => arguments[0] + n;
    return f();
  }
  const myfoo = foo(1);
  console.log(myfoo ); //2


  //2-3.

  var obj = {
    i: 10,
    b: () => console.log(this.i, this),
    c: function() {
      console.log(this.i, this);
    }
  }
  obj.b(); // undefined, window
  obj.c(); // 10, obj

  //2-4.

  const Foo = () => {
    this.name ="Mike";
  };
  const obj = new Foo(); //error : Foo is not a constructor
  console.log(obj.name);

  //2-5.

  const Foo = () => {};
  Foo.prototype.name = "name" //Cannot set property 'name' of undefined
  console.log(Foo.name); //error

  //2-6.Write code snippet to create arrow function with name profile that takes 2 arguments (name & age) and return object with properties name & age in implicit/implied way (concise body)

  const name ="Mike";
  const age = "20";

  const profile = (name, age) =>  ({name,age})

  console.log(profile(name,age));

  //2-7. Write an arrow function which takesarray of integers, and returns the sum of theelements of the array. Use JS reducemethodin solution.

  var array = [1,2,3,4,5];
  const sum = (array)=> {
    const reducer  = (accumulator, currentValue) => accumulator + currentValue;

    console.log(array.reduce(reducer));

  }

  sum(array);



  //3. Default arguments

  //3-1.

  function calc(total, tax=.20, tip=.10) {
    return total + total*tax + total*tip;
  }
  const bill = calc(100,null,.2);
  console.log(bill); //120

  //3-2

  function test(num =1 ){
    console.log(typeof num);
  }
  test("") //string


  //3-4 Write a function that executes a callback function after a given delay in milliseconds. Thedefault value of delay is one second.

  function test1(callback) {
    console.log("test");

    setTimeout(callback,1000);
  }
  function test2() {
    console.log("test2");
  }

  test1(test2);


  //3-4 Change the below code such that the second argument of printComment has a default valuethat’s initially 1, and is incremented by 1 after each call.

  function printComment( comment , line = 1) {
    console. log( line, comment ) ;
  }

  printComment("comment");
  printComment("comment2",2);
  printComment("comment3",3);


  //4. Currying in Js

  //4-1

  const curriedMultiply = n => m => n * m;
  const calc= curriedMultiply(3)(4)
  console.log(calc); // 12

  //4-2 Create a function than when executed as followsgreetings('Mike')('Wishyou Happy Birthday!')('Steve');will print in below format (Should maintain line breaks)Dear Mike,Wish you Happy Birthday!From, SteveNote

  const greetings = a => b => c => {
    return `
      Dear ${a}
      ${b}
      From,
      ${c}
    `
  }

  console.log(greetings('Mike')('Wishyou Happy Birthday!')('Steve'));







})();
