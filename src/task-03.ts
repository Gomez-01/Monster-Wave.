//3. Faça um programa que ordene os elementos de um array. Use o método SORT
//da classe Array para ordenar de forma decrescente, passando uma função arrow como parâmetro.
//3.1 Escreva um teste com o array [‘carro’, ’boneco’, ’ave’, ‘lapis’]

// 3 - Programa que Ordena o Array
const OrdenarArray = (elements: string[]): string[] => {
  return elements.sort((a, b) => b.localeCompare(a));
};