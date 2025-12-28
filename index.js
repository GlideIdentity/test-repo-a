#!/usr/bin/env node

/**
 * Hello World Node.js Application
 * Simple application demonstrating basic Node.js functionality
 */

function greet(name = 'World') {
  return `Hello, ${name}!`;
}

function main() {
  const args = process.argv.slice(2);
  const name = args[0] || 'World';
  
  console.log(greet(name));
  console.log('Welcome to the Hello World application!');
}

if (require.main === module) {
  main();
}

module.exports = { greet };

