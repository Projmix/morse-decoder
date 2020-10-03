const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
        MORSE_TABLE['**********'] = ' ';
        let k = expr.length/10;
        let rez, rezolt='';
        for (k; k>0; k--){
            let r = expr.substring(0,10);
            rez = r.replace(/10/gi, '.');
            rez = rez.replace(/11/gi, '-');
            rez = rez.replace(/0/gi, '');
            expr = expr.slice(10);
            rezolt = rezolt + MORSE_TABLE[rez];
        }
        return rezolt;
}

module.exports = {
    decode
}