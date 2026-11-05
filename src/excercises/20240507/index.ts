function isBlank(char?: string): char is ' ' {
  return Boolean(char) && char === ' ';
}

export function wrap(input: string, length: number): string {
  const lines: string[] = [];
  let index = 0;
  while (index < input.length) {
    let line = input.slice(index, index + length);

    const firstCharOfLine = line[0];
    const startsWithBlank = isBlank(firstCharOfLine);
    if (startsWithBlank) {
      index += 1;
      continue;
    }

    const reachedTheEnd = index + length >= input.length;
    if (reachedTheEnd) {
      lines.push(line.trimEnd());
      index += length - 1;
      break;
    }

    const lastCharOfLine = line[line.length - 1];
    const nextCharInInput = input[index + length];
    const hasBrokenWord = !isBlank(lastCharOfLine) && !isBlank(nextCharInInput);
    if (!hasBrokenWord) {
      lines.push(line.trimEnd());
      index += length;
      continue;
    }

    line = `${line.slice(0, line.length - 1)}-`;
    lines.push(line.trimEnd());
    index += length - 1;
  }

  return lines.join('\n');
}
