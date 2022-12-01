const { calcTriangleArea, calcRectangleArea, calcAllAreas } = require('../src/challenges');

describe('6 - Crie 3 funções para calcular as áreas de um triângulo e de um retângulo', () => {
  it('Retorne o valor 250 quando a função calcTriangleArea é chamada com o parâmetro base com o valor 10 e o parâmetro height com o valor 50', () => {
    expect(calcTriangleArea(10, 50)).toBe(250);
  });

  it('Retorne o valor 5 quando a função calcTriangleArea é chamada com o parâmetro base com o valor 5 e o parâmetro height com o valor 2', () => {
    expect(calcTriangleArea(5, 2)).toBe(5);
  });
  
  it('Retorne o valor 25.5 quando a função calcTriangleArea é chamada com o parâmetro base com o valor 51 e o parâmetro height com o valor 1', () => {
    expect(calcTriangleArea(51, 1)).toBe(25.5);
  });

  it('Retorne o valor 500 quando a função calcRectangleArea é chamada com o parâmetro base com o valor 10 e o parâmetro height com o valor 50', () => {
    expect(calcRectangleArea(10, 50)).toBe(500);
  });

  it('Retorne o valor 10 quando a função calcRectangleArea é chamada com o parâmetro base com o valor 5 e o parâmetro height com o valor 2', () => {
    expect(calcRectangleArea(5, 2)).toBe(10);
  });
  
  it('Retorne o valor 51 quando a função calcRectangleArea é chamada com o parâmetro base com o valor 51 e o parâmetro height com o valor 1', () => {
    expect(calcRectangleArea(51, 1)).toBe(51);
  });

  it('Retorne a string: "O valor da área do triângulo é de: 250", quando a função calcAllAreas é chamada com o parâmetro base com o valor 10, o parâmetro height com o valor 50 e a forma sendo triângulo', () => {
    expect(calcAllAreas(10, 50, 'triângulo')).toBe(`O valor da área do triângulo é de: ${250}`);
  });

  it('Retorne a string: "O valor da área do retângulo é de: 500", quando a função calcAllAreas é chamada com o parâmetro base com o valor 10, o parâmetro height com o valor 50 e a forma sendo retângulo', () => {
    expect(calcAllAreas(10, 50, 'retângulo')).toBe(`O valor da área do retângulo é de: ${500}`);
  });
  
  it('Retorne a string: "Não foi possível fazer o cálculo, insira uma forma geométrica válida", quando a função calcAllAreas é chamada com o parâmetro base com o valor 10, o parâmetro height com o valor 50 e a forma sendo quadrado', () => {
    expect(calcAllAreas(10, 50,'quadrado')).toBe('Não foi possível fazer o cálculo, insira uma forma geométrica válida');
  });
});
