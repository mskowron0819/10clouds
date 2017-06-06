module.exports = {
    entry: {
        main: ['./src/main.js', './src/style.scss']
    },
    output: {
        filename: "./dist/out.js"
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {presets: ['es2015']}
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: "file-loader?name=src/img/[name].[ext]"
            }
        ]
    }
};
