export function isConsecutiveNonNumericInputs(
  allInput: string[],
  input: string,
) {
  const lastInput = allInput[allInput.length - 1];
  const isLastInputNonNumeric = isNaN(Number(lastInput));
  const isNewInputNonNumeric = isNaN(Number(input));

  return isLastInputNonNumeric && isNewInputNonNumeric;
}
