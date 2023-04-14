# deep-nested-values #
A simple extension to the `Object` class to help find deeply nested values in JSON data structures.

## Installation ##

```
npm i deep-nested-values
```

## How does it work? ##

The regular JavaScript `Object` class now has 3 new methods to find, create, read and write deep nested values. Routes to the value can be specified as a period-separated string, such as: `nested.deepnested.cat`.

# Methods

## hasValue(route: string, createRoute: boolean = false)

Returns a Boolean indicating whether the specified route exists within the object, and creates it if `createRoute` is `true`.

## getValue(route: string)

Returns the value at the specified route, or `undefined` if not found.

##  setValue(route: string, value: string | number, createRoute: boolean = true)

Sets the value at the route. By default, it creates the route if it doesn't exist. Returns a Boolean indicating success or failure.

## Examples ##

```
require('deep-nested-values');

const data = {
    something: 'nothing',
    value: 32,
    nested: {
        hello: 'world',
        whatever: 'something',
        deepnested: {
            cat: 'meow',
            someNumber: 1234
        }
    }
}


data.hasKey('nested.deepnested.cat');
//  returns true

data.getKey('nested.deepnested.cat');
//  returns 'meow'

data.setKey('nested.deepnested.cat', 'purr');
//  returns true

data.getKey('nested.deepnested.cat');
//  returns 'purr'
```
