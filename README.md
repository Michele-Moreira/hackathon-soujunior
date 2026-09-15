# Hackathon SouJunior

Landing page da campanha da [SouJunior no Apoia.se](https://apoia.se/soujunior), criada pela squad **SquadForce** no hackathon Desafio Junior (11 a 25 de setembro de 2026).

A SouJunior é uma comunidade que ajuda profissionais em início de carreira com mentorias gratuitas e projetos open source, e se mantém com o apoio da própria comunidade. A página conta essa história, mostra como as doações sustentam a comunidade e o impacto que ela gera, e leva o visitante a apoiar a campanha a partir de R$ 2,00.

**No ar:** https://hackathon-soujunior.vercel.app

## O que a página tem

| Seção | Objetivo |
|---|---|
| Hero | Responder em poucos segundos por que apoiar a SouJunior, com o botão principal para o Apoia.se |
| Causa | Mostrar como as doações mantêm a infraestrutura, as mentorias e os projetos open source |
| Impacto | Apresentar os números da comunidade |
| Planos | Explicar os níveis de apoio a partir de R$ 2,00 |
| Rodapé | Links para o Apoia.se, Discord, WhatsApp e GitHub |

## Squad

**SquadForce**

| Nome | Papel | LinkedIn |
|---|---|---|
| Cauã Ventura | Dev Back-End | [cauã-ventura](https://www.linkedin.com/in/cau%C3%A3-ventura-835657257/) |
| Daniel Ferreira | Analista Q.A | [daniel-ferreira](https://www.linkedin.com/in/daniel-ferreira-b26626258) |
| Henrique Camello | Tech Lead · Mentor | [henrique-camello](https://www.linkedin.com/in/henrique-camello-b4831aa4/) |
| Ingrid Oliveira | UX/UI Designer | [ingrid-ferreira-oliveira](https://www.linkedin.com/in/ingrid-ferreira-oliveira/) |
| Márlon Almeida | Dados | [marlonmalmeida](https://www.linkedin.com/in/marlonmalmeida/) |
| Michele Moreira | Dev Front-End | [mikaut](https://www.linkedin.com/in/mikaut/) |

## Stack

| | Tecnologia | Versão |
|:---:|---|---|
| <img src="https://cdn.simpleicons.org/react" width="20" alt=""> | [React](https://react.dev/learn) | 19.3.0 |
| <img src="https://cdn.simpleicons.org/typescript" width="20" alt=""> | [TypeScript](https://www.typescriptlang.org/docs/) | 6.0.3 |
| <img src="https://cdn.simpleicons.org/vite" width="20" alt=""> | [Vite](https://vite.dev/guide/) | 8.3.0 |
| <img src="https://cdn.simpleicons.org/tailwindcss" width="20" alt=""> | [Tailwind CSS](https://tailwindcss.com/docs) | 4.3.3 |
| <img src="https://cdn.simpleicons.org/shadcnui/000000/ffffff" width="20" alt=""> | [shadcn/ui](https://ui.shadcn.com/docs) | 4.21.0 |
| <img src="https://cdn.simpleicons.org/radixui/000000/ffffff" width="20" alt=""> | [Radix UI](https://www.radix-ui.com/primitives/docs/overview/introduction) | 1.6.7 |
| <img src="https://cdn.simpleicons.org/lucide" width="20" alt=""> | [Lucide](https://lucide.dev/guide/) | 1.45.0 |
| <img src="https://cdn.simpleicons.org/oxc" width="20" alt=""> | [Oxlint](https://oxc.rs/docs/guide/usage/linter) | 1.82.0 |
| <img src="https://cdn.simpleicons.org/vercel/000000/ffffff" width="20" alt=""> | [Vercel](https://vercel.com/docs) | — |

## Rodando local

```bash
npm install
npm run dev
```

| Comando | O que faz |
|---|---|
| `npm run dev` | sobe o servidor local |
| `npm run build` | checa os tipos e gera a versão de produção em `dist/` |
| `npm run lint` | roda o oxlint |
| `npx shadcn@latest add <componente>` | adiciona um componente do shadcn em `src/components/ui/` |

## Organização

Convenções do projeto em `CLAUDE.md` e layout de `src/` em `docs/estrutura.md`.
