import {describe, expect, it} from 'vitest';
import { OrdenarArray } from '../task-03';

describe('OrdenarArray', () => {
  it('deve ordenar os elementos do array de forma decrescente', () => {
    const entrada = ['carro','boneco','ave','lapis'];
    const esperado = ['lapis','carro','boneco','ave'];

    expect(OrdenarArray(entrada)).toEqual(esperado);
  });
});