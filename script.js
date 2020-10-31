//Englist to roman/

let inputeng = document.getElementById('inputEng');
let outputrom = document.getElementById('outputRom');

document.getElementById('btneng').addEventListener('click', RomanConvert);


const RomanDict = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };


function RomanConvert() {
    num = '';
    outputrom.innerHTML = '';
    eng = inputeng.value;

    let i;

    for (i in RomanDict) {
        while (eng >= RomanDict[i]) {
            num += i;
            eng -= RomanDict[i];
        }

    }
    console.log(num)
    outputrom.innerHTML = num;

}

//===============Roman to English Convert===============

let inputrom = document.getElementById('inputRom');
let outputeng = document.getElementById('outputEng');

document.getElementById('btnrom').addEventListener('click', EnglishConvert);



function EnglishConvert() {

    let num = 0;
    outputeng.innerHTML = '';

    rom = inputrom.value.toUpperCase().split('');
    let j;

    for (var i = 0; i < rom.length; i++) {

        for (j in RomanDict) {
            if (rom[i] === j) {
                num += parseInt(RomanDict[j])
            }

        }

    }
    console.log(num)
    outputeng.innerHTML = num;

}