# create-react-app + shadow-cljs

This was created by `yarn create react-app cljs-react-app`.

```
shadow-cljs watch npm
yarn start
```

### Fixing HMR

`create-react-app` doesn't reload code from `node_modules` by default so we need to do some adjustments.

Edit this file:
```
node_modules/react-scripts/config/webpackDevServer.config.js
```

And change the `watchOptions.ignored` regexp from
```
    watchOptions: {
      ignored: /node_modules/
    },
```
to
```
    watchOptions: {
      ignored: /node_modules\/(?!shadow-cljs)/
    },
```

You can also do a full `eject` but that seems like overkill for such a simple change.

Maybe this won't be necessary in the future but for now I prefer this way over the alternatives.

https://github.com/facebookincubator/create-react-app/issues/2281

Don't know why this is so slow though ... letting `shadow-cljs` reload the code instead of HMR is way faster but since you cannot disable code-reloading of CRA they interfere with each other frequently.