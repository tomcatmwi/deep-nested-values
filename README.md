# deep-nested-values #
A simple tool to find deeply nested values in JSON data structures.

## Installation ##

```
npm i deep-nested-values
```

## How does it work? ##

There are two ways to use `deep-nested-values`: you can either import and call its methods, or extend default the `Object` class.

# Methods

## hasDeepValue(data: object, route: string, createRoute: boolean = false)

Returns a Boolean indicating whether the specified route exists within the object, and creates it if `createRoute` is `true`.

## getValue(data: object, route: string)

Returns the value at the specified route, or `undefined` if not found.

##  setValue(data: object, route: string, value: string | number, createRoute: boolean = true)

Sets the value at the route. By default, it creates the route if it doesn't exist. Returns a Boolean indicating success or failure.

##  extendObject() ##

Extends the JavaScript `Object` type with the above methods. Omit the `data` parameter when calling them. See examples below. Vue 3 doesn't seem to like this, so just use the regular methods instead.

## Examples ##

```
import { getDeepValue, setDeepValue, hasDeepValue } from 'deep-nested-vales';

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


hasDeepValue(data, 'nested.deepnested.cat');
//  returns true

getDeepValue(data, 'nested.deepnested.cat');
//  returns 'meow'

setDeepValue(data, 'nested.deepnested.cat', 'purr');
//  returns true

getDeepValue(data, 'nested.deepnested.cat');
//  returns 'purr'
```

## Extending `Object` ##

```
import { extendObject } from 'deep-nested-vales';

extendObject();

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

data.hasDeepValue('nested.deepnested.cat');
//  returns true

data.getDeepValue('nested.deepnested.cat');
//  returns 'meow'

data.setDeepValue('nested.deepnested.cat', 'purr');
//  returns true

data.getDeepValue('nested.deepnested.cat');
//  returns 'purr'
```