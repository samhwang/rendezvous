# 03/11/2026 - Elapsed Minutes

## The Problem

**Given a chronological log of local `"HH:MM"` timestamps from the night daylight saving time ends, return the actual number of minutes between the first and last entries. The log contains a consecutive pair that reveals the clock’s one-hour rollback.**

Example:

```text
elapsedMinutes(["00:50", "01:10", "01:50", "01:10", "02:10"]);
> 140

elapsedMinutes(["01:55", "01:05", "01:25", "01:40"]);
> 45
```

## Commands

```shell
pnpm run test
```
