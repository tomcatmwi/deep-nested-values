# deep-nested-values #
A simple tool to find deeply nested values in JSON data structures.

## Installation ##

```
npm i deep-nested-values
```

# Methods

## hasDeepValue(data: object, route: string, createRoute: boolean = false)

Returns a Boolean indicating whether the specified route exists within the object, and creates it if `createRoute` is `true`.

## getValue(data: object, route: string)

Returns the value at the specified route, or `undefined` if not found.

##  setValue(data: object, route: string, value: string | number, createRoute: boolean = true)

Sets the value at the route. By default, it creates the route if it doesn't exist. Returns a Boolean indicating success or failure.

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