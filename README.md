# React: Hook - UseState : Counter 
Created with [CodeSandbox](https://codesandbox.io/)  
Notes from: React module  
[The Complete 2021 Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)  
Instructor: Dr. Angela Yu

## Description
This app is a counter with 2 buttons.        
The buttons allow us to decrease or increase the value in the counter.

---
## Notes

Hooks are a way of being able to make our website interactive and actually have changeable state.  
Hooks are functions that let you “hook into” React state.     
[React: Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)  

### Hook - useState
We must use Hooks inside a functional component.     
We have to create a function that renders a component and then inside that function we can use hooks.    

useState comes from the React module so we can call it using:     
```javascript
const state = React.useState();
```
or     
```javascript
import React, {useState} from "react";
const state = useState();
```

```useState()``` itself returns an array with 2 values:
* The Starting State 
  * What is between the parentheses of ```useState()``` is basically our starting state
  * Whenever I change my state, you'll see it update automatically
  * eg: ```useState(987)``` , The starting state will be 987
  * eg: if there is nothing between ```()``` it will return  ```undefined```
* A Function

In our example above, ```state``` holds the value of  ```useState()```
```javascript
console.log(state);
```

If we wanted to get hold of the initial value ```0``` that we put into this function,        
We can use ```state[0]``` and we can  use this state inside our React Component.     
```javascript
<h1>{state[0]}</h1>
```
We're telling this h1 to track the value of our state.      
And whenever the State updates, then it should also re-render this Component.       
This way is way more efficient than us calling ```ReactDOM.render``` and it only updates the parts that need to be changed. 

When usinng ```state[0]```, we are forcing to hold of the first item out of that array (the other one is a function),       
Because the output of  ```useState()``` is an array, we're using this square bracket notation ```[]```          

Caution: At some point down the line we're going to forget what ```state[0]``` means.        
The concept of Destructuring will help us to avoid this.      

### Destructuring

In JavaScript ES6, the concept of destructuring allows us to destructure a complex structure, so it looks cleaner.        
The complex things in JavaScript are objects and arrays.       
eg: We don't have to access the array through index      
```javascript
const [red, green, blue] = [9 , 132, 227]
console.log(green)
```
In our project, ```useState()``` outputs an array with a value and a function,      
We can give them a name instead of call them "state"     
```javascript
const [count, setCount] = useState(123);
...
<h1>{count}</h1> // Change h1
```
The value "count", that is clearer than "state", will hold the value of the first value returned by useState      

### Updating values

Using useState Hook to update a value:       
```useState(123)``` outputs an Initial Value and a Function;      
The Initial Value (123) is stored in the variable "count",  and rendered in the h1 Element ```<h1>{count}</h1>```           
And we can give that function a name "setCount"       
 ```const [count, setCount] = ```     

Now we can update the value      
eg: function resetToTwelve that update the value to 12
```javascript
function resetToTwelve() {
    setCount(12);
  }
...
<button onClick={increase}>+</button>
```
we use  ```setCount```   and give it a value eg: (12) .     
se when the button gets trigger ```button onClick={resetToTwelve}``` ,       
the function ```resetToTwelve()```   gets activated  and it calls  ```setCount(12)```     
so the state of ```const [count, setCount] = useState(987);``` gets updated     
and we are setting it equal to  (12) .      
So in our page,  987   is displayed , but when we press + Button, it will change to 12.   

But this will only reset the Initail value to a new updated one.      
To create a counter:
```javascript
function App() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count+1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}
```
Here we set ```useState(0)``` to have an Initial value of 0        
and our function ```increase()``` uses ```setCount()```      
to set the value of ```count``` to the current value of ```count +1```     
So when we press ```+``` button, the value of ```count``` is increased by 1


---
## What I have learned with this project:
* Use of Hooks.
* UseState(), a built-in Hook. It returns:
  * Initial Value.
  * Function.
* Destructuring to make our code readable.
* Updating values: how our functions work.
