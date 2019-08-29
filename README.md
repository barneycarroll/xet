[![Build Status](https://travis-ci.org/barneycarroll/xet.svg?branch=master)](https://travis-ci.org/barneycarroll/xet)

`xet` (**[ʃɛt]**) retrieves a `map`'s `value` for a given `key`, setting it with a provided `factory` if it isn't present.

```js
xet( map, key, factory )
// where
const factory = () => value
```

This is useful when writing in a point-free declarative dialect - virtual DOM view templates for example - and want to write functions that can conditionally run setup in the form of the factory.
