module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: ['stylelint-order'],
  rules: {
    'declaration-block-no-duplicate-properties': true,
    'no-descending-specificity': null,
    'rule-empty-line-before': null,
    'at-rule-empty-line-before': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'color-hex-length': 'long',
    'order/order': ['custom-properties', 'declarations'],
    'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],
    'alpha-value-notation': null,
    'color-function-notation': null,
    'custom-property-pattern': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'keyframes-name-pattern': null,
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'selector-no-vendor-prefix': null,
    'shorthand-property-no-redundant-values': null,
  },
}
