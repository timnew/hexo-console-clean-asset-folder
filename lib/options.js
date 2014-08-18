(function() {
  var options;

  module.exports = options = {
    alias: 'caf',
    description: 'Delete empty asset folders',
    usage: '[additional folder] [addtional folder2] ...',
    options: [
      {
        name: '-d, --no-draft',
        desc: 'Do not clean draft folder'
      }, {
        name: '-p, --no-post',
        desc: 'Do not clean post folder'
      }
    ]
  };

}).call(this);
