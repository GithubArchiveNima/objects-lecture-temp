Primitive data types
Objects Fundamentals
Their advantages for data lookup vs arrays
How they are passed to functions
Functions as object methods
Using this when inside an object's function

1. Objects 101
Primitive types in JavaScript (string and number are primitives, passed directly by value)
The difference between a primitive vs an object
Key-value pairs as a concept.
Give a mention to the various names given to the data type. Associative array, map, dictionary, hash (without getting into abstract data types or anything like that); but focus mostly on Objects.





Objects!

## Create

```js
const meal = {}

const meal = {
    appetizer: 'Kale Salad',
    main: 'Ghormeh Sabzi',
    drink: 'Doogh',
    dessert: 'Pop tart',
    totalPrice: 23456,
    a: false,
    b: [1, 2, 3],
    c: {
        d: {
            e: {
                f: ':)'
            }
        }
    }
}
```

## Get Values

```js
meal['main'] // string
meal['dessert']
meal.main

const thing = 'drink'
meal[thing] // dynamic key

meal['c']['d']['e']['f'] // nested objects
meal.c.d.e.f // nicer? maybe!
```

## Change Values

```js
meal['drink'] = 'Mt. Dew'
// meal.drink 
```

## Add a Value

```js
// add a location
meal['location'] = 'Lighthouse Labs'
// meal.location
```

// other values inside of objects

// dot vs. square for dynamics


## Looping through an Object

```js
const obj = {
    a: 'Hello!',
    b: 'World!',
    c: 'What up!'
}

for (let key in obj) {
    console.log(key) // a, b, c
    console.log(obj[key]) // 'Hello', etc.
}
```