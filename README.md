# xet

> Designed for use with ES6 [Maps](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map), and accordingly written in ES6. Recommend importing via [Babel](https://babeljs.io).

xet is (sometimes set, and then) get.

```javascript
map::xet( key, factory ) // => value
```

* If `map` doesn't have `key`, execute `factory` and set its return as `key`'s `value`. 
* Return `value`.

Like function memoization based on input, except the cache is part of your application logic.

