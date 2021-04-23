module.exports = function(done){
  process.stdout.write('prompt > ');
  done(process.cwd());
}
