module.exports = {
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: ['node_modules', 'src/'],
            },
        },
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    env: {
        browser: true,
        es2020: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended'],
    overrides: [],
    parser: '@typescript-eslint/parser',
    plugins: ['prettier', 'react', '@typescript-eslint', 'import'],
    rules: {
        'prettier/prettier': 'error',
        'react/display-name': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-undef': 'off',
        'react/jsx-max-props-per-line': [1, { maximum: 1, when: 'multiline' }],
        'react/jsx-first-prop-new-line': [1, 'multiline'],
        'no-unused-vars': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        // turn on errors for missing imports
        'import/no-unresolved': 'error',
        // 'import/no-named-as-default-member': 'off',
        'import/order': [
            'error',
            {
                groups: [
                    'builtin', // Built-in imports (come from NodeJS native) go first
                    'external', // <- External imports
                    'internal', // <- Absolute imports
                    ['sibling', 'parent'], // <- Relative imports, the sibling and parent types they can be mingled together
                    'index', // <- index imports
                    'unknown', // <- unknown
                ],
                'newlines-between': 'always',
                alphabetize: {
                    /* sort in ascending order. Options: ["ignore", "asc", "desc"] */
                    order: 'asc',
                    /* ignore case. Options: [true, false] */
                    caseInsensitive: true,
                },
            },
        ],
    },
};
