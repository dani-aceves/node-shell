const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat')
const curl = require('./curl');

function done(output){
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}
process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ');
  if(cmd[0] === 'ls'){
    ls(done);
  } else if(cmd[0] === 'pwd'){
    pwd(done);
  } else if (cmd[0] === 'cat'){
    cat(cmd[0], cmd[1],done);
  } else if(cmd[0] === 'curl'){
    curl(cmd[0],cmd[1],done);
  }else{
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
})

module.exports = done;
