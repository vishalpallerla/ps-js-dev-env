import path from 'path'; //ES6 feature

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false, //webpack displays list of all files it is building when false
  entry: [
    path.resolve(__dirname, 'src/index') //entry point
  ],
  target: 'web',  //targeting web for this application , we can have node/electron
  //webpack won't actually generate physicAL FILES for our dev build,
  //It will serve our build from memory
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  //files that need to be handled are taken care by handlers
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
