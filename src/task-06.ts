//6. Faça um programa TypeScript:
//6.1 Crie duas classes que possuam uma interface em comum. Evite criar classes com nomes sem significado (class A, class X).
//Crie classes com nomes que representem algo significativo.
//6.2 As classes devem possuir atributos diferentes. 
//6.3 A interface deve possuir pelo menos um método. 
//6.4 A implementação desse método nas classes deve utilizar os atributos.
//6.5 Escreve um teste que instancie as classes criadas, altera os atributos e teste o método comum na interface.

export interface Veiculo {
    marca: string;
    modelo: string;
    ano: number;
    exibirInformacoes(): void;
}

export class Carro implements Veiculo {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirInformacoes(): String {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
}

export class Caminhao implements Veiculo {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirInformacoes(): String {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
}
