const path = require("path");

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundeld.js',
        path: path.resolve(__dirname, 'app')
    },
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'app')
        }, 
        hot: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader', 
                    'css-loader', 
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-simple-vars'),
                                    require('postcss-nested'),
                                    require('postcss-mixins'),
                                    require('autoprefixer')
                                ]
                            }
                        }
                    }]
            }
        ]
    }
}