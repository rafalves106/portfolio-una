# Evidências de uso de IA — Portfólio Rafael Martins Alves

Registro dos prompts usados na Fase 2 (Claude Code, implementação), a
resposta da IA e a decisão tomada em cada um, conforme exigido pela
atividade. Baseado na conversa real de desenvolvimento (não reconstruído
depois).

---

### 1. Prompt inicial — construir o site a partir do plano

**Prompt (resumo):** brief do projeto apontando pro `PLANO.md` já
aprovado na Fase 1 (Claude Desktop), pedindo confirmação da direção de
design antes de codificar e a implementação das 4 seções + 4
funcionalidades JS definidas no plano.

**Resposta da IA:** confirmou entendimento da paleta grafite/off-white +
âmbar e dos itens "anti-genérico", e gerou `index.html`, `style.css` e
`script.js`. Tomou 3 decisões pequenas não especificadas no plano e as
declarou explicitamente:
- fonte sans do sistema operacional em vez de Inter via Google Fonts
  (evita dependência externa e flash de fonte);
- botão "mais informações" dos projetos implementado com `<details>/
  <summary>` nativo em vez de link pra página separada (o site é
  single-page);
- formulário de contato sem backend: valida os campos e abre um
  `mailto:` com a mensagem pronta, deixando isso explícito pro usuário
  no próprio formulário.

**Decisão:** **Aproveitado com modificação pontual** — a única
divergência do plano original (Inter → fonte do sistema) foi aceita por
simplificar a entrega sem perder o resultado visual pedido.

---

### 2. "pode fazer um scrap no meu github e buscar os melhores repos para adicionar, sem projetos parecidos"

**Resposta da IA:** consultou a API pública do GitHub, listou os 55
repositórios do perfil, descartou forks e exercícios de curso, e abriu o
conteúdo real (README, árvore de arquivos) dos 4 candidatos mais fortes
antes de recomendar — não confiou só na descrição do repositório.
Resultado:
- recomendou **Projeto-Pokemon** (Java, design patterns, testes JUnit 5
  — nenhum dos projetos já publicados mostrava testes automatizados) e
  **rafas-transportes-app** (React + TypeScript + Java, gestão de
  frota — domínio e stack diferentes dos já publicados);
- descartou **point-gest**, porque a descrição do repo promete uma
  plataforma SaaS completa mas o código só tem autenticação implementada;
- descartou **websec-platform**, porque apesar do nome é um bot pessoal
  de estudo (WhatsApp + IA), não um projeto de segurança — incluir teria
  sido enganoso dado o objetivo profissional declarado no site.

**Decisão:** **Aproveitado (2) e descartado (2)** — as duas recomendações
foram incorporadas ao site como novos cards de projeto; os dois descartes
foram aceitos sem contestação, exatamente como sinalizado pela IA.

---

### 3. "consegue fazer a parte do github pages?"

**Resposta da IA:** ativou o GitHub Pages via API do GitHub na branch
`main`, raiz do repositório, e confirmou o deploy checando o HTTP status
da URL publicada.

**Decisão:** **Aproveitado diretamente**, sem modificação.

---

### 4. "sim sim" (aprovação pra adicionar os 2 projetos recomendados no prompt 2)

**Resposta da IA:** editou o `index.html` acrescentando os 2 novos
cards de projeto e um novo botão de filtro "Java" (que não existia).
Antes de subir pro GitHub, rodou uma checagem automática comparando os
atributos `data-filter` dos botões com os `data-tech` dos cards pra
garantir que nenhum filtro ficaria "morto" — verificação que não tinha
sido pedida, mas evita um bug silencioso de UI.

**Decisão:** **Aproveitado integralmente**, incluindo a verificação
extra proposta pela própria IA.

---

## Resumo

| # | Decisão | Categoria |
|---|---|---|
| 1 | Site inicial (3 arquivos, 4 seções, 4 funcionalidades JS) | Aproveitado com modificação |
| 2 | Curadoria de repositórios do GitHub | Aproveitado (parcial) + descartado (parcial) |
| 3 | Ativação do GitHub Pages | Aproveitado |
| 4 | Adição dos 2 projetos + filtro Java | Aproveitado |

Repositório: https://github.com/rafalves106/portfolio-una
Site publicado: https://rafalves106.github.io/portfolio-una/
