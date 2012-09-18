var tilde = require('../'),
    assert = require('assert'),
    dirs = {
      '~-': process.env.OLDPWD || '~-',
      '~-/': (process.env.OLDPWD) ? process.env.OLDPWD + '/' : '~-/',
      '~+': process.env.PWD || '~+/',
      '~+/': (process.env.PWD) ? process.env.PWD + '/' : '~+/',
      '~': process.env.HOME,
      '~/': process.env.HOME + '/',
      '~~': '~~',
      '~theuserbetternotexist': '~theuserbetternotexist',
      '~root""': '~root""',
      "~root''": "~root''",
      '~roo\\t': '~roo\\t'
    };


Object.keys(dirs).forEach(function(s) {
  tilde(s, function(expanded) {
    console.log('given     : %s', s);
    console.log('expanded  : %s', expanded);
    console.log('should be : %s\n', dirs[s]);
    assert.strictEqual(expanded, dirs[s]);
  });
});
