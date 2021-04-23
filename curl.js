const request = require('request');

module.exports = function(string,site,done){
  request(site, function (err, response, body) {
    if(err) done('Something went wrong!');
    done(body);
  });
}
