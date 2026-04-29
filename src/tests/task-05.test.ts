import {} from 'vitest';
import { ExtrairPares } from '../task-05';

describe('ExtrairPares', () => { 
    it('deve extrair os números pares do array', () => {
        const entrada = [8, 3, 9, 5, 6, 12];
        const esperado = [8, 6, 12];

        expect(ExtrairPares(entrada)).toEqual(esperado);
    });
});