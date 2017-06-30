# npm-module-example

CLJS for JS devs

### Instructions

```
git clone https://github.com/thheller/npm-module-example.git
cd npm-module-example

yarn (or npm install)
./node_modules/shadow-cljs/bin/shadow-cljs compile npm

# or install shadow-cljs globally as well
yarn global add shadow-cljs
npm install -g shadow-cljs

# then you can just use
shadow-cljs compile npm
```

You need either `java` installed or `yarn global add node-jre`.

After that has finished compiling you may either run
```
node index.js
```

Or
```
webpack -d
```

Or
```
browserify -d index.js -o dist/bundle.js
```

And then `open dist/index.html`.


# Production mode

```
shadow-cljs release npm
webpack -p
```