import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Your existing Next.js core-web-vitals configuration
  ...compat.extends('next/core-web-vitals'),

  // Base JavaScript configuration
  js.configs.recommended,

  // Global configuration for all files
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        fetch: 'readonly',
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        alias: {
          map: [
            ['@', '.'], // Fixed: Changed from "./src" to "." (root)
          ],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },

  // Main configuration for JS/JSX/TS/TSX files
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
    },

    rules: {
      // React specific rules for performance and best practices
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'error',
      'react/no-unused-prop-types': 'error',
      'react/no-unused-state': 'error',
      'react/prefer-stateless-function': 'warn',
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-fragments': ['error', 'syntax'],
      'react/jsx-pascal-case': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-constructed-context-values': 'error',
      'react/jsx-no-leaked-render': 'error',
      'react/no-array-index-key': 'warn',
      'react/no-danger': 'warn',
      'react/no-multi-comp': ['error', { ignoreStateless: false }],

      // React Hooks rules for performance
      ...reactHooks.configs.recommended.rules,
      'react-hooks/exhaustive-deps': 'warn',

      // Performance and optimization rules
      'no-console': ['warn', { allow: ['warn', 'error', 'log'] }],
      'no-debugger': 'error',
      'no-alert': 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'no-unused-vars': 'off', // Using unused-imports plugin instead

      // Import/Export rules for better organization
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // React and Next.js imports first
            ['^react', '^next'],
            // External packages
            ['^@?\\w'],
            // Internal packages (adjust based on your alias)
            ['^@/'],
            // Relative imports
            ['^\\.'],
            // Style imports last
            ['^.+\\.s?css'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-unresolved': 'error',
      'import/no-cycle': 'error',
      'import/no-self-import': 'error',
      'import/no-useless-path-segments': 'error',

      // Code quality and maintainability
      'prefer-template': 'error',
      'template-curly-spacing': 'error',
      'object-shorthand': 'error',
      'prefer-destructuring': ['error', { object: true, array: false }],
      'no-useless-concat': 'error',
      'no-template-curly-in-string': 'error',
      'prefer-promise-reject-errors': 'error',
      'no-return-await': 'error',
      'require-await': 'error',
      'no-async-promise-executor': 'error',

      // Naming conventions for feature-based architecture
      camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],

      // Accessibility rules
      ...jsxA11y.configs.recommended.rules,
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/no-noninteractive-element-interactions': 'warn',

      // Security rules
      'no-script-url': 'error',
      'react/jsx-no-script-url': 'error',
      'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
    },
  },

  // Prettier compatibility - must be after other configs to override conflicting rules
  eslintConfigPrettier,

  // Next.js specific overrides (consolidated)
  {
    files: [
      'pages/**/*.{js,jsx,ts,tsx}',
      'app/**/*.{js,jsx,ts,tsx}',
      'pages/api/**/*.{js,ts}',
      'app/api/**/*.{js,ts}',
    ],
    rules: {
      'import/no-default-export': 'off',
      'react/no-multi-comp': 'off',
      'import/no-anonymous-default-export': 'off',
      'no-console': 'off', // Allow console in API routes
    },
  },

  // Component files (consolidated)
  {
    files: [
      'features/**/components/**/*.{js,jsx,ts,tsx}',
      'components/**/*.{js,jsx,ts,tsx}',
    ],
    rules: {
      'react/no-multi-comp': 'off',
    },
  },

  // Test files
  {
    files: [
      '**/__tests__/**/*.{js,ts}',
      '**/*.test.{js,ts}',
      '**/*.spec.{js,ts}',
    ],
    languageOptions: {
      globals: {
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
      },
    },
    rules: {
      'no-console': 'off',
      'react/no-multi-comp': 'off',
    },
  },

  // Configuration files
  {
    files: [
      '*.config.{js,mjs,ts}',
      'next.config.{js,mjs,ts}',
      'tailwind.config.{js,mjs,ts}',
      'postcss.config.{js,mjs}',
    ],
    languageOptions: {
      sourceType: 'module',
      globals: {
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
      },
    },
    rules: {
      'import/no-anonymous-default-export': 'off',
      'no-console': 'off',
    },
  },

  // Ignore patterns
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      '.vercel/**',
      'coverage/**',
      '*.min.js',
    ],
  },
];

export default eslintConfig;
