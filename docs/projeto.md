# Projeto

Base do repositório: o que é, como está organizado e como se trabalha aqui. É a fonte única
desses fatos — o `CLAUDE.md` não repete nada disto, só aponta pra cá. Mudou alguma coisa, muda aqui.

## O que é

Landing page da campanha da [SouJunior no Apoia.se](https://apoia.se/soujunior), feita pela squad
**SquadForce** no hackathon Desafio Junior (11 a 25 de setembro de 2026). A página conta a história da
comunidade, mostra como as doações a sustentam e leva o visitante a apoiar a partir de R$ 2,00.

- **No ar:** https://hackathon-soujunior.vercel.app
- **Entrega:** 24/09/2026 (inclui um vídeo de até 5 min)
- Narrativa completa e tabela da squad no `README.md`.

## Quem faz o quê

Serve para não mexer no que é de outra pessoa. O estado de cada tarefa fica em `docs/andamento.md`.

| Pessoa | Frente |
|---|---|
| Henrique Camello | Tech lead. Verifica e aceita todos os pull requests |
| Michele Moreira | Front-end: seções, painel de conteúdo, paleta |
| Cauã Ventura | Back-end. Seções Impacto e Financiamento |
| Ingrid Oliveira | Design das seções. O front ajusta conforme chega |
| Márlon Almeida | Dados dos números de Impacto e Financiamento |
| Daniel Ferreira | QA. Casos de teste em `docs/qa.md` |

## Stack

- **Build:** Vite
- **UI:** React + TypeScript
- **Estilo:** Tailwind CSS + shadcn/ui
- **Testes:** Vitest (unit) + Playwright (e2e) — ver *Pendências conhecidas*
- **Hospedagem:** Vercel
- **Idioma:** respostas e documentação em Português (Brasil)

## Princípios

- Tom direto e prático, sem enrolação.
- Código segue boas práticas e **não leva comentários** — o nome e a estrutura explicam.
- Priorizar o ecossistema JS/TS já em uso; não introduzir dependência nova sem necessidade clara.
- Antes de criar algo, procurar padrão existente no repo e seguir.

## Estrutura de `src/`

```
src/
├── app.tsx              # monta a página inteira; não há roteamento
├── main.tsx             # entrada do Vite
├── components/
│   ├── ui/              # componentes shadcn gerados (hoje só button.tsx)
│   ├── layout/          # cabeçalho, rodapé e estrutura da página
│   └── sections/        # uma seção da landing por arquivo
├── content/
│   └── site.json        # todo o texto visível da página
├── lib/                 # utilitários sem estado: cn(), links, ícones de marca
├── styles/
│   └── globals.css      # estilos globais e tokens
├── hooks/               # vazia — hooks reutilizáveis, um por arquivo
├── pages/               # vazia — reservada caso entre roteamento
└── types/               # vazia — tipos compartilhados entre módulos
```

`hooks/`, `pages/` e `types/` existem só com `.gitkeep`. São o lugar certo quando o conteúdo aparecer,
não pastas mortas a remover.

### Regras de organização

- **Um componente por arquivo.** O nome do arquivo casa com o do componente (`UserCard` → `user-card.tsx`).
- **Co-localize o teste.** `user-card.tsx` ao lado de `user-card.test.tsx`.
- **Promova para pasta de feature** quando um componente acumula subcomponentes, hooks ou tipos próprios:

  ```
  components/checkout/
  ├── checkout-form.tsx
  ├── use-checkout.ts
  └── types.ts
  ```

- **`lib/` não importa de `components/`.** O fluxo de dependência aponta para baixo:
  páginas → componentes → hooks → lib.
- **Tipos locais ficam junto do código.** Só sobe para `types/` o que é compartilhado por mais de uma feature.

### shadcn/ui

Componentes gerados via `npx shadcn@latest add <componente>` aterrissam em `src/components/ui/`. Trate-os
como código do projeto: pode customizar, mas mantenha a API consistente. Veja a skill `shadcn`.

## Conteúdo da página

`src/content/site.json` guarda todo o texto visível. Componente não carrega texto escrito à mão: ele importa
o JSON e lê o campo. O painel do Decap em `public/admin/config.yml` espelha esse arquivo campo a campo — ao
mexer na estrutura do JSON, mexa no `config.yml` junto, senão o painel apaga o que não conhece ao salvar.

Ficam fora do JSON os textos de acessibilidade e navegação assistiva (`aria-label`, link de pular para o
conteúdo, aviso de "abre em nova aba") e o `<title>` do `index.html`: são estrutura, não conteúdo editável.

## `api/`

Duas funções serverless em JavaScript, fora do build do Vite, que rodam como Functions na Vercel. São o
OAuth do GitHub que autentica o painel do Decap em `/admin`: `api/auth.js` inicia o fluxo, `api/callback.js`
troca o código pelo token. Dependem de `GITHUB_CLIENT_ID` e `GITHUB_CLIENT_SECRET`. Detalhes no `README.md`.

## Convenções

As regras detalhadas vivem em `.claude/rules/` e carregam sozinhas conforme o arquivo aberto — as que têm
`paths` no cabeçalho só quando o arquivo casa com o padrão, as sem `paths` sempre:

- `typescript.md` — tipagem, `strict`, sem `any`, imports type-only.
- `react.md` — componentes de função, regras de hooks, props, onde mora o estado.
- `styling.md` — Tailwind, `cn()`, tokens, uso de shadcn/ui.
- `naming-conventions.md` — nomes de arquivos, componentes, hooks.
- `conventional-commits.md` — formato de commit.

## Fluxo de trabalho

**Ninguém sobe direto na `main`.** Combinado com o Henrique:

1. Avisar no grupo do WhatsApp o que começou, marcando @todos — a banca avalia a participação de cada um.
2. Criar um branch só pra essa tarefa.
3. Fazer os commits e abrir um pull request pro Henrique verificar e aceitar.
4. Atualizar o estado da linha em `docs/andamento.md`.

Ferramentas:

- **Commits:** skill `git-commit` (Conventional Commits, lowercase em inglês, escopo obrigatório, sem co-author/IA).
- **Pull requests:** skill `create-pr` (título Conventional Commits, corpo Summary + Test plan em inglês, sem reviewers/draft/IA).
- **Revisão:** `/diff-review` antes de abrir PR; o subagent `code-reviewer` cobre correção + convenções.
- **Testes:** o subagent `test-runner` roda Vitest/Playwright e reporta — ver *Pendências conhecidas*.
- **Bugs:** o subagent `debugger` faz debugging sistemático antes de propor correção.

## Skills de base

Além das do fluxo acima, estas são o modo padrão de trabalhar aqui. Podem ser chamadas pelo nome
(`/ponytail`) ou aplicadas por conta própria quando a tarefa pede.

| Skill | Para quê |
|---|---|
| `ponytail` | Força a solução mais simples que resolve. Questiona se a tarefa precisa existir, prefere o que já está no projeto a dependência nova, uma linha a cinquenta. É o princípio de não inchar o código, aplicado. |
| `caveman` | Resposta comprimida: toda a substância técnica, zero enrolação. Serve ao tom direto que o projeto pede. Vale para a conversa, nunca para o conteúdo do site ou da documentação. |
| `brainstorming` | Explorar alternativas antes de escrever código, quando o caminho ainda não está decidido. Vem do plugin `superpowers`. |
| `security-review` | Revisão de segurança do diff. Nativa do Claude Code. Passo natural antes de abrir PR que mexa em `api/` ou em autenticação. |
| `cybersecurity` | Auditoria ampla: OWASP, CWE, segredos vazados, dependências, modelagem de ameaça. Dispara 8 agentes em paralelo, então é cara — use quando o alvo justifica, não por rotina. |

O plugin `superpowers` traz outras 13 skills junto com a `brainstorming`. Algumas cobrem terreno que este
repositório já resolve de outro jeito, e nesses casos **vale o que está aqui**, não a skill do pacote:

- `systematic-debugging` → use o subagent `debugger`.
- `requesting-code-review` e `receiving-code-review` → use `/diff-review` e o subagent `code-reviewer`.
- `finishing-a-development-branch` → use a skill `create-pr`.
- `test-driven-development` → não se aplica enquanto não houver framework de teste (ver *Pendências conhecidas*).

## Pendências conhecidas

Divergências entre o que a documentação afirma e o que existe no repositório. Registradas para não se
perderem; nenhuma foi corrigida ainda.

- **Não existe suíte automatizada.** Não há vitest, playwright, arquivo de teste nem script `test` no
  `package.json` (só `dev`, `build`, `lint`, `preview`). As menções a Vitest/Playwright acima descrevem
  intenção, não realidade. O subagent `test-runner` e a skill `new-component` mandam rodar `npm run test`,
  `npm run type-check` e `npm run test:e2e`, que não existem. O teste real hoje é manual, em `docs/qa.md`.
- **`docs/andamento.md` diverge em dois pontos:** lista `site-footer.tsx` como seção, mas o arquivo está em
  `src/components/layout/`, não em `sections/`; e diz "18 casos" de QA quando `docs/qa.md` tem 30.
- **A tabela de Stack do `README.md`** cita versões de React, TypeScript e Oxlint acima das declaradas no
  `package.json`.
