# 29/04/2024 - Translate Right Shift

## The Problem

**Imagine the users on your app are all typing slightly incorrectly, in that they shifted their hands one key to the right. Write a function that translates what they mean to say.** The examples below assume an ANSI keyboard layout, you can choose how you want to do that!

Example:

```
> translateRightShift(';p; epeor')
"lol wowie"

> translateRightShift('ejp s, o')
"who am i"
```

## Assumption

- The input string will only contain lowercase letters, spaces, and punctuation.
- When shifted all the way left, it will stop at the first left key on each line and not wrap around to the previous line. i.e.:
  - first line stops at `\``
  - second line stops at `q`
  - third line stops at `a`
  - fourth line stops at `z`

## Commands

```shell
pnpm run test
npx tsx ./bin/index.ts
```
