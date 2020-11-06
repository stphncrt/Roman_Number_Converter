//===============Englist to roman====================/
let inputeng = document.getElementById('inputEng');
let outputrom = document.getElementById('outputRom');
document.getElementById('btneng').addEventListener('click', RomanConvert);
const RomanDict = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

function RomanConvert() {
    num = '';
    outputrom.innerHTML = '';
    eng = inputeng.value;
    let i;
    if (eng > 3999) {
        alert("Please enter a number lower than 3999")
    } else {
        for (i in RomanDict) {
            while (eng >= RomanDict[i]) {
                num += i;
                eng -= RomanDict[i];
            }
        }
        console.log(num)
        outputrom.innerHTML = num;
    }
}
//===============Roman to English Convert===============
let inputrom = document.getElementById('inputRom');
let outputeng = document.getElementById('outputEng');
document.getElementById('btnrom').addEventListener('click', EnglishConvert);

function EnglishConvert() {
    outputeng.innerHTML = '';
    romanNumber = inputrom.value.toUpperCase();
    const romanNumList = ["CM", "M", "CD", "D", "XC", "C", "XL", "L", "IX", "X", "IV", "V", "I"];
    const corresp = [900, 1000, 400, 500, 90, 100, 40, 50, 9, 10, 4, 5, 1];
    let index = 0,
        num = 0;
    for (let i in romanNumList) {
        index = romanNumber.indexOf(romanNumList[i]);
        while (index != -1) {
            num += parseInt(corresp[i]);
            romanNumber = romanNumber.replace(romanNumList[i], "-");
            index = romanNumber.indexOf(romanNumList[i]);
        }
    }
    console.log(num);
    outputeng.innerHTML = num;
}