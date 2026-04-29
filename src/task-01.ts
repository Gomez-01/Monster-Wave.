// 1. Faça um programa TypeScript que calcule o quadrado de cada elemento do array.
// use as seguintes estratégias:
// a. iterando com for simples 
// b. iterando com forEach

export const quadradoFor = (a: number[]) => {
  const resultado: number[] = [];

  for (let i = 0; i < a.length; i++) {
    resultado.push(a[i] ** 2);
  }
  return resultado;
}
export const quadradoForEach = (a:number[]) => {
    const resultado: number[] = [];

    a.forEach((element) => {
        resultado.push(element**2)
    });
    return resultado;
}
