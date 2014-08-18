colors = require('colors')
async = require('async')
pathUtil = require('path')
fs = require('graceful-fs')

{log} = require('./utils')

checkEntry = (entry, callback) ->
  log 'check'.cyan, entry
  async.waterfall [
    (callback) ->
      fs.stat entry, callback

    (stats, callback) ->
      return callback('Not asset folder') unless stats.isDirectory()

      fs.readdir entry, callback

    (assetContents, callback) ->
      return callback('Asset folder not empty') if assetContents.length > 0

      log 'clean'.magenta, "Empty asset folder #{entry.yellow}"

      fs.rmdir entry, callback

    (callback) ->
      log 'ok'.green, "Cleaned #{entry.yellow}"
      callback()

  ], (err) ->
    if typeof err is 'object'
      switch err.code
        when 'EPERM'
          log 'error'.red, "Not enough previlledge to remove #{err.path.yellow}"
        else
          log 'error'.red, err


    callback(null)

cleanFolder = (folder, callback) ->
  async.waterfall [
    (callback) ->
      fs.readdir folder, callback

    (files, callback) ->
      async.each files,
        (file, callback) ->
          checkEntry pathUtil.join(folder, file), callback
        callback
  ], (err) ->
    log 'error'.red, err if err?

    callback(null)

module.exports = command = (args, callback) ->
  folders = ['source/_drafts', 'source/_posts'].concat(args._)

  async.each folders, cleanFolder, callback
