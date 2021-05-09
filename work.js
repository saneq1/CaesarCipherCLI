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
let str = 'Aabc df f A z'
caesarCipher(str, 3); //?
