
var sass = require('node-sass');
var fs = require('fs');
var mkdirp = require('mkdirp');

// Compile Sass
sass.render({
  file: './src/index.scss',
  outputStyle: 'expanded',
  includePaths: [
    'node_modules/designkit-colors/src'
  ]
}, function(error, result) {
  if (error) {
    console.error(error);
    return process.exit(1);
  } else {
    mkdirp('./dist/temp');
    fs.writeFile('./dist/temp/_temp.css', result.css, function(err) {
      if (!err) {
        return console.log('Success!');
      }
    })
  }
});
