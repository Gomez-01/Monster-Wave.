import { describe, expect, it } from 'vitest';
import { quadradoFor, quadradoForEach } from '../task-01';

// 1.1 Escreve um teste com o array [3,5,7,3,8,9,1]
describe('task 01', () => {
	it('calcula o quadrado de cada elemento do array [3, 5, 7, 3, 8, 9, 1]', () => {
		const entrada = [3, 5, 7, 3, 8, 9, 1];
		const esperado = [9, 25, 49, 9, 64, 81, 1];

		expect(quadradoFor(entrada)).toEqual(esperado);
		expect(quadradoForEach(entrada)).toEqual(esperado);
	});
});
