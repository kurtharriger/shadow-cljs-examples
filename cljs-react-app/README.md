# create-react-app + shadow-cljs

This was created by `yarn create react-app cljs-react-app`.

```
yarn cljs -- --dev
yarn start
```


## Problems

I want to write a proper guide for this but first need to work out the kinks.

- `create-react-app` doesn't reload code from `node_modules` so I tried using `shadow-cljs` to reload the code. This works fine but `yarn start` never picks up any changes so if you do a full page reload you will get an "old" version. The problem is that CRA will do a full reload when you edit CSS or so.

