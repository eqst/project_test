//引入path插件
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode:'production',  //模式:生产环境
  entry:{ // 入口
    app:path.resolve(__dirname,'src/index.js')
  },
  output:{  //出口(打包生成js文件目录的配置)
    filename:'static/js/[name].bundle.js',  //[name]读取的是app
    path:path.resolve(__dirname,'dist')
  },
  module:{  //模块加载器
    rules:[
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/, //匹配css文件
        use: ['style-loader', 'css-loader'], // 多个loader从右到左处理
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,  //匹配这些格式的图片
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
      new VueLoaderPlugin()
    ]
  },
  plugins:[ //插件
    new HtmlWebpackPlugin({
      template: 'index.html', //将哪个页面当做模板(即在根目录找)
      filename: 'index.html'  //生成页面在跟目录(即上面的出口配置)
    })
  ],
  devServer:{
    open:true,
    quiet:true
  },
  devtool: 'cheap-module-eval-source-map',
}
