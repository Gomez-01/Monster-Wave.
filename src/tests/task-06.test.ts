import { describe,it,expect } from "vitest";
import { Carro, Caminhao } from "../task-06";

describe('Veiculo', () => {
    it('deve exibir as informações do carro', () => {
        const carro = new Carro('Toyota', 'Corolla', 2020);
        expect(carro.exibirInformacoes()).toBe('Marca: Toyota, Modelo: Corolla, Ano: 2020');
    });
    
    it('deve exibir as informações do caminhão', () => {   
        const caminhao = new Caminhao('Volvo', 'FH16', 2018);
        expect(caminhao.exibirInformacoes()).toBe('Marca: Volvo, Modelo: FH16, Ano: 2018');
    });
    // Testando a alteração dos atributos 
    it('deve alterar os atributos do carro e exibir as novas informações', () => {
        const carro = new Carro('Honda', 'Civic', 2019);
        carro.marca = 'Ford';
        carro.modelo = 'Focus';
        carro.ano = 2021;
        expect(carro.exibirInformacoes()).toBe('Marca: Ford, Modelo: Focus, Ano: 2021');
    });
    
    it('deve alterar os atributos do caminhão e exibir as novas informações', () => {
        const caminhao = new Caminhao('Scania', 'R500', 2017);
        caminhao.marca = 'Mercedes-Benz';
        caminhao.modelo = 'Actros';
        caminhao.ano = 2020;
        expect(caminhao.exibirInformacoes()).toBe('Marca: Mercedes-Benz, Modelo: Actros, Ano: 2020');
    });
});


//6. Faça um programa TypeScript:
//6.1 Crie duas classes que possuam uma interface em comum. Evite criar classes com nomes sem significado (class A, class X).
//Crie classes com nomes que representem algo significativo.
//6.2 As classes devem possuir atributos diferentes. 
//6.3 A interface deve possuir pelo menos um método. 
//6.4 A implementação desse método nas classes deve utilizar os atributos.
//6.5 Escreve um teste que instancie as classes criadas, altera os atributos e teste o método comum na interface.