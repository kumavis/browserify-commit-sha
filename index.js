var through = require('through')
var GIT_VERSION = require('exec-sync')('git rev-parse HEAD')


var firstTime = true

module.exports = function (bundle) {
  var stream = through(write, end)

  return stream

  function write(buf) {
    if (firstTime) {
      var notification = '\n'+[
        '/**',
        '* ',
        '* latest commit: ' + GIT_VERSION,
        '* created at: ' + new Date(),
        '* ',
        '**/',
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
