# 10/11/2026 - Comeback

## The Problem

**Given `rounds` in a board game, where `rounds[r][p]` is the points player `p` earned in round `r`, find the earliest round from which the eventual winner is the sole leader at the end of every remaining round. Return the round number (1-based), or `-1` if the final score is tied.**

Example:

```text
> comebackRound([
  [5, 3, 2],
  [0, 5, 2],
  [4, 2, 2],
  [1, 3, 0],
]);
> -1

> comebackRound([
  [4, 2],
  [1, 3],
  [2, 1],
]);
> 3

> comebackRound([
  [4, 2],
  [1, 3],
]);
> -1
```

## Commands

```shell
pnpm run test
```
