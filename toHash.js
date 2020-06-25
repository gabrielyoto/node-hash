const bcryptjs = require("bcryptjs")
const readline = require("readline")

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const saltRounds = process.argv[3] ? process.argv[3] : 10;

input.question('Type the text to be hashed, then press Enter:\n', text => {
  const hash = bcryptjs.hashSync(text, saltRounds)
  console.log(`Hash: ${hash}`)
  input.close()
})
