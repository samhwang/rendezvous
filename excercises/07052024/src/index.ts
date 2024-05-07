export function wrap(input: string, length: number): string {
  const lines: string[] = [];
  let index = 0;
  while (index < input.length) {
    let line = input.slice(index, index + length);

    const lastCharOfLine = line[line.length - 1];
    const nextCharInInput = input[index + length];
    const hasBrokenWord = lastCharOfLine !== ' ' && !!nextCharInInput && nextCharInInput !== ' ';
    if (!hasBrokenWord) {
      lines.push(line.trim());
      index += length;
      continue;
    }

    line = `${line.slice(0, line.length - 1)}-`;
    lines.push(line.trim());
    index += length - 1;
  }

  return lines.join('\n');
}
