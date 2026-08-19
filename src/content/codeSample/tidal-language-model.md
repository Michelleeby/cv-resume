---
title: "Tidal Language Model"
skillsList: [ "Python", "PyTorch", "TypeScript", "React", "Fastify", "Redis", "SSE", "MCP", "Experiment Orchestration", "Model Evaluation" ]
url: "https://github.com/Michelleeby/tidal-language-model"
sortOrder: 1
---

An independent research platform for studying adaptive computation in language models.

* Built a roughly 30.6-million-parameter gated Transformer in PyTorch with external PPO-controlled modulation and input-dependent per-token gates.
* Built the surrounding research platform with Fastify, React, Redis, SSE streams, background orchestration, local and remote GPU execution, checkpoint management, generation comparison, and exportable reports.
* Ran three controlled RL-gating experiments that consistently underperformed neutral gating. Traced the failure to the constrained action space, documented the negative result, and changed the research direction.
* Implemented input-dependent gates with 0.01% parameter overhead and pre-registered quality, sparsity, and adaptivity criteria. Added an MCP interface with a lazy disk cache for AI-assisted experiment analysis.
