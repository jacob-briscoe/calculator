export function calculate(input: string[]): number {
  const expression = input.join("");
  const result = new Function(`return ${expression}`)();
  return Number(result);
}
