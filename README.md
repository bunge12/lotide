# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bunge12/lotide`

**Require it:**

`const _ = require('@bunge12/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array, array)`: Compares two arrays and returns true or false 
* `assertEqual(actual, expected)`: Asserts two values are equal and provides feedback in console
* `countLetters(string)`: Counts the number of letters in a string 
* `countOnly(allItems, itemToFind)`: Counts the occurence of specified item
* `eqArrays(array1, array2)`: Compare two arrays
* `eqObjects(object1, object2)`: Compare two objects
* `findKey(objects, callback)`: Scans the object and return the first key for which the callback returns a truthy value
* `findKeyByValue(object, value)`: Scans object and looks for the key name based on the value
* `flatten(array)`: Flattens an array of arrays into a single level array
* `head(array)`: Returns the first item of an array
* `letterPositions(string)`: Returns all the indices in the string where each character is found
* `map(array, callback)`: Performs a callback function on each element of an array
* `middle(array)`: Returns a middle item of the array
* `tail(array)`: Returns all items after the first 
* `takeUntil(array, callback)`: Returns a slice of the array with elements taken from the beginning
* `without(source, toRemove)`: Removes items from an array and returns a new array
