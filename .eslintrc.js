module.exports = {
  parser: '@babel/eslint-parser', // Babel parser로 설정
  parserOptions: {
    sourceType: 'module', // ES 모듈 방식 사용
    ecmaVersion: 'latest', // 최신 ECMAScript 버전 사용
    ecmaFeatures: {
      jsx: true, // JSX 문법 지원
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'prettier'],
  plugins: ['react', 'unused-imports'],
  rules: {
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
