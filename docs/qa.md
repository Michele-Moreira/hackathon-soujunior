# Casos de Teste — Landing Page SouJunior

**Projeto:** SquadForce  
**Responsável:** Daniel — QA  
**Objetivo:** Validar a funcionalidade, navegação, interface, responsividade, acessibilidade e fluxo principal da Landing Page da SouJunior.

---

## Status dos testes

- `Não testado` — teste ainda não executado
- `Passou` — comportamento esperado
- `Falhou` — comportamento diferente do esperado
- `Bloqueado` — não foi possível executar
- `N/A` — não se aplica

---

## Casos de Teste

| ID | Categoria | Caso de teste | Pré-condição | Passos | Resultado esperado | Prioridade | Tipo | Status |
|---|---|---|---|---|---|---|---|---|
| QA-001 | Funcional | Carregamento da Landing Page | Internet disponível | 1. Abrir o site da SouJunior | Página abre sem erro e o conteúdo principal é exibido | Alta | Smoke | Não testado |
| QA-002 | UI | Logo SouJunior | Página aberta | 1. Localizar o logo no topo<br>2. Verificar carregamento | Logo aparece corretamente, sem imagem quebrada | Média | UI | Não testado |
| QA-003 | Navegação | Menu "Sobre Nós" | Página aberta | 1. Clicar em "Sobre Nós" | Usuário é levado ao destino correto | Alta | Funcional | Não testado |
| QA-004 | Navegação | Menu "Nossas Iniciativas" | Página aberta | 1. Clicar em "Nossas Iniciativas" | Usuário é levado ao destino correto | Alta | Funcional | Não testado |
| QA-005 | Navegação | Menu "Depoimentos" | Página aberta | 1. Clicar em "Depoimentos" | Usuário é levado à seção correta | Média | Funcional | Não testado |
| QA-006 | Navegação | Menu "Faça Parte" | Página aberta | 1. Clicar em "Faça Parte" | Usuário é levado ao destino correto | Alta | Funcional | Não testado |
| QA-007 | CTA | Botão "Apoie a SouJunior" | Página aberta | 1. Localizar o botão<br>2. Clicar no botão | Usuário é direcionado para o destino correto | Alta | Funcional | Não testado |
| QA-008 | UI | Seção inicial / Hero | Página aberta | 1. Verificar título<br>2. Verificar subtítulo<br>3. Verificar imagem principal | Textos estão legíveis, alinhados e imagem é carregada corretamente | Alta | UI | Não testado |
| QA-009 | UI | Seção "Ajude a impulsionar carreiras" | Página aberta | 1. Rolar até a seção<br>2. Conferir textos e imagens | Seção é exibida corretamente, sem sobreposição ou conteúdo cortado | Média | UI | Não testado |
| QA-010 | UI | Áreas de atuação | Página aberta | 1. Rolar até "Áreas de atuação"<br>2. Conferir cards/itens | Cards e informações são exibidos corretamente | Média | UI | Não testado |
| QA-011 | Funcional | Carrossel de áreas — Próximo | Página aberta | 1. Localizar carrossel<br>2. Clicar em "Próximo" | Carrossel avança corretamente | Média | Funcional | Não testado |
| QA-012 | Funcional | Carrossel de áreas — Anterior | Carrossel disponível | 1. Avançar o carrossel<br>2. Clicar em "Anterior" | Carrossel retorna corretamente | Baixa | Funcional | Não testado |
| QA-013 | UI | Seção de depoimentos | Página aberta | 1. Rolar até "Depoimentos"<br>2. Verificar conteúdo | Depoimentos, nomes, cargos e imagens são exibidos corretamente | Média | UI | Não testado |
| QA-014 | Funcional | Navegação dos depoimentos | Página aberta | 1. Localizar controles<br>2. Navegar entre os depoimentos | Os itens mudam corretamente e não ficam sobrepostos | Média | Funcional | Não testado |
| QA-015 | Navegação | Categorias "Sou Júnior", "Sou Mentor", "Sou Apoiador" e "Sou Head" | Página aberta | 1. Rolar até "Faça você também parte"<br>2. Clicar em cada categoria | Cada categoria apresenta ou abre o conteúdo correspondente | Alta | Funcional | Não testado |
| QA-016 | Funcional | Política de Privacidade | Página aberta | 1. Localizar "Políticas de Privacidade"<br>2. Clicar | Política é aberta no destino correto | Média | Funcional | Não testado |
| QA-017 | Funcional | Banner de cookies/políticas | Banner visível | 1. Clicar em "Aceitar políticas" | Banner é fechado e não bloqueia a navegação | Alta | Funcional | Não testado |
| QA-018 | CTA | Botão "Divulgador" | Página aberta | 1. Rolar até a área correspondente<br>2. Clicar no botão | Usuário é direcionado ao destino correto | Alta | Funcional | Não testado |
| QA-019 | CTA | Especialistas interessados em palestrar | Página aberta | 1. Localizar botão<br>2. Clicar | Usuário é direcionado ao destino correto | Alta | Funcional | Não testado |
| QA-020 | CTA | Recrutadores e consultores de carreira | Página aberta | 1. Localizar botão<br>2. Clicar | Usuário é direcionado ao destino correto | Alta | Funcional | Não testado |
| QA-021 | CTA | Empresas interessadas em contratar | Página aberta | 1. Localizar botão<br>2. Clicar | Usuário é direcionado ao destino correto | Alta | Funcional | Não testado |
| QA-022 | CTA | Link "Acesse nosso Apoia-se" | Página aberta | 1. Rolar até "Seja um financiador"<br>2. Clicar no link | Link abre o Apoia-se correto da SouJunior | Crítica | Funcional | Não testado |
| QA-023 | Navegação | Links do rodapé | Página aberta | 1. Rolar até o rodapé<br>2. Testar os principais links | Cada link leva ao destino correto | Alta | Funcional | Não testado |
| QA-024 | Navegação | Botão "Voltar para o topo" | Página rolada | 1. Rolar até o final<br>2. Clicar em "Voltar para o topo" | Página retorna corretamente ao topo | Média | Funcional | Não testado |
| QA-025 | Responsividade | Celular — 360x800 | Página aberta | 1. Abrir DevTools<br>2. Usar resolução 360x800<br>3. Navegar pela página | Não existe rolagem horizontal indevida, textos permanecem legíveis e botões acessíveis | Crítica | Responsivo | Não testado |
| QA-026 | Responsividade | Celular — 390x844 | Página aberta | 1. Abrir DevTools<br>2. Usar resolução 390x844<br>3. Navegar pela página | Layout se adapta corretamente e não existem elementos cortados | Alta | Responsivo | Não testado |
| QA-027 | Responsividade | Celular — 412x915 | Página aberta | 1. Abrir DevTools<br>2. Usar resolução 412x915<br>3. Navegar pela página | Layout se adapta corretamente | Média | Responsivo | Não testado |
| QA-028 | Responsividade | Notebook — 1366x768 | Página aberta | 1. Abrir DevTools<br>2. Usar resolução 1366x768<br>3. Navegar pela página | Layout, textos, imagens e navegação permanecem corretos | Alta | Responsivo | Não testado |
| QA-029 | Acessibilidade | Navegação por teclado e foco | Página aberta | 1. Usar tecla Tab<br>2. Observar elementos com foco<br>3. Usar Enter nos controles | Elementos interativos recebem foco visível e podem ser acionados pelo teclado quando aplicável | Média | Acessibilidade | Não testado |
| QA-030 | E2E | Fluxo principal do usuário | Página aberta | 1. Abrir Landing Page<br>2. Navegar pelo menu<br>3. Ir para "Faça Parte"<br>4. Testar CTA principal<br>5. Voltar ao topo | Fluxo principal funciona sem erros, links quebrados ou bloqueios | Crítica | E2E | Não testado |

