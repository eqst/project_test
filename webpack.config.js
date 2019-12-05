const path =require('path')
//引入js解析器及自动引入js的插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
//引入自动打包编译插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
  mode:'production',
  entry:{
    app:path.resolve(__dirname,'src/index.js')
  },
  output:{
    filename:'static/js/[name].bundle.js',
    path:path.resolve(__dirname,"dist")
  },
  module:{
    rules:[
      //匹配vue
      {
        test: /\.vue$/,
        include:path.resolve(__dirname,"src"),
        loader:'vue-loader'
      },
      //匹配js
      {
        test:/\.js$/,
        include:path.resolve(__dirname,"src"),
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        }
      },
      //匹配css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // 多个loader从右到左处理
      },
      //匹配图片
      {
        test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'static/img/[name].[hash:7].[ext]' // 相对于output.path
        }
      }
    ]
  },
  plugins:[
    new HTMLWebpackPlugin({
      template:'index.html',
      filename:'index.html'
    }),
    new VueLoaderPlugin()
  ],
  devServer:{
    open:true,
    quiet:true
  },
  resolve:{
    extensions:['.js','.vue','.json'], //文件匹配顺序
    alias:{
      'vue$':'vue/dist/vue.esm.js'  //精确匹配
    }
  },
  devtool: 'cheap-module-eval-source-map' //报错时能够直接找到相关的源文件地址
}