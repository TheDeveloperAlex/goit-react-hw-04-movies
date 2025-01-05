const { override, addLessLoader } = require('customize-cra');

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
    },
  }),
  (config) => {
    const oneOfRule = config.module.rules.find((rule) => rule.oneOf);
    if (oneOfRule) {
      oneOfRule.oneOf.forEach((rule) => {
        if (rule.use) {
          rule.use.forEach((useEntry) => {
            if (
              typeof useEntry === 'object' &&
              useEntry.loader &&
              useEntry.loader.includes('postcss-loader')
            ) {
              useEntry.options = {
                postcssOptions: {
                  plugins: [
                    require('autoprefixer')
                  ],
                },
              };
            }
          });
        }
      });
    }
    return config;
  }
);
