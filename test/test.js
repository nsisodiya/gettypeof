import getTypeOf from "../index.js";
import chai from "chai";
var {expect, assert}  = chai;
var typeOf = getTypeOf;
var Add = function (a, b) {
  return a + b;
};
function Sub(a, b) {
  return a - b;
}
class Person {
  constructor(name) {
    this.name = name;
  }
}
class Employee extends Person {
  constructor(name, job) {
    super(name);
    this.job = job;
  }
}
var p1 = new Person("Narendra");
var e1 = new Employee("Narendra", "CTO");

describe('getTypeOf', function () {
  it('Testing Undefined', function () {
    expect(typeOf()).to.equal("Undefined");
    expect(typeOf(undefined)).to.equal("Undefined");
  });
  it('Testing Null', function () {
    expect(typeOf(null)).to.equal("Null");
  });
  it('Testing Number', function () {
    expect(typeOf(3)).to.equal("Number");
    expect(typeOf(3.4)).to.equal("Number");
  });
  it('Testing String', function () {
    expect(typeOf("")).to.equal("String");
    expect(typeOf("ram")).to.equal("String");
    expect(typeOf(new String(""))).to.equal("String");
    expect(typeOf(new String("ram"))).to.equal("String");
  });
  it('Testing Date', function () {
    expect(typeOf(new Date())).to.equal("Date");
  });
  it('Testing Boolean', function () {
    expect(typeOf(true)).to.equal("Boolean");
    expect(typeOf(false)).to.equal("Boolean");
    expect(typeOf(new Boolean(true))).to.equal("Boolean");
    expect(typeOf(new Boolean(false))).to.equal("Boolean");
  });
  it('Testing Object', function () {
    expect(typeOf({})).to.equal("Object");
    expect(typeOf(Object.create(null))).to.equal("Object");
    expect(typeOf(Object.create(null))).to.equal("Object");
    expect(typeOf({name: "Narendra"})).to.equal("Object");
  });
  it('Testing Array', function () {
    expect(typeOf([])).to.equal("Array");
    expect(typeOf(new Array(3, 4))).to.equal("Array");
    expect(typeOf([3, 4])).to.equal("Array");
  });
  it('Testing NaN', function () {
    expect(typeOf(0 / 0)).to.equal("NaN");
    expect(typeOf(NaN)).to.equal("NaN");
  });
  it('Testing Function', function () {
    expect(typeOf(parseFloat)).to.equal("Function");
    expect(typeOf(function () {
    })).to.equal("Function");
    expect(typeOf(() => {
    })).to.equal("Function");
    expect(typeOf(Add)).to.equal("Function");
    expect(typeOf(Sub)).to.equal("Function");
  });
  it('Testing Class', function () {
    expect(typeOf(p1)).to.equal("Person");
    expect(typeOf(e1)).to.equal("Employee");
  });
  it('Testing Symbol', function () {
    expect(typeOf(Symbol("foo"))).to.equal("Symbol");
  });
});

//TODO - WeakSet, Person, Employee, TypedArray Map, Set WeakMap