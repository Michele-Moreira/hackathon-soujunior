# Andamento do projeto

Onde cada parte está. Quem mexer numa linha, atualiza o estado dela aqui junto com a entrega.

**Atualizado em:** 17/09/2026 · **Entrega:** 24/09/2026

Estados: `A fazer` · `Em andamento` · `Aguardando verificação` · `Pronto`

---

## Seções da página

Cada seção é um arquivo em `src/components/sections/` e o texto dela é uma chave em `src/content/site.json`.
Hoje todas estão no esqueleto: as caixas existem no lugar certo, com espaço reservado no lugar do conteúdo.

| Seção | Arquivo | Responsável | Estado | O que falta |
|---|---|---|---|---|
| Início | `hero-section.tsx` | Michele | Em andamento | Ajustar ao design final da Ingrid |
| Nossa missão | `mission-section.tsx` | Michele | Em andamento | Ajustar ao design final da Ingrid |
| Atuação | `what-we-do-section.tsx` | Michele | Em andamento | Ajustar ao design final da Ingrid |
| Impacto | `impact-section.tsx` | Cauã | A fazer | Preencher `impact.stats` no `site.json` com os números oficiais e trocar as caixas reservadas pelas caixas de número |
| Financiamento | `funding-section.tsx` | Cauã | A fazer | Preencher `funding.expenses` no `site.json` com os gastos e trocar as caixas reservadas pela exibição dos valores |
| Faça parte | `community-section.tsx` | Michele | Em andamento | Ajustar ao design final da Ingrid |
| Apoie | `support-section.tsx` | Michele | Em andamento | Ajustar ao design final da Ingrid |
| Rodapé | `site-footer.tsx` | Michele | Em andamento | Ajustar ao design final da Ingrid |

Os números oficiais e os gastos de 2026 estão no material extra do hackathon:
https://hackathon.soujunior.tech

---

## Outras frentes

| Frente | Responsável | Estado | Observação |
|---|---|---|---|
| Painel de conteúdo em `/admin` (Decap CMS) | Michele | Aguardando verificação | `fix/cms-login` esperando o Henrique verificar e aceitar |
| Paleta e tokens de cor da SouJunior | Michele | A fazer | Hoje ainda é a paleta cinza padrão do shadcn; cor e responsividade ficam no Tailwind, sem CSS solto |
| Design final das seções | Ingrid | Em andamento | O front ajusta seção por seção quando chegar |
| Casos de teste | Daniel | A fazer | 18 casos em `docs/qa.md`, todos "Não testado" |
| Licença do repositório | Michele | Pronto | MIT |
| README | Michele | Pronto | Atualizar se alguma seção mudar de nome |
| Vídeo de até 5 min | Time | A fazer | Exigido na entrega de 24/09 |

---

## Como entregar uma tarefa

Combinado com o Henrique: ninguém sobe direto na `main`.

1. Avisar no grupo do WhatsApp o que começou, marcando @todos — a banca avalia a participação de cada um.
2. Criar um branch só pra essa tarefa.
3. Fazer os commits e abrir um pull request pro Henrique verificar e aceitar.
4. Voltar aqui e mudar o estado da linha.
