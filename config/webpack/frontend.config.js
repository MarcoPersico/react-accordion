/* eslint-disable */
/* eslint-disable */
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (params, currentConfig) => {
    const newConfig = Object.assign({}, currentConfig);
    newConfig.plugins.push(...[
        new CopyWebpackPlugin([
            { from: `${params.target.paths.source}/favicon.ico` },                          
        ]),
    ]);
    return newConfig;
};
