const fs = require('fs');

module.exports = function (string,file,done) {
    fs.readFile(file, 'utf8', function(err,data) {
        if (err) done('Something went wrong!');
        done(data);
    })
}
