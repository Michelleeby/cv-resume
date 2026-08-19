---
title: "Staff Software Engineer"
company: "Automattic"
dates: "December 2023 - Present"
skillsList: [ "TypeScript", "PHP", "React", "Node.js", "Kubernetes", "Docker", "New Relic", "k6", "Grafana Cloud", "MySQL", "Elasticsearch", "Logstash", "MCP" ]
sortOrder: 1
---

* Built a privacy-preserving telemetry platform for AI developer-tool usage, spanning TypeScript/PHP log normalization, authenticated ingestion, reconciliation, and token/cache analytics. Upstreamed a [reusable authenticated post-call hook](https://github.com/Automattic/mcp-wordpress-remote/pull/92) to a public MCP proxy and redesigned reconciliation as an isolated paginated job to bound memory and retained state.
* Built a PHP and React self-service platform that encoded governance and architectural defaults into repeatable performance tests, reducing execution time by 98%.
* Built a Node.js and TypeScript observability service that combines New Relic and k6 data with sandboxed coding agents to investigate concurrency bottlenecks, generate candidate patches, and preserve decisions in ADRs, reducing optimization cycles by 40%.
* Led performance initiatives that reduced origin latency by 12%–24%, using New Relic profiling and distributed k6 tests in Grafana Cloud to validate behavior under load.
* Led reliability engineering for a global live event that generated more than one billion requests. Designed a stale-while-revalidate object-cache strategy with TTL jitter, maintaining 100% availability and a 99.6% cache-hit rate during peak traffic.
* Led rapid prototypes with external engineering teams, translating platform constraints into working proofs of concept that progressed into production integrations.
