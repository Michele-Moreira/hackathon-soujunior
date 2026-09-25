# Casos de Teste — Landing Page SouJunior

*Projeto:* SquadForce  
*Responsável:* Daniel — QA  
*Objetivo:* Validar funcionalidade, navegação, interface, responsividade, acessibilidade e integridade da Landing Page da SouJunior.

---

## Status dos testes

- Não testado — teste ainda não executado
- Passou — comportamento esperado
- Falhou — comportamento diferente do esperado
- Bloqueado — não foi possível executar
- N/A — não se aplica

---

## Casos de Teste

| ID | Área | Cenário de teste | Passos | Resultado esperado | Status |
|---|---|---|---|---|---|
| CT-001 | Navegação | Validar navegação pelas 7 seções | 1. Acessar a Landing Page<br>2. Clicar em cada item do menu | Os links direcionam para as respectivas seções: Início, Missão, Atuação, Impacto, Financiamento, Faça parte e Apoie | passou |
| CT-002 | Conteúdo | Validar conteúdo das 7 seções | 1. Percorrer toda a Landing Page<br>2. Comparar com README/Figma | As 7 seções estão presentes e seus conteúdos correspondem ao projeto aprovado | passou |
| CT-003 | Figma | Comparar layout com o Figma | 1. Abrir o Figma<br>2. Comparar a Landing Page seção por seção | Layout, tipografia, espaçamentos, imagens, cores e componentes seguem o design definido no Figma | passou |
| CT-004 | Responsividade | Validar resolução de 440px | 1. Abrir DevTools<br>2. Definir largura de 440px<br>3. Percorrer a página | A página se adapta à largura de 440px e não apresenta rolagem horizontal ou elementos cortados | passou |
| CT-005 | Responsividade | Validar resolução de 768px | 1. Abrir DevTools<br>2. Definir largura de 768px<br>3. Percorrer a página | O layout se adapta corretamente e não apresenta rolagem horizontal | passou |
| CT-006 | Responsividade | Validar resolução de 1024px | 1. Abrir DevTools<br>2. Definir largura de 1024px<br>3. Percorrer a página | O layout se adapta corretamente e não apresenta rolagem horizontal | passou |
| CT-007 | Responsividade | Validar resolução de 1280px | 1. Abrir DevTools<br>2. Definir largura de 1280px<br>3. Percorrer a página | O layout se adapta corretamente e não apresenta rolagem horizontal | passou |
| CT-008 | Menu mobile | Validar abertura e fechamento do menu mobile | 1. Abrir a página em largura mobile<br>2. Clicar no botão do menu<br>3. Pressionar Esc<br>4. Abrir novamente e clicar em um link | O menu abre corretamente, fecha ao pressionar Esc e fecha após clicar em um link de navegação | passou |
| CT-009 | Apoie | Validar botão "Apoie a SouJunior" | 1. Acessar a seção Apoie<br>2. Clicar no botão Apoie a SouJunior | O botão direciona corretamente para a página da SouJunior no Apoia.se, conforme definido no projeto | passou |
| CT-010 | Impacto | Validar números apresentados na seção Impacto | 1. Acessar a seção Impacto<br>2. Conferir os números<br>3. Comparar com docs/soujunior_landing_page_numeros.md | Todos os números exibidos na Landing Page correspondem aos valores definidos no documento de referência | passou |
| CT-011 | Carregamento | Validar tela de carregamento | 1. Recarregar a Landing Page<br>2. Observar o carregamento inicial | A tela/animação de carregamento aparece conforme especificado e desaparece após o carregamento da página | passou |
| CT-012 | Animações | Validar animações da Landing Page | 1. Recarregar a página<br>2. Percorrer as 7 seções<br>3. Observar os elementos animados | As animações previstas no projeto são executadas corretamente, sem travamentos, sobreposição ou quebra de layout | passou |
| CT-013 | Acessibilidade | Validar navegação pelo teclado | 1. Acessar a Landing Page<br>2. Utilizar somente a tecla Tab | O foco percorre os elementos interativos em uma ordem lógica e o elemento atualmente focado fica visualmente identificável | passou |
| CT-014 | Admin | Validar salvamento sem alterações | 1. Acessar /admin<br>2. Abrir um conteúdo existente<br>3. Clicar em Salvar sem modificar nada<br>4. Recarregar a página | Nenhum conteúdo existente é apagado ou alterado após salvar sem realizar modificações | passou |
| CT-015 | Integridade | Validar conteúdo após navegação e recarregamento | 1. Percorrer todas as seções<br>2. Acessar links existentes<br>3. Recarregar a página<br>4. Conferir novamente os conteúdos | A página mantém os conteúdos, links, números e estrutura esperados após navegação e recarregamento | passou |

---

## Ambiente de Testes

| Item | Informação |
|---|---|
| Data | 24.09.2026 |
| QA responsável | Daniel |
| Navegador | google chrome |
| Versão do navegador | chrome 145 |
| Sistema operacional | windows 11 |
| Dispositivo | Desktop |
| Resolução / viewport | Full HD (1080p): 1920 x 1080 pixels |
| URL testada | https://www.soujunior.tech/ |
| Branch | https://github.com/Michele-Moreira/hackathon-soujunior/pull/37 |

---

## Resumo da Execução

| Indicador | Quantidade |
|---|---:|
| Total de casos | 15 |
| Executados | 0 |
| Passou | 15 |
| Falhou | 0 |
| Bloqueado | 0 |
| N/A | 0 |
| Bugs encontrados | 0 |

---

## Registro de Bugs

Quando um caso apresentar resultado diferente do esperado, registrar:

| Bug ID | Caso de Teste | Área | Descrição | Resultado esperado | Resultado atual | Severidade | Status |
|---|---|---|---|---|---|---|---|
| BUG-001 | | | | | | | |

---

## Regra para testes que falharem

Quando um teste apresentar comportamento diferente do esperado:

1. Alterar o status para Falhou.
2. Tirar um print ou gravar um vídeo.
3. Anotar navegador, dispositivo e resolução.
4. Registrar os passos para reproduzir o problema.
5. Registrar o resultado esperado.
6. Registrar o resultado atual.
7. Criar um bug no arquivo bugs.md ou Issue do GitHub.
8. Após a correção, executar o teste novamente.
9. Se funcionar, marcar como Passou.
10. Se continuar com problema, marcar como Reaberto.

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
