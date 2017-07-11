### ANSWERS

1. Use the "typeof" keyword to test the type of a data. Javascript's data types are divided into the primitive data types of: strings, numbers, boolean, null, and undefined. These primitive types do not contain a reference and thus are immutable. In contrast, there is also the data type of object in javascript which can change in value as you call them by reference.

Eg:
console.log(typeof "This is a string") => string
console.log(typeof 45)                 => number
console.log(typeof new Object())       => object
console.log(typeof d)                  => undefined
console.log(typeof null)               => object  (glitch in the matrix)

function??


2. null is a javascript object and represents the lack of a value. undefined means a variable has been declared but has not yet been given a value. Generally undefined values are assigned by the machine and null are assigned by the programmer so they can be very useful for finding bugs.


3. Double equals tests for comparison of the same values. There can be conversion of type before this is equated though. When using the triple equals, javascript will first consider whether the data types are the same type before seeing if their values are the same.

eg: 1 == true
// will yield true because will doesn't take into consideration the types of the data (1 being a number and true being a boolean)

eg: 1 === true => false

4.
Event Handler - a callback function assigned to a specific event listener.

Event Bubbling - The process that occurs when a child event is initiated. This event is registered and then travels upwards through the DOM until it reaches the root object. All parent elements will register the event, and if the event type matches any of the event types of that object, it will trigger the corresponding event handlers.

stopPropogation - this will stop bubbling. So if you click on something and initiate an event, the event object will stop propagating to parents as soon as it hits this method.

preventDefault - Stops the default action on the element it is applied to.

5.
Promises are object types that deal with the problem of deriving values from asynchronous processes. When a process is initiated it will try to find a specific value. The is the "pending" stage. If the promise finds the correct value, the promise will be "fulfuilled", otherwise the promise could not find the value it was looking for and will return with a "rejected" state.

Depending on the returned state of the promise (fulfilled or rejected), the user can either take that information and do something with it. This can be handled with a "then" statement to deal with the either the fulfilled promise or the rejected promise. The user can also  catch the rejected data (with a "catch" statement) and do something with this error information.

The syntax of a promise is as follows:

let result = new Promise((resolve, reject) => {
  if(everything goes well) {
    resolve(data);
  } else {
    reject("An error message");
  }
  })

  result
  .then((data) => {
    do stuff with data
    })
  .catch((err) => {
    // display error message
    console.log(err)
    })
  .then(
    () => {
    console.log("This will be executed because of catch");
    },
    () => {
      console.log("Won't be executed"); // <= this statement would deal with theoretical rejected case
    });
