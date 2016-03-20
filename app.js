// _.each()
// array
var food = ["beans", "spaghetti", "meatballs"];
// callback
var logger = function(val) {
	console.log(val);
};
_.each(food, logger);

// AnimalMaker

function AnimalMaker(name) {
	return {
		speak: function() {
			console.log("my name is ", name);
		}
	};
};

var animalNames = ["Puffy", "Snarls", "Flappy"];
var farm = [];

// for(var i = 0; i < animalNames.length; i++){
// 	farm.push(AnimalMaker(animalNames[i]))
// }

_.each(animalNames, function(name){
    farm.push(AnimalMaker(name));
});

// _.map
var nums = _.map([1,2,3], function(v,i,list){ return v+1;})


var food = ["beans", "spaghetti", "meatballs"];
var cooked = function(val){
	return val + '!!!';
};

var addedExclaims = _.map(food, cooked);

function AnimalMaker(name) {
	return {
		speak: function() {
			console.log("my name is ", name);
		}
	};
};

var animalNames = ["Puffy", "Snarls", "Flappy"];
var farm = [];

// long way
var pushedAnimals = _.map(animalNames, function(name){
    						return AnimalMaker(name);
						  });
// short way
var pushedAnimals = _.map(animalNames, AnimalMaker);

Use _.each to loop through an array and console.log() all the values. Now use it to console.log() the indices. How would this be different if you were looping through an object?

_.each([1,2,3], function(value, index, list){
  console.log(value);
  console.log(index)
});

Write a function called checkValue that searches an array for a value. It takes an array and a value and returns true if the value exists in the array, otherwise it returns false.

var helloArr = ['bonjour', 'hello', 'hola'];

var checkValue = function(arr, val) {
  for(var i = 0; i < arr.length; i++){
  	if(arr[i] === val){ return true}
  }
 return false;
}

checkValue('bye');

Rewrite checkValue using _.each. Make sure that you have underscore.js included where you are running your code.

var checkValue = function(arr, val) {
	result = false;
	_.each(arr, function(v){
		if(v === val) {
			result = true;
		}
	});
	return result;
}
Write a loop that pushes all the values in an object to an array.

input: {two: 2, four: 4, three: 3, twelve: 12}
output: [2, 4, 3, 12]

var myNums = _.map({two: 2, four: 4, three: 3, twelve: 12}, function(val, prop, obj){
	return prop;
});

Use _.filter to return all the even numbers in an array.

input: [9,8,7,6,5,2]
output: [8,6,2]

_.filter([9,8,7,6,5,2], function(val){
	return val % 2 === 0;
})

