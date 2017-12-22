const expect = require('chai').expect;

let x  = 42;
let y = 'bacon';
let z = [1,2,3,4];
let h = {name: "JJ", type: "Person"};

const sum = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;
const logicCheck = (param) => {
	if (param){
		return true;
	}
	return false;
}

describe("Unit Testing Framework", () => {
	it("should properly run tests!",  () => {
		expect(true).to.be.true;
	});
	
	//Create variables to make the tests pass
	it("shows that we understand data types!",  () => {
		expect(x).to.be.a('number');
		expect(y).to.be.a('string');
		expect(z).to.be.an('array');
		expect(h).to.be.an('object');
	});

	// //Assign values to variables to make the tests pass
	it('shows we can assign values to variables', () => {
		expect(x).to.equal(42);
		expect(y).to.equal('bacon');
		expect(z).to.eql([1,2,3,4]);
		expect(h).to.have.all.keys('name','type');
		expect(h).to.deep.equal({name: "JJ", type:"Person"});
		
	});

	// //Write functions to do math
	it('shows that we can write functions to do addition', () => {
	 	//Write a function that adds numbers together
		expect(sum(4,2)).to.equal(6);
		expect(sum(4,5)).to.equal(9);	
	});

	it('shows that we can write functions to do subtraction', () => {
	 	//Write a function that subtracts numbers
		expect(subtract(10,5)).to.equal(5);
		expect(subtract(15,6)).to.equal(9);
	});
	
	it('shows that we can write functions to do multiplication', () => {
	//	Write a function that multiplies two numbers
		expect(multiply(3,8)).to.equal(24);
	 	expect(multiply(2,7)).to.equal(14);
	});
	
	it('shows that we can write functions to do division', () => {
	// 	Write a function that divides two numbers
		expect(divide(9,3)).to.equal(3);
		expect(divide(8,4)).to.equal(2);
	});

	// 	Write a function to check basic logic
	
	it('shows that we can use conditional logic properly', function() {
		expect(logicCheck(5 == 5)).to.be.true;
		expect(logicCheck(3 > 7)).to.be.false;
	});

		var input = [1, 2, 3, 4, 5, 6];
		var output = [10 ,20, 30, 40, 50, 60];
		function testForLoop(input, output){
			it('shows we can use a for loop to repeat tasks', function() {
				expect(input * 10).to.equal(output);
			});
		}
		for (var i = 0; i < input.length; i++) {
			testForLoop(input[i], output[i]);
			
		}


	//  it('shows we can write and call functions', function() {
	//  	//Write a function that reverses a string
	//  	expect(reverseAString('hello')).to.equal('olleh');
	//  	//Write a function that sums the values in an array
	//  	expect(addArray([1,2,3,4,5])).to.equal(15);
	//  })

});

