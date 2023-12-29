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


function randomDiap(n, m) {
   return Math.floor(Math.random() * (m - n + 1)) + n;
}
 
function mood(colorsCount) {
   const colors = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];
   const color = {};
   console.log('цветов: ' + colorsCount);
 
   for (;Object.keys(color).length < colorsCount;) {
      let n = randomDiap(1, 7);
      let colorName = colors[n];
      color[colorName] = colorName;
   }

   for ( let d in color ) {
      console.log( d );
   }
}
 
mood(3);
 


