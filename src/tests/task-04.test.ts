import {describe,it,expect} from 'vitest';
import { PegarDoisPrimeiros } from '../task-04';

describe('PegarDoisPrimeiros', () => {
  it('deve pegar os dois primeiros elementos do array', () => {
    const entrada = [2,4,6,2,8,9,5];
    const esperado = [2,4];

    expect(PegarDoisPrimeiros(entrada)).toEqual(esperado);
  });
});