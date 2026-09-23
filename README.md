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

## Design

Layout criado no Figma pela Ingrid Oliveira (UX/UI). O Figma é a fonte da verdade do visual: mudou lá, o front ajusta aqui.

- **Figma:** https://www.figma.com/design/LhHc3MPc4JOTDwwbVknUO2
- **Export (PDF, mockups e ícones):** anexo da [issue #14](https://github.com/Michele-Moreira/hackathon-soujunior/issues/14)
- Logo, cor e fonte vêm do UI Kit oficial da SouJunior.

### Telas

| Versão | Largura de referência | Status |
|---|---|---|
| Desktop | 1728px | arte final, 7 seções |
| Celular | 440px | arte final, 7 seções |
| Notebook | 1280px | só protótipo (wireframe) |

### Cores

Todas viram token em `src/styles/globals.css` — nenhum componente leva cor crua.

| Nome | Hex | Token | Onde usa |
|---|---|---|---|
| Azul marinho | `#0A1662` | `--background` | fundo da página |
| Azul SouJunior | `#3C7EF9` | `--primary` | cabeçalho, chips e destaques |
| Off-white | `#E7E8EA` | `--foreground` / `--secondary` | texto sobre o marinho e botão principal |
| Preto | `#000000` | `--cta` | botão "Apoie a SouJunior" do topo |
| Branco | `#FFFFFF` | `--primary-foreground` | texto do chip de seção e cards de Faça parte |
| Azul da faixa | `#0D1B7A` | `--band` | faixa inferior de Financiamento |
| Cinza do card | `#D1D3DF` | `--card-muted` | cards sobre essa faixa e cards de Atuação |
| Azul forte | `#0E14BF` | `--accent-strong` | números e títulos dentro dos cards |
| Grafite | `#242731` | `--ink` | texto dentro dos cards claros |
| Amarelo | `#FACC15` | `--highlight` | ícones dos pilares de Atuação |
| Marinho profundo | `#060D3E` | `--surface-deep` | fundo do rodapé |

### Tipografia

**Funnel Display** nos títulos e **Funnel Sans** no texto e nos botões, as duas do UI Kit oficial.

### Medidas

Lidas no Figma: desktop no quadro de 1728px, celular no de 440px. O quadro de 440px é a largura
lógica do iPhone 16 Pro Max, então as medidas do celular são CSS pixels 1:1 no aparelho.

| Elemento | Desktop | Celular |
|---|---|---|
| Altura do cabeçalho | 96px | 91px |
| Largura útil do conteúdo | 1636px | viewport menos 36px de cada lado |
| Botão do topo ("Apoie a SouJunior") | 328×55 | — |
| Botão principal do início | 337×68 | 239×40 |
| Chip de seção (INÍCIO, MISSÃO…) | altura 46px | altura 37px |
| Mascote da tela inicial | 806×806 | 355×355 |

O chip tem altura fixa e largura acompanhando o texto — "IMPACTO" mede 158px no desktop. O 126px
que constava aqui era a medida de um rótulo só.

O cabeçalho desktop é 96px e não os 141px do Figma: com um logo de 55px a barra lia como oca na
tela. Redução combinada com a Michele, que confirmou com a Ingrid. No celular a arte mostra 141px
contando os 50px da barra de status do iOS, que é do mock-up e não da página — a barra em si tem 91px.

Cada seção de duas colunas só se divide quando o conteúdo mais largo dela cabe na coluna. A regra
é o conteúdo, não um breakpoint único: dividir cedo aperta o texto ao lado, e a palavra mais longa
passa a invadir o espaçamento do card. Onde cada uma vira:

| Seção | Divide em | O que define |
|---|---|---|
| Início, Missão, Atuação, Faça parte | 1024px | cabem; a coluna do mascote é fração, não largura natural da imagem |
| Financiamento (topo) | 1024px | cabe |
| Financiamento (cards da faixa) | 1280px | 4 colunas em 1024px deixam 106px para o título, e "Infraestrutura" mede 123px |
| Impacto (topo) | 1280px | em 1024px o card de comunidade fica com 94px de conteúdo |
| Apoie | 1280px | os tiers são sempre 2 por linha; em 1024px o card teria 134px e "R$10" mede 149px |
| Impacto ("Rede de apoio") | 1536px | abaixo disso o rótulo em cima, senão a legenda vaza da caixa |

As larguras de texto acima são medidas com as métricas das fontes Funnel Sans e Funnel Display,
não estimadas.

O cabeçalho é logo + menu sanduíche até 1280px, e mostra a navegação inteira a partir dali. O que
mandamos para a tela pede 1147px: logo 290px, navegação 630px (os seis rótulos em 20px mais os
cinco vãos de 28px) e botão 227px. Em 1280px sobram 1192px de largura útil, ou seja 22px de
respiro em cada vão; em 1366px já são 65px. Não confundir com os 1482px que a barra mede no Figma
— lá o logo tem 352px e a navegação 802px.

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
| <img src="https://cdn.simpleicons.org/decapcms" width="20" alt=""> | [Decap CMS](https://decapcms.org/docs/intro/) | 3.x |
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

## Como contribuir

Ninguém sobe direto na `main`: ela é protegida e só recebe mudança por pull request com 1 aprovação de qualquer pessoa do time.

1. **Abra uma issue** com o modelo *Tarefa* (`.github/ISSUE_TEMPLATE/tarefa.md`). O título começa com verbo, e o corpo segue Objetivo · Atividades · Dependências · Anotações Adicionais. O responsável vai no campo *Assignees*, não no texto.
2. **Coloque a issue no quadro** (link em [Organização](#organização)): A fazer → Em andamento → Aguardando verificação → Pronto.
3. **Avise no grupo do time** que começou, marcando todos.
4. **Crie um branch só pra tarefa**, no formato `tipo/assunto` (`feat/...`, `fix/...`, `docs/...`).
5. **Faça os commits** em [Conventional Commits](https://www.conventionalcommits.org/pt-br/): minúsculo, em inglês e com escopo — ex.: `fix(layout): close mobile menu on link click`.
6. **Abra o pull request contra a `main`.** A Vercel gera um preview do branch; quem for aprovar confere o preview antes.

```bash
git switch -c fix/header-menu origin/main
```

Só texto da página? Dá para mudar pelo painel `/admin` — ver [Conteúdo da página](#conteúdo-da-página).

## Organização

Base do projeto — stack, layout de `src/`, convenções e fluxo de entrega — em `docs/projeto.md`.
Estado de cada frente no [quadro do projeto](https://github.com/users/Michele-Moreira/projects/1).
