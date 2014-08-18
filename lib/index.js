(function() {
  var options;

  options = require('./options');

  hexo.extend.console.register('clean_asset_folder', options.description, options, require('./command'));

}).call(this);
