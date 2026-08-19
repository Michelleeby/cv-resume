---
title: "Pokémon Emerald Battle Frontier"
skillsList: [ "C", "Python", "ARM/GBA Toolchain", "mGBA", "GitHub Actions", "Deterministic Testing", "Release Engineering" ]
url: "https://github.com/Michelleeby/pokemon-emerald-battle-frontier"
sortOrder: 2
---

A released Pokémon Emerald modification built in C for the Game Boy Advance.

* Starts players at the Battle Frontier, adds an in-game team editor with legal Generation III move validation, and introduces independently tracked Hard modes across all seven facilities.
* Includes 12 deterministic C gameplay suites and 19 input-driven mGBA scenarios with fixed RNG seeds, isolated save state, path-based CI selection, and memory-headroom gates.
* Uses a reproducible release pipeline that verifies the production build, generates checksummed BPS patches, and excludes copyrighted ROMs and test binaries from published artifacts.
