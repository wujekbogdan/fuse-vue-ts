const path = require('path');
const {
  FuseBox,
  WebIndexPlugin,
  SassPlugin,
  CSSResourcePlugin,
  CSSPlugin,
  PostCSSPlugin,
  QuantumPlugin,
  ImageBase64Plugin,
  VueComponentPlugin
} = require('fuse-box')
const {src, task, context} = require('fuse-box/sparky')

class Builder {
  constructor () {
    this.isProduction = false
  }

  setProduction () {
    this.isProduction = true
  }

  getFuse () {
    return FuseBox.init({
      homeDir: 'src',
      target: 'browser@es5',
      output: 'dist/$name.js',
      sourceMaps: !this.isProduction,
      useTypescriptCompiler : true,
      polyfillNonStandardDefaultUsage: true,
      plugins: [
        VueComponentPlugin(),
        WebIndexPlugin({
          template: 'src/index.html'
        }),
        [
          'src/scss/app.scss',
          SassPlugin(),
          CSSResourcePlugin(),
          PostCSSPlugin(),
          CSSPlugin({
            inject: false,
            outFile: (file) => {
              return `./dist/css/${path.basename(file)}`;
            },
          })],
        ImageBase64Plugin(),
        this.isProduction && QuantumPlugin({
          bakeApiIntoBundle: 'app',
          uglify: true,
          css: true,
        })
      ]
    })
  }

  createBundle (fuse) {
    const app = fuse.bundle('app')

    if (!this.isProduction) {
      app.hmr()
      app.watch()
    }

    app.instructions('> index.ts')

    return app
  }
}

context(Builder)

task('clean', async () => {
  await src('./dist')
    .clean('dist/')
    .exec()
})

task('default', ['clean'], async context => {
  const fuse = context.getFuse()
  fuse.dev()
  context.createBundle(fuse)
  await fuse.run()
})

task('build', ['clean'], async context => {
  context.setProduction()
  const fuse = context.getFuse()
  context.createBundle(fuse)
  await fuse.run()
})
