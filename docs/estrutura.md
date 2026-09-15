# Estrutura de `src/`

Layout que as convenções (`.claude/rules/`) assumem. A ideia é que cada pasta tenha um propósito único e previsível.

```
src/
├── components/
│   ├── ui/          # componentes shadcn/ui gerados (não editar à mão sem motivo)
│   └── <feature>/   # componentes da aplicação, agrupados por feature quando crescem
├── hooks/           # hooks reutilizáveis, um por arquivo (use-algo.ts → useAlgo)
├── lib/             # utilitários sem estado: cn(), formatadores, clients de API
├── pages/           # páginas / rotas da aplicação
├── types/           # tipos e interfaces compartilhados entre módulos
├── content/         # textos da página em JSON, editáveis pelo painel em /admin
└── styles/          # estilos globais, configuração de tokens
```

## Regras de organização

- **Um componente por arquivo.** O nome do arquivo casa com o do componente (`UserCard` → `user-card.tsx`).
- **Co-localize o teste.** `user-card.tsx` ao lado de `user-card.test.tsx`.
- **Promova para pasta de feature** quando um componente acumula subcomponentes, hooks ou tipos próprios:

  ```
  components/checkout/
  ├── checkout-form.tsx
  ├── checkout-form.test.tsx
  ├── use-checkout.ts
  └── types.ts
  ```

- **`lib/` não importa de `components/`.** O fluxo de dependência aponta para baixo: páginas → componentes → hooks → lib.
- **Tipos locais ficam junto do código.** Só sobe para `types/` o que é compartilhado por mais de uma feature.

## shadcn/ui

Componentes gerados via `npx shadcn@latest add <componente>` aterrissam em `src/components/ui/`. Trate-os como código do projeto: pode customizar, mas mantenha a API consistente. Veja a skill `shadcn`.

## Conteúdo

`src/content/site.json` guarda todo o texto visível da página. Componente não carrega texto escrito à mão: ele
importa o JSON e lê o campo. O painel do Decap em `public/admin/config.yml` espelha esse arquivo campo a campo —
ao mexer na estrutura do JSON, mexa no `config.yml` junto, senão o painel apaga o que não conhece ao salvar.

Ficam fora do JSON os textos de acessibilidade e navegação assistiva (`aria-label`, link de pular para o
conteúdo, aviso de "abre em nova aba") e o `<title>` do `index.html`: são estrutura, não conteúdo editável.
