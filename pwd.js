
module.exports = function(){
  process.stdout.write('prompt > ');
  const pwd = process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
      process.stdout.write(process.cwd());
      process.stdout.write('\nprompt > ');
  })
}
