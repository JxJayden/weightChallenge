module.exports = {
    env: {
        node: true,
        commonjs: true,
        es6: true
    },
    extends: ['standard'],
    plugins: ['async-await'],
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module'
    },
    rules: {
        'standard/array-bracket-even-spacing': 0,
        'comma-dangle': ['error', 'always'],
        'no-console': 0,
        'no-debugger': 0,
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'never']
    }
}
