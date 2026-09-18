# Hackathon SouJunior

Landing page da campanha da [SouJunior no Apoia.se](https://apoia.se/soujunior), criada pela squad **SquadForce** no hackathon Desafio Junior (11 a 25 de setembro de 2026).

A SouJunior é uma comunidade que ajuda profissionais em início de carreira com mentorias gratuitas e projetos open source, e se mantém com o apoio da própria comunidade. A página conta essa história, mostra como as doações sustentam a comunidade e o impacto que ela gera, e leva o visitante a apoiar a campanha a partir de R$ 2,00.

**No ar:** https://hackathon-soujunior.vercel.app

## O que a página tem

Na ordem em que aparecem na página. O nome do arquivo é sempre a chave da seção em `src/content/site.json`.

| Seção | Arquivo | Objetivo |
|---|---|---|
| Início | `sections/hero-section.tsx` | Responder em poucos segundos por que apoiar a SouJunior, com o botão principal para o Apoia.se |
| Nossa missão | `sections/mission-section.tsx` | Apresentar a SouJunior e as oportunidades que ela cria para novos talentos em tecnologia |
| Atuação | `sections/what-we-do-section.tsx` | Mostrar as iniciativas que transformam aprendizado em experiência prática |
| Impacto | `sections/impact-section.tsx` | Apresentar os números da comunidade |
| Financiamento | `sections/funding-section.tsx` | Mostrar como as doações mantêm as iniciativas funcionando |
| Faça parte | `sections/community-section.tsx` | Mostrar como participar da comunidade além da doação |
| Apoie | `sections/support-section.tsx` | Chamada final para apoiar a campanha no Apoia.se a partir de R$ 2,00 |
| Rodapé | `layout/site-footer.tsx` | Links para o Apoia.se, WhatsApp, GitHub e Discord |

Os arquivos ficam em `src/components/`.

## Conteúdo da página

Todo o texto que aparece na página mora em `src/content/site.json` — nenhuma seção tem texto escrito dentro do componente. Para trocar uma palavra, um título ou um número, é esse arquivo que muda.

Dá para editar de duas formas:

**1. Pelo painel, em `/admin`** — o [Decap CMS](https://decapcms.org/docs/intro/) abre um formulário no navegador, você entra com a conta do GitHub e, ao salvar, ele gera um commit no repositório sozinho. A Vercel publica em seguida. Serve para quem não mexe no código.

**2. Direto no arquivo** — abrir `src/content/site.json` e editar o valor.

### Configuração do painel

O painel vive em `public/admin/` (`index.html` carrega o Decap, `config.yml` descreve os campos). O login pelo GitHub usa duas funções em `api/`, que na Vercel viram endpoints:

| Arquivo | Endpoint | O que faz |
|---|---|---|
| `api/auth.js` | `/api/auth` | leva para a tela de autorização do GitHub |
| `api/callback.js` | `/api/callback` | troca o código pelo token e devolve para o painel |

Para funcionar, o projeto na Vercel precisa de duas variáveis de ambiente, vindas de um [OAuth App do GitHub](https://github.com/settings/developers) com callback em `https://hackathon-soujunior.vercel.app/api/callback`:

| Variável | Onde achar |
|---|---|
| `GITHUB_CLIENT_ID` | na página do OAuth App |
| `GITHUB_CLIENT_SECRET` | gerado no botão *Generate a new client secret* |

Só quem tem acesso de escrita no repositório consegue salvar pelo painel.

### Editando o conteúdo local

```bash
npx decap-server   # em um terminal
npm run dev        # em outro, e abrir http://localhost:5173/admin/
```

O `local_backend: true` do `config.yml` faz o painel salvar no arquivo da sua máquina em vez do GitHub, sem pedir login.

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
| `npx decap-server` | sobe o servidor local do painel de conteúdo |
| `npx shadcn@latest add <componente>` | adiciona um componente do shadcn em `src/components/ui/` |

## Organização

Base do projeto — stack, layout de `src/`, convenções e fluxo de entrega — em `docs/projeto.md`.
Estado de cada frente em `docs/andamento.md`.
