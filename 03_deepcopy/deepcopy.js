/**
 * Make a Deep Copy of an Object
 *
 * This appears to be a very complex problem to solve for all cases.
 * I have pulled together some ideas from a few diffrent places.
 *
 * @see http://heyjavascript.com/4-creative-ways-to-clone-objects/
 * @see http://stackoverflow.com/questions/728360
 *
 * @param {Object} obj The object to copy.
 * @returns {Object} A copy of the intial obj.
 */
function MakeDeepCopy(obj)
{
	// If it's not an object, just return the value as is.
	// We make an assumption the value is immutable.
	if (obj === null || typeof obj !== 'object') return obj;

	// Create the new object, inheriting the provided objects prototype.
	var copy = Object.create(obj);

	// Loop through provided objects properties
	for (var key in obj)
	{
		// Only copy properties that are owned by the provied object
		if (obj.hasOwnProperty(key))
		{
			// Recurse into the object
			copy[key] = MakeDeepCopy(obj[key]);
		}
	}

	// Return the copied object
	return copy;
}

// An object to copy
var bart =
{
	name: "Bart Wolkowski",
	address:
	{
		number: '6/435-443',
		street: 'Little Collins Street',
		city: 'Melbourne',
		postcode: 3000,
		state: 'VIC'
	}
};

// Lets create a copy of bart
var brad = MakeDeepCopy(bart);

// Both bart and brad should have all the same details
console.log(bart.name == brad.name);
console.log(bart.address.number == brad.address.number);
console.log(bart.address.street == brad.address.street);
console.log(bart.address.city == brad.address.city);
console.log(bart.address.postcode == brad.address.postcode);

// But they should not be the same object.
console.log(bart !== brad);

// Now update brad with his details
brad.name = "Brad Jones";
brad.address.number = '32';
brad.address.street = 'Alexander St';
brad.address.city = 'Melbourne';
brad.address.postcode = 3034;

// Now lets make sure both bart and brad have their correct details
console.log(bart.name == 'Bart Wolkowski');
console.log(bart.address.number == '6/435-443');
console.log(bart.address.street == 'Little Collins Street');
console.log(bart.address.city == 'Melbourne');
console.log(bart.address.postcode == 3000);

console.log(brad.name == 'Brad Jones');
console.log(brad.address.number == '32');
console.log(brad.address.street == 'Alexander St');
console.log(brad.address.city == 'Melbourne');
console.log(brad.address.postcode == 3034);
