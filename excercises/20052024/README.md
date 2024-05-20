# 20/05/2024 - Fix inverted punctuation

## The Problem

**The Spanish language uses inverted punctuation marks (`¿` and `¡`) in interrogative and exclamatory sentences. Write a function that takes in a string `str`, and adds `¿` and `¡` if they're needed.** You can ignore exclamations in the middle of a sentence for this problem.

Example:

```js
> fixInvertedPunc("Feliz cumpleaños!")
> "¡Feliz cumpleaños!"

> fixInvertedPunc("Ella ya se graduó de la universidad? ¡No!")
> "¿Ella ya se graduó de la universidad? ¡No!"
```

## Assumption (if any)

- You can ignore exclamations in the middle of a sentence for this problem.

## Commands

```shell
pnpm run test
npx tsx ./bin
```
