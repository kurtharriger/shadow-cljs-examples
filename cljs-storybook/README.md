# storybook with shadow-cljs

Quick example showing how to use storybook with CLJS.


```bash
$ npm install
$ npx shadow-cljs watch stories
$ npm run storybook
$ open http://localhost:6006

# to build static version
$ npm run build-storybook
```

Code was created by running the `getstorybook` CLI.

Manually added the `.storybook/.babelrc` file it stop `storybook` from rewriting the output since we don't need that.