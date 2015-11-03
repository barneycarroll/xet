[![Build Status](https://travis-ci.org/barneycarroll/xet.svg?branch=master)](https://travis-ci.org/barneycarroll/xet)

`xet` (pronounced **ʃɛt**) retrieves a map's value for a given key, setting it with a provided factory if it isn't present.

This is especially useful when you're writing in a declarative dialect - vritual DOM view templates for example - and want to tersely express setup logic without breaking stride.

`xet` is written as a method for maps (weak or otherwise), and benefits from the ES7 bind operator:

```es7
// ES6
xet.call( map, 'foo', () => 'bar' )

// ES7
map::xet( 'foo', () => 'bar' )
```
