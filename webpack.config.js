const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development', // Ustawia tryb deweloperski (dla produkcji użyj 'production')
  entry: './index.js', // Punkt wejściowy aplikacji
  output: {
    path: path.resolve(__dirname, 'dist'), // Folder wyjściowy
    filename: 'bundle.js', // Nazwa pliku wynikowego
    clean: true, // Czyści folder dist przed każdym nowym buildem
  },
  module: {
    rules: [
      // Obsługa plików JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // Obsługa plików CSS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Obsługa plików SCSS
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // Obsługa plików graficznych
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    // Generuje plik HTML bazowy
    new HtmlWebpackPlugin({
      template: './index.html', // Wskazuje na bazowy plik HTML
      filename: 'index.html', // Nazwa wyjściowego pliku HTML
    }),
    // Kopiuje statyczne pliki do folderu docelowego
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: 'public' }, // Kopiuje zawartość folderu public
      ],
    }),
  ],
  // Konfiguracja serwera deweloperskiego
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
    },
    compress: true,
    port: 9000,
    hot: true, // Włącza Hot Module Replacement
    open: true, // Automatycznie otwiera przeglądarkę
  },
};
