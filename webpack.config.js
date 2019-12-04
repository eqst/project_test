//引入path插件
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode:'production',
  entry:{
    app:path.resolve(__dirname,'src/index.js')
  },
  output:{
    filename:'static/js/[name].bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  module:{
    
    rules:[
      {
        test: /\.js$/,
        //exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // 多个loader从右到左处理
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'static/img/[name].[hash:7].[ext]' // 相对于output.path
        }
      },
      {
        test: /\.vue$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'vue-loader'
      },

      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      new VueLoaderPlugin()
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html'
    })
  ],
  devServer:{
    open:true,
    quiet:true
  },
  devtool: 'cheap-module-eval-source-map',
}
