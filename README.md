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
|  | Run | Output |
| --- | --- | --- |
|  Undefined | `typeOf()` | Undefined |
|   | `typeOf(undefined)` | Undefined |
|  Class | `typeOf(new Person("Narendra"))`| Person |
|   | `typeOf(new Employee("Deepak", "Developer"))`| Employee |
|   | `typeOf(new Date())` | Date |
|   | `typeOf(Symbol("foo"))` | Symbol |
|  String | `typeOf("")` | String |
|   | `typeOf("---")` | String |
|  Null | `typeOf(null)` | Null |
|  Object | `typeOf({name: "Narendra"})` | Object |
|   | `typeOf({})` | Object |
|  Number | `typeOf(3.4)` | Number |
|  Boolean | `typeOf(true)` | Boolean |
|  Array | `typeOf([])` | Array |
|   | `typeOf([1,2,3,4])` | Array |
|  NaN | `typeOf(0/0)` | NaN |
|   | `typeOf(NaN)` | NaN |
|  Function | `typeOf(parseInt)` | Function |
|   | `typeOf(()=>{})` | Function |

Example setup for above test cases !
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