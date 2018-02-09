var csso = require('csso');
var fs = require('fs');
var inputFile = "./dist/designkit-card.css";
var input = fs.readFileSync(inputFile, 'utf8');
var output = csso.minify(input);
var outputFile = "./docs/doc.min.css";

// Output css for docs
fs.writeFile(outputFile, output.css, function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("Success!");
});
