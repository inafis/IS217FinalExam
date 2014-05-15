var expect = require("chai").expect;
var assert = require('chai').assert;
var should = require('chai').should;

var factory = require("../views/index.html");

describe("decorator", function(){
	it("makes laptop", function(){
		var included = {
			group1:"15 inches",
			group2:"128Gb",
			group3:"8Gb",
			sum:1200
		};
	    var results = decorator.included();
        expect(results).to.be.a('array');
	});
