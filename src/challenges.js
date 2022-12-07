// Desafio 1 - Crie a função compareTrue
const compareTrue = (number1, number2) => number1 === true && number2 === true;
// Desafio 2 - Crie a função splitSentence
function splitSentence(name) { return name.split(' '); }
console.log(splitSentence('foguete'));
// Desafio 3 - Crie a função concatName
const concatName = (word) => word[word.length -1] + `, ` + word[0];
// Desafio 4 - Crie a função footballPoints
let pon = 0;

function footballPoints(wins, ties) {
  pon = ((wins * 3) + ties);
  return pon;
}
// Desafio 5 - Crie a função highestCount

function highestCount(highest) {
  let high = 0;
  let cont = 0;
  for (let number of highest) {
    if (number === high) {
      high = number;
      cont += 1;
    } else if (number > high || number < 0) {
      high = number;
      cont = 0;
      cont += 1;
    }
  }
  return cont;
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
let calcTriangleArea = (base, height) => (base * height) / 2;
let calcRectangleArea = (base, height) => (base * height);

function calcAllAreas(base, height, form) {
  if (form === 'triângulo') {
    return 'O valor da área do triângulo é de: ' + calcTriangleArea(base, height);
  } if (form === 'retângulo') {
    return 'O valor da área do retângulo é de: ' + calcRectangleArea(base, height);
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
}

// Desafio 7 - Crie a função catAndMouse
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 > cat2) {
    return 'cat2';
  } if (cat1 === 6 + mouse || cat2 === 12 + mouse) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8 - Crie a função fizzBuzz

function fizzBuzz(numbers){
  let string = [];
  for (let number of numbers) {
    if (number % 3 === 0 && number % 5 === 0) {
      string.push('fizzBuzz');
    } else if (number % 5 === 0) {
      string.push('buzz');
    } else if (number % 3 === 0) {
      string.push('fizz');
    } else {
      string.push('bug!');
    }
  }
  return string;
}

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
