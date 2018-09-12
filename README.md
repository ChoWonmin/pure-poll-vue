# purepoll

> The aim of the project is to create an clear poll using blockchain. This project is realized Web service.

## Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# publish for production with express
npm run publish

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

```


## Build for Dev
host & port setting

> /config/index.js
```
dev : {
  host : [HOST]
  port : [PORT]
}
```

## Build for Publish
port * cors setting

> /config/index.js
```
publish :{
  port : [PORT],
  cors : '*',
}
```


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
