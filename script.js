'use strict'


// let getWord = prompt('Введите слово','');

// function Vowels(word) {
//     let letters = ['О', 'У', 'Ы', 'Э', 'Е', 'Ё', 'И', 'Ю', 'Я','А', 'а', 'о', 'у', 'ы', 'э', 'е', 'ё', 'и', 'ю', 'я'];
//     let numLetters = 0;

//     for(let i = 0; i < letters.length; i++) {
//         const checkLetters = letters[i];
        
//         for(let x = 0; x < word.length; x++) {
//             const checkWord = word[x];
//             if(checkWord == checkLetters) {
//                 numLetters++;
//             }
//         }
//     }
    
//     return numLetters;
// }

// console.log (Vowels(getWord));


// const values=[55,77,55,66,77];
// let used={}; // ключ объекта - число, которое уже встречалось
// for ( let i=0; i<values.length; i++ ) {
//     const value=values[i]; // очередное значение
//     if ( value in used ) // встречалось ли оно?
//         continue; // если да - всё, берём следующее
//     used[value]=true; // если нет - запоминаем, что это значение уже встречалось
//     console.log(value); // выводим его в консоль
// }

function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
const colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
let color = {};

console.log( 'цветов: ' + colorsCount );
for (Object.keys(color).length; Object.keys(color).length < colorsCount;) {
    const n=randomDiap(1,7);
    const colorName=colors[n];
    color [colorName] = colorName;
}

return color;
}

console.log(mood(3));



