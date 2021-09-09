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
In this example ```state``` holds the value of  ```useState()```
```javascript
console.log(state);
```
Returns an array with 2 values:
* The starting state (it will return undefined)
  * What is between the parentheses of ```useState()``` is basically our starting state
  * Whenever I change my state, you'll see it update automatically
  * eg: ```useState(987)``` , The starting state will be 987
  * eg: if there is nothing between ```()``` it will return  ```undefined```

* A function

---
## What I have learned with this project
