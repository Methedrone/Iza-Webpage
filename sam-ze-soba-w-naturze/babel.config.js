module.exports = {
  presets: ['react-app'],
  plugins: [
    // Nowe pluginy zastępujące przestarzałe
    '@babel/plugin-transform-private-methods',
    '@babel/plugin-transform-numeric-separator',
    '@babel/plugin-transform-nullish-coalescing-operator',
    '@babel/plugin-transform-class-properties',
    '@babel/plugin-transform-private-property-in-object',
    '@babel/plugin-transform-optional-chaining',
  ],
}; 