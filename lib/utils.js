(function() {
  module.exports = {
    log: function(type, message) {
      return console.log("[" + type + "]", message);
    }
  };

}).call(this);
