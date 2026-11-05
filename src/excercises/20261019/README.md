# 19/10/2026 - Ghostwriter

## The Problem

**There's a ghost in your keyboard! It keeps typing weird symbols in your words.
Given a string you typed (with the ghost), # deletes the last character and ~
duplicates it, if one exists. Return the final text.**

Example:

```text
ghostwriter("ghost")
> "ghost"

ghostwriter("a#~b")
> "b"

ghostwriter("ab~c#")
> "abb"

ghostwriter("BBB##O~")
> 'BOO'
```

## Commands

```shell
pnpm run test
```
