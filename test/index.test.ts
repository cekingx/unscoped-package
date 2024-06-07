import { add, subtract, multiply, divide } from '../src/index';

describe('Basic Math', () => {
  it('add number', () => {
    expect(add(1,1)).toEqual(2);
  })

  it('subtract number', () => {
    expect(subtract(2,1)).toEqual(1);
  })

  it('multiply number', () => {
    expect(multiply(2,2)).toEqual(4);
  })

  it('divide number', () => {
    expect(divide(4,2)).toEqual(2);
  })

  it('divide number by zero', () => {
    expect(divide(4,0)).toEqual(0);
  })
})