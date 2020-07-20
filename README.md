This repository is a reproduction of a bug PixiJS projects face when using webpack to bundle
pixi.js and 3rd party plugins into their app.

In `dist/bundle.js`, you can search for "*** ./node_modules/pixi.js", you will find two version of pixi.js
have been bundled:

```
/*!*********************************************!*\
  !*** ./node_modules/pixi.js/lib/pixi.es.js ***!
  \*********************************************/
```


```
/*!******************************************!*\
  !*** ./node_modules/pixi.js/lib/pixi.js ***!
  \******************************************/
```

If you search deeper, the `lib/pixi.js` version is required in pixi-batch-renderer; while the the `lib/pixi.es.js`
version is required from `src/index.js`.
