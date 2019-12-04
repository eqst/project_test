//引入path插件
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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

    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'index.html',
      firename:'index.html'
    })
  ],
  devServer:{
    open:true,
    quiet:true
  }
}
