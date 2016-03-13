module.exports = {
  entry: "./public/js/linktool.jsx",
  output: {
    filename: "./public/js/linktool.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}