module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  rules: {
    /**
     * NOTE: rulesを追加するときはコメントアウトで役割を記載すること
     */

    // console.log()を記述をした場合にwarnとして表示する
    'no-console': ['warn', { allow: ['warn'] }],

    // vueのプロパティ順序が違うとerrorを表出する、邪魔な場合は廃止OK
    'vue/order-in-components': 'error',

    // 無駄なcatch句の警告をしない
    'no-useless-catch': 'off',

    // interfaceを定義した時に空でもErrorとしない
    '@typescript-eslint/no-empty-interface': 'off',

    // aync await で戻り値がなくてもErrorとしない
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // namespaceの利用を可能にする
    '@typescript-eslint/no-namespace': 'off',

    // emitイベント名でケバブケースではなくてもErrorとしない
    'vue/custom-event-name-casing': 'off',

    // requireでエラーを出さない
    '@typescript-eslint/no-var-requires': 'off',

    //camel case許可
    '@typescript-eslint/camelcase': 'off',

    //any 許可
    '@typescript-eslint/no-explicit-any': 'off',

    // debugger 許可
    'no-debugger': 1
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};
