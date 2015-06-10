/**
 * Magic Method.
 *
 * Extend the "Function" prototype with the "magic" method.
 * This is super simple but does satify the requirements.
 *
 * I also didn't want to simply end up with
 * a copy of the standard "bind" polyfill.
 * @see https://goo.gl/ldkw5e
 */
if (!Function.prototype.magic)
{
	Function.prototype.magic = function(input1)
	{
		var originalFunction = this;

		var wrappedFunction = function(input2)
		{
			return originalFunction.apply(null, [input1, input2]);
		};

		return wrappedFunction;
	};
}

// The original methods
var add = function(a, b) { return a + b; }
var say = function(something) { return something; }

// Magic versions of the original methods
var addTo = add.magic(2);
var welcome = say.magic('Hi, how are you?');

// And the simple test case, both should output true.
console.log(addTo(5) == 7);
console.log(welcome() == 'Hi, how are you?');
