(function() {
  var async, checkEntry, cleanFolder, colors, command, fs, log, pathUtil;

  colors = require('colors');

  async = require('async');

  pathUtil = require('path');

  fs = require('graceful-fs');

  log = require('./utils').log;

  checkEntry = function(entry, callback) {
    log('check'.cyan, entry);
    return async.waterfall([
      function(callback) {
        return fs.stat(entry, callback);
      }, function(stats, callback) {
        if (!stats.isDirectory()) {
          return callback('Not asset folder');
        }
        return fs.readdir(entry, callback);
      }, function(assetContents, callback) {
        if (assetContents.length > 0) {
          return callback('Asset folder not empty');
        }
        log('clean'.magenta, "Empty asset folder " + entry.yellow);
        return fs.rmdir(entry, callback);
      }, function(callback) {
        log('ok'.green, "Cleaned " + entry.yellow);
        return callback();
      }
    ], function(err) {
      if (typeof err === 'object') {
        switch (err.code) {
          case 'EPERM':
            log('error'.red, "Not enough previlledge to remove " + err.path.yellow);
            break;
          default:
            log('error'.red, err);
        }
      }
      return callback(null);
    });
  };

  cleanFolder = function(folder, callback) {
    return async.waterfall([
      function(callback) {
        return fs.readdir(folder, callback);
      }, function(files, callback) {
        return async.each(files, function(file, callback) {
          return checkEntry(pathUtil.join(folder, file), callback);
        }, callback);
      }
    ], function(err) {
      if (err != null) {
        log('error'.red, err);
      }
      return callback(null);
    });
  };

  module.exports = command = function(args, callback) {
    var folders;
    folders = ['source/_drafts', 'source/_posts'].concat(args._);
    return async.each(folders, cleanFolder, callback);
  };

}).call(this);
