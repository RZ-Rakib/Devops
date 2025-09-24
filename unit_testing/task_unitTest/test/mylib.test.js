import * as chai from "chai";
chai.should();

import { add, sub, mul, div, validation } from "../src/mylib.js";

describe("mylib (ESM + should)", function () {
  before(function () {
    console.log("before start mylib tests");
  });

  after(function () {
    console.log("after end mylib tests");
  });

  describe("validation()", () => {
    it("throws with the exact bad input in the message", () => {
      (() => validation("2")).should.throw(Error, "2 is not a number");
      (() => validation(undefined)).should.throw(Error, "undefined is not a number");
      (() => validation(NaN)).should.throw(Error, "NaN is not a number");
    });

    it("does not throw for valid numbers", () => {
      (() => validation(-2)).should.not.throw();
      (() => validation(3.3443)).should.not.throw();
      (() => validation(0)).should.not.throw();
    });
  });

  describe("add()", () => {
    it("adds two numbers", () => {
      add(2, 3).should.equal(5);
      add(-2, 5).should.equal(3);
    });

    it("throws on invalid inputs", () => {
      (() => add("2", 3)).should.throw("2 is not a number");
      (() => add(NaN, 5)).should.throw("NaN is not a number");
    });
  });

  describe("sub()", () => {
    it("subtracts two numbers", () => {
      sub(2, 3).should.equal(-1);
      sub(-5, 2).should.equal(-7);
    });

    it("throws on invalid inputs", () => {
      (() => sub("2", 3)).should.throw("2 is not a number");
      (() => sub(NaN, 5)).should.throw("NaN is not a number");
    });
  });

  describe("mul()", () => {
    it("multiplies two numbers", () => {
      mul(2, 2).should.equal(4);
      mul(15, -2).should.equal(-30);
    });

    it("throws on invalid inputs", () => {
      (() => mul("2", 3)).should.throw("2 is not a number");
      (() => mul(NaN, 5)).should.throw("NaN is not a number");
    });
  });

  describe("div()", () => {
    it("divides two numbers", () => {
      div(12, 3).should.equal(4);
      div(15, -5).should.equal(-3);
    });

    it("throws ZeroDivision when divisor is 0", () => {
      (() => div(1, 0)).should.throw("ZeroDivision");
    });

    it("throws on invalid inputs", () => {
      (() => div("2", 3)).should.throw("2 is not a number");
      (() => div(NaN, 5)).should.throw("NaN is not a number");
    });
  });
});
