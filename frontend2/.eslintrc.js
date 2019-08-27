module.exports = {
  'parser': 'babel-eslint',
  'extends': ['airbnb', 'react-app'],
  'plugins': ['react', 'jsx-a11y', 'import'],
  'env': {
    'browser': true
  },
  'rules': {
    'linebreak-style': 0,
    'react/jsx-filename-extension': [1, {
      "extensions": [".js", ".jsx"]
    }],
    'quotes': ['error', 'single', {
      'allowTemplateLiterals': true
    }],
  }
};
