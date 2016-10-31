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
| Setup | Run | Output |
| --- | --- | --- |
|  | `typeOf()` | Undefined |
|  | `typeOf(undefined)` | Undefined |
| ```js class Person {constructor(name) {this.name = name;}}```| typeOf(new Person)| "Person" |
| ```js class Employee extends Person {constructor(name, job) {super(name);this.job = job;}}```| typeOf(new Employee)| "Employee" |