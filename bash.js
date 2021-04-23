const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat')
const curl = require('./curl');
const date = require('./date');
const echo = require('./echo');


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
  }else if(cmd[0] === 'date'){
    date(done);
  }else if(cmd[0] === 'echo'){
    echo(cmd,done);
  }
})

