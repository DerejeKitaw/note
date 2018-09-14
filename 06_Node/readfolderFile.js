const testFolder = '.';
const fs = require('fs');
var logger = fs.createWriteStream('log.html', {
  flags: 'a' // 'a' means appending (old data will be preserved)
})

fs.readdirSync(testFolder).forEach(file => {
  logger.write('<div>'+file+'</div>')
  // console.log(file);
});
logger.end();
