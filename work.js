const commander = require('commander');
const {checkArgs} = require('./checkArgs');

commander
    .storeOptionsAsProperties(false)
    .passCommandToAction(false)
    .option('-a, --action <value>', 'action "encode"/"decode"')
    .option('-s, --shift <integer>', 'shift')
    .option('-i, --input [path]', 'input file')
    .option('-o, --output [path]', 'output file')
    .action(args => {
        checkArgs(args.action, args.shift);
        configurePipeline(args);
    })
    .parse(process.argv)

    if (program.action === undefined) console.log('no action');
else if (program.shift === undefined) console.log('add shift');
else console.log(`add cheese type ${program.cheese}`);


let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


let caesarCipher = (str, shift) => {
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        let findIndex = alphabet.indexOf(str[i]); 
        if (findIndex == -1) {
            if ((/[A-Z]/).test(str[i])) {
                arr[i] = alphabet[(alphabet.indexOf(str[i].toLowerCase) + shift) % alphabet.length].toUpperCase();
            } else {
                arr[i] = str[i];
            }
        } else {
            arr[i] = alphabet[(findIndex + shift) % alphabet.length];
        }
    }
    return arr.join('');
}
// let str = 'Aabc df f A z'
// caesarCipher(str, 3); //?




