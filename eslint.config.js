import js from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js'
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintImport from 'eslint-plugin-import'
import react from 'eslint-plugin-react';
import hooks from 'eslint-plugin-react-hooks'

export default [
    js.configs.recommended,
    eslintConfigPrettier,

    {
        files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
        plugins: {
            react,
            eslintImport,
            'react-hooks': hooks,
            '@stylistic/js': stylisticJs,
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            'no-console': 'error',
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
            'prefer-const': 'error',
            'padding-line-between-statements': [
                'error',
                {
                    'blankLine': 'always',
                    'next': 'return',
                    'prev': '*'
                },
                {
                    'blankLine': 'always',
                    'next': ['block-like', 'multiline-block-like'],
                    'prev': ['block-like', 'multiline-block-like']
                },
                {
                    'blankLine': 'never',
                    'next': 'empty',
                    'prev': 'empty'
                }
            ],
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
            'eslintImport/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal'],
                    pathGroups: [
                        {
                            pattern: '{react,react-dom/**}',
                            group: 'external',
                            position: 'before',
                        },
                    ],
                    pathGroupsExcludedImportTypes: ['react'],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],
            '@stylistic/js/quotes': ['error', 'single'],
            '@stylistic/js/object-curly-spacing': ['error', 'always'],
            '@stylistic/js/indent': 'error',
            '@stylistic/js/no-multi-spaces': 'error',
            '@stylistic/js/key-spacing': ['error', { 'afterColon': true, 'mode': 'strict' }],
            'react-hooks/exhaustive-deps': 'warn'
        }
    }
];
