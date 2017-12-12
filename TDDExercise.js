const expect = require('chai').expect;

var x = 42;
var y = 'bacon';
var z = [1,2,3,4];
var h = {name:'JJ' , type:'Person'};

function sum(bacon,cheese) {
	return bacon+cheese;
}

function subtract(a,b){
	return a-b;
}

describe("Unit Testing Framework", function() {
	it("should properly run tests!", function () {
		expect(true).to.be.true;
	});
	
	//Create variables to make the tests pass
	it("shows that we can declare variables of different types!", function () {
		expect(x).to.be.a('number');
		expect(y).to.be.a('string');
		expect(z).to.be.an('array');
		expect(h).to.be.an('object');
	});

	//Assign values to variables to make the tests pass
	it('shows we can assign values to variables', function () {
		expect(x).to.equal(42);
		expect(y).to.equal('bacon');
		expect(z).to.eql([1,2,3,4]);
		expect(h).to.have.all.keys('name','type');
		expect(h).to.deep.equal({name: "JJ", type:"Person"});
		
	});

	//Write functions to do math
	it('shows that we can write functions to do arithmetic', function() {
		expect(sum(4,2)).to.equal(6);
		expect(sum(6,4)).to.equal(10);
		expect(sum(8,15)).to.equal(23);
		expect(subtract(10,5)).to.equal(5);
	// 	expect(multiply(3,8)).to.equal(24);
	// 	expect(divide(9,3)).to.equal(3);
	});

	//Write a function to check basic logic
	// it('shows that we can use conditional logic properly', function() {
	// 	expect(logicCheck(5 == 5)).to.be.true;
	// 	expect(logicCheck(3 > 7)).to.be.false;
	// });

} );