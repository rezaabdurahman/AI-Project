import { sum } from '../utils/math';

describe('sum', () => {
  it('should return the sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 1)).toBe(0);
    expect(sum(0, 0)).toBe(0);
  });

  it('should handle floating-point numbers', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
