const fs = require('fs');

module.exports = function (string,file) {
    fs.readFile(file, 'utf8', function(err,data) {
        if (err) throw err;
        console.log(data);
        process.stdout.write('\nprompt > ');
    })
}