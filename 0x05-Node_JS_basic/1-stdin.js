const readline = require('readline')

console.log("Welcome to Holberton School, what is your name?\n")

const rl = readlineCreate({
    input: process.stdin,
    output: process.stdout
});

rl.question('Your name is: ', (name) =>{
    if (name ==='exit'){
        console.log("This important software is now closing");
    } else{
        console.log('Your name is: ${name}');
        rl.close();
    }
});