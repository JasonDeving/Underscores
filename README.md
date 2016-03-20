#Underscores ._each() vs ._map()

The difference between each vs map is map has return and return can be stored in variable.

# _.each()

```js
// array
var food = ["beans", "spaghetti", "meatballs"];
// callback
var logger = function(val) {
	console.log(val);
};
_.each(food, logger);
```

# AnimalMaker

```js
function AnimalMaker(name) {
	return {
		speak: function() {
			console.log("my name is ", name);
		}
	};
};
```

```js
var animalNames = ["Puffy", "Snarls", "Flappy"];
var farm = [];

// for(var i = 0; i < animalNames.length; i++){
// 	farm.push(AnimalMaker(animalNames[i]))
// }

_.each(animalNames, function(name){
    farm.push(AnimalMaker(name));
});
```

# _.map

```js
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
```

