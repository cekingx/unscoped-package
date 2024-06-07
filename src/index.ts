export const add = (a: number, b: number): number => {
  return a + b
}

export const subtract = (a: number, b: number): number => {
  return a - b
}

export const multiply = (a: number, b: number): number => {
  return a * b
}

export const divide = (a: number, b: number): number => {
  if (b == 0) {
    return 0;
  }

  return a/b;
}