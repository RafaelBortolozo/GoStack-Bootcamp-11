const { dirname } = require('path')
const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'), /*arquivo de entrada da aplicacao*/
    
    output: {   /*arquivo que será gerado após a conversão*/
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'), /*diretório que contém arquivos publicos da aplicação*/
    },
    module: {
        rules: [
            {
                test: /\.js$/, /*string deve terminar com .js*/
                exclude: /node_modules/, /*o conteudo contido no node_modules é de responsabilidade
                                         da própria biblioteca, por isso não será convertido*/
                use: {
                    loader: 'babel-loader', 
                }
            }
        ]
    }
}


