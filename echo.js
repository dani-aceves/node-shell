module.exports = function(stringArr, done){
  let sentence = '';
 for(let i = 1;i<stringArr.length;i++){
   sentence+=stringArr[i]
   sentence += ' ';
 }
 done(sentence.trim());
}
