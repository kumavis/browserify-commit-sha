var through = require('through')
var GIT_VERSION = require('child_process').execSync('git rev-parse HEAD')


var firstTime = true

module.exports = function (bundle) {
  var stream = through(write, end)

  return stream

  function write(buf) {
    if (firstTime) {
      var notification = '\n'+[
        '',
        '',
        'global.__BROWSERIFY_META_DATA__GIT_VERSION = "' + GIT_VERSION + '";',
        'global.__BROWSERIFY_META_DATA__CREATED_AT = "' + new Date() + '";',
        '',
        '',
      ].join('\n')+'\n\n'
      stream.queue(notification)
      firstTime = false
    }

    stream.queue(buf)
  }
  function end() {
    stream.queue(null)
  }
}
