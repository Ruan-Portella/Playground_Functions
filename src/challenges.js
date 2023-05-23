// Desafio 1 - Crie a função compareTrue
const compareTrue = (number1, number2) => number1 === true && number2 === true;
// Desafio 2 - Crie a função splitSentence
function splitSentence(name) { return name.split(' '); }
// Desafio 3 - Crie a função concatName
const concatName = (word) => `${word[word.length - 1]}, ${word[0]}`;
// Desafio 4 - Crie a função footballPoints
let pon = 0;

function footballPoints(wins, ties) {
  pon = ((wins * 3) + ties);
  return pon;
}
// Desafio 5 - Crie a função highestCount

function highestCount(highest) {
  let high = 0;
  let counter = 0;

  for (let index = 0; index < highest.length; index += 1) {
    if (highest[index] === high) {
      high = highest[index];
      counter += 1;
    } else if (highest[index] > high || highest[index] < 0) {
      high = highest[index];
      counter = 0;
      counter += 1;
    }
  }
  return counter;
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => (base * height) / 2;
const calcRectangleArea = (base, height) => (base * height);

function calcAllAreas(base, height, form) {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
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

const fizzBuzz = (numbers) => {
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      string.push('fizzBuzz');
    } else if (numbers[index] % 5 === 0) {
string.push('buzz');
    } else if (numbers[index] % 3 === 0) {
      string.push('fizz');
    } else {
      string.push('bug!');
    }
  }
  return string;
};
// Desafio 9 - Crie a função encode e a função decode

function encode(string) {
  let wordFull = [];
  const word = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (index = 0; index < string.length; index += 1) {
    switch (string[index]) {
    case 'a':
      wordFull.push(string[index] = word.a);
      break;
    case 'e':
      wordFull.push(string[index] = word.e);
      break;
    case 'i':
      wordFull.push(string[index] = word.i);
      break;
    case 'o':
      wordFull.push(string[index] = word.o);
      break;
    case 'u':
      wordFull.push(string[index] = word.u);
      break;
    default:
      wordFull.push(string[index]);
    }
  }

  return wordFull.join('');
}

function decode(stringde) {
  let wordde = [];
  const wordd = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (index = 0; index < stringde.length; index += 1) {
    switch (stringde[index]) {
    case '1':
      wordde.push(stringde[index] = wordd['1']);
      break;
    case '2':
      wordde.push(stringde[index] = wordd['2']);
      break;
    case '3':
      wordde.push(stringde[index] = wordd['3']);
      break;
    case '4':
      wordde.push(stringde[index] = wordd['4']);
      break;
    case '5':
      wordde.push(stringde[index] = wordd['5']);
      break;
    default:
      wordde.push(stringde[index]);
    }
  }

  return wordde.join('');
}
// Desafio 10 - Crie a função techList

function techList(tech, name) {
  let array = [];
  tech.sort();
  for (index = 0; index < 5; index += 1) {
    if (tech.length > 0) {
      array.push({
        tech: tech[index],
        name,
      });
    }
  }
  return array;
}
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