---

## Ambiente de Testes

Preencher durante a execução:

| Item | Informação |
|---|---|
| Data | |
| QA responsável | Daniel |
| Navegador | |
| Versão do navegador | |
| Sistema operacional | |
| Dispositivo | |
| Resolução / viewport | |
| URL testada | https://www.soujunior.tech/ |

---

## Resumo da Execução

| Indicador | Quantidade |
|---|---:|
| Total de casos | 30 |
| Executados | |
| Passou | |
| Falhou | |
| Bloqueado | |
| N/A | |
| Bugs encontrados | |

---

## Regra para testes que falharem

Quando um teste apresentar comportamento diferente do esperado:

1. Alterar o status para `Falhou`.
2. Tirar um print ou gravar um vídeo.
3. Anotar navegador, dispositivo e resolução.
4. Registrar os passos para reproduzir o problema.
5. Registrar o resultado esperado.
6. Registrar o resultado atual.
7. Criar um bug no arquivo `bugs.md` ou Issue do GitHub.
8. Após a correção, executar o teste novamente.
9. Se funcionar, marcar como `Passou`.
10. Se continuar com problema, marcar como `Reaberto`.

---

## Prioridades

### Crítica
Problema que impede o usuário de realizar uma função essencial ou acessar o fluxo principal.

### Alta
Problema importante que afeta uma funcionalidade relevante.

### Média
Problema que afeta parte da experiência, mas possui alternativa ou impacto moderado.

### Baixa
Problema visual ou funcional de baixo impacto.
