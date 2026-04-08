// 2. Faça um Programa TypeScript que transforme o array,
// concatenando as strings com 1 (um) espaço (“ “). Utilize o método JOIN da classe Array, passando uma função arrow como parâmetro.
// 2.1 Escreva um teste com o array [‘Arrays’, ‘com’, ‘TypeScript’]`)

// 2 - Programa que Concatena o Array
export const JuntarArray = (elements: string[]): string => {
  return elements.join(" ");
};