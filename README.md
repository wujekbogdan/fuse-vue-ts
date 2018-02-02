# Vue.js template for [FuseBox](https://fuse-box.org/) builder

## Features
- TypeScript support
- [Single File components](https://vuejs.org/v2/guide/single-file-components.html) support
- [Class-style Vue Components](https://vuejs.org/v2/guide/typescript.html#Class-Style-Vue-Components)support - thanks to [vue-class-component](https://github.com/vuejs/vue-class-component)
- Properties decorators support - thanks to [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)
- SSCS compilations
- PostCSS processing
- tslint - thanks to [tslint-config-airbnb](https://www.npmjs.com/package/tslint-config-airbnb)
- Static assets extraction and minification
- [Hot Module Replacement (HMR)](https://fuse-box.org/page/hmr)


## Usage

### Development
- run `yarn run dev` or `npm run dev`. This will compile your app and run the dev server.
- open `http://localhost:4444`.

### Production
- run `yarn run build` or `npm run build`. This will compile your app and generate static, minified, assets.
