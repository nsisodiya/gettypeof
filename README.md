# gettypeof
getTypeOf - The Smartest way to get Type* in JavaScript

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/gettypeof.svg?style=flat-square
[npm-url]: https://npmjs.org/package/gettypeof
[download-image]: https://img.shields.io/npm/dm/gettypeof.svg?style=flat-square
[download-url]: https://npmjs.org/package/gettypeof

# Install

[![gettypeof](https://nodei.co/npm/gettypeof.png?downloads=true)](https://npmjs.org/package/gettypeof)

# Use
```js
import typeOf from "gettypeof"
var x = "hello";
if(typeOf(x) === "String"){
    //This will be True
}
```
# Input Output Table
| Run | Output |
| --- | --- |
| `typeOf()` | Undefined |
| `typeOf(undefined)` | Undefined |
| `typeOf(new Person("Narendra"))`| Employee |
| `typeOf(new Employee("Deepak", "Developer"))`| Employee |
| `typeOf("")` | String |
| `typeOf("---")` | String |
| `typeOf(null)` | Null |
| `typeOf({name: "Narendra"})` | Object |
| `typeOf({})` | Object |
| `typeOf(3.4)` | Number |
| `typeOf(new Date())` | Date |
| `typeOf(true)` | Boolean |
| `typeOf([])` | Array |
| `typeOf([1,2,3,4])` | Array |
| `typeOf(0/0)` | NaN |
| `typeOf(NaN)` | NaN |
| `typeOf(parseInt)` | Function |
Assume
```js
class Person {
  constructor(name) {
    this.name = name;
  }
}
class Employee extends Person {
  constructor(name, job) {
    super(name);
    this.job = job;
}}
```