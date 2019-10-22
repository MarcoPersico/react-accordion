module.exports = (params, currentConfig) => {
  const newConfig = Object.assign({}, currentConfig);
  newConfig.rules.push({
    test: /\.mp4$/,
    loader: 'url-loader?limit=10000&mimetype=video/mp4',
  });
  return newConfig;
};
