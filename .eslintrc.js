const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8')
)

module.exports = {
  plugins: ['prettier'],
  extends: ['next', 'prettier'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    '@typescript-eslint/ban-ts-comment': 'off'
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: { 'prettier/prettier': ['warn', prettierOptions] }
    }
  ]
}
