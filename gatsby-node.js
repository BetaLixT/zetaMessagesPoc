/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    devtool: 'eval-source-map',
    module : {
      rules: [
        {
          test: /\.ogg$/,
          use: [
            loaders.file()
          ]
        }
      ]
    }
  });
    if (stage === "build-html" || stage === "develop-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /fabric/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
    if (stage === `build-javascript`) {
      actions.setWebpackConfig({
          optimization: {
              runtimeChunk: {
                  name: `webpack-runtime`,
              },
              splitChunks: {
                  name: false,
                  cacheGroups: {
                      styles: {
                          name: `styles`,
                          test: /\.(css|scss)$/,
                          chunks: `initial`,
                          enforce: true,
                      },
                  },
              }
          }
      });
    }
  }