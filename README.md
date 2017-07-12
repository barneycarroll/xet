[![Build Status](https://travis-ci.org/barneycarroll/xet.svg?branch=master)](https://travis-ci.org/barneycarroll/xet)

`xet` (pronounced **ʃɛt**) retrieves a map's value for a given key, setting it with a provided factory if it isn't present.

This is especially useful when you're writing in a declarative dialect - vritual DOM view templates for example - and want to tersely express setup logic without breaking stride.

```js
xet( map, 'foo', () => 'bar' )
```
