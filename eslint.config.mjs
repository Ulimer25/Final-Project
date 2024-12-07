import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node, // Keep the Node.js globals
        ...globals.browser, // Add browser globals like document, window
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
