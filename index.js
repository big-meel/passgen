#!/usr/bin/env node
const program = require('commander') // command line utility
const chalk = require('chalk') // allows for styling of text
const clipboardy = require('clipboardy') // used to copy text to clipboard
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')

program.version('1.0.0').description('Simple password Generator')

program
.option('-l, --length <length>', 'length of password', '8')
.option('-s, --save', 'save password to passwords.txt')
.option('-nn, --no-numbers', 'remove numbers')
.option('-ns, --no-symbols', 'remove symbols')
.parse()

const {length, save, numbers, symbols} = program.opts()

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols)

// Save to file
if (save) {
  savePassword(generatedPassword)
}


// Copy to clipboard
clipboardy.writeSync(generatedPassword)

// Output generated password
console.log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword))
console.log(chalk.yellow('Copied to clipboard'))
