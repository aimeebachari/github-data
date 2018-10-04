// Make sure to `console.log()` every answer!
let data = require('./data')

console.log(`Launch Academy owns ${data.length} repositories.`);

let largestSize = 0;
let repoName = ``;
data.forEach(repo => {
  if (repo.size > largestSize) {
    largestSize = repo.size;
    repoName = repo.name;
  }
});

console.log(`${repoName} has the larget size`);
