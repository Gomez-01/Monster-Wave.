import { describe, expect, it } from 'vitest';
import { JuntarArray } from '../task-02';

describe('JuntarArray', () => {
  it('é esperado a concatenação de arrays', () => {
    expect(JuntarArray(['Arrays','com','TypeScript'])).toEqual('Arrays com TypeScript');
  });
});