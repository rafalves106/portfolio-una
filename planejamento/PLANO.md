# Plano — Portfólio Rafael Martins Alves

Status: COMPLETO

> Adaptado do fluxo Fase 1 (Claude Desktop) / Fase 2 (Claude Code) do
> `GUIA_FLUXO_PROJETOS.md`, sem os campos específicos de saúde/estética
> (não se aplicam aqui) — mantendo o princípio: Desktop decide, nunca
> codifica; Code implementa a decisão recebida, sem redecidir posicionamento.

## 1. Estudante

- Nome: Rafael Martins Alves
- Curso/instituição: Ciência da Computação — UNA Aimorés, Belo Horizonte
- Área de interesse: Fullstack (.NET + React), rumo a Web Security Engineer

## 2. Tema e objetivo

- Tema: Portfólio de desenvolvedor
- Objetivo do site: currículo profissional / peça de apresentação pra
  recrutadores, professores e rede profissional (LinkedIn)
- Público: recrutadores técnicos, professores, contatos profissionais —
  linguagem direta, sem informalidade excessiva

## 3. Direção de Design (proposta do Claude Desktop)

**Paleta sugerida:**
- Base clara: off-white quente `#FAF9F6` (não branco puro — evita
  sensação de template padrão)
- Texto/contraste: grafite quase-preto `#1C1C1C`
- Acento: âmbar queimado `#C9762B`
- Modo escuro (pro toggle claro/escuro exigido): grafite `#171717` como
  base, mesmo âmbar como acento — consistência de marca entre os dois modos

Racional: portfólio de dev tem um default muito forte — gradiente
roxo-pra-azul no hero, "Hi, I'm ___ 👋", ícones de skill em círculo com
gradiente. Nada disso combina com o perfil real (4 anos de design gráfico
+ visão de produto + arquitetura .NET/React + mira em segurança). Âmbar
sobre grafite/off-white foge do roxo-azul saturado, tem peso mais técnico
e editorial, e ainda funciona bem em light/dark sem trocar de identidade.

**Tipografia sugerida:**
- Headline/texto corrido: sans neutra e legível (Inter ou similar)
- Tags de tecnologia (React, C#, .NET, etc.): fonte monoespaçada em
  pequena escala — textura "código" sutil, sem cair no cliché
  terminal-verde-matrix de "portfólio hacker"

**Anti-genérico (evitar por padrão):**
- Gradiente roxo→azul de fundo no hero
- Saudação "Hi, I'm [nome] 👋"
- Grid de skills em ícone-círculo todos do mesmo tamanho
- Estética "terminal/matrix" pro tema de segurança — é o primeiro instinto
  óbvio e todo portfólio de segurança júnior já usa
- Foto de perfil circular com anel gradiente

## 4. Estrutura do site (seções obrigatórias)

1. **Início/apresentação** — nome, curso, apresentação breve, área de
   interesse, objetivo profissional
2. **Sobre mim** — interesses, habilidades, tecnologias em estudo,
   objetivos acadêmicos/profissionais
3. **Projetos** — mínimo 3, cada um com título, descrição, tecnologias,
   link, botão "mais informações"
4. **Contato** — GitHub, LinkedIn, e-mail (sem telefone pessoal/endereço)

## 5. Conteúdo bruto

**Apresentação (hero):**
Graduando em Ciência da Computação com foco em Desenvolvimento Fullstack
(.NET e React). Objetivo profissional: aprofundar-se em arquitetura de
software, boas práticas e segurança (versão genérica escolhida no lugar de
citar "Web Security Engineer" explicitamente).

**Sobre mim:**
"Com mais de 4 anos de experiência prévia como Designer Gráfico, possuo um
olhar apurado para UI/UX e visão de produto, o que me permite construir
interfaces Front-end não apenas funcionais, mas altamente intuitivas e
centradas na experiência do usuário. Atualmente, atuo na sustentação e
desenvolvimento de projetos de larga escala (Grupo Fleury), aplicando
arquitetura hexagonal e DDD com .NET, React e Dart. Sou proativo e busco
aprimoramento contínuo em arquitetura de software, boas práticas e
segurança."

Competências técnicas:
- Linguagens: C#, TypeScript, Java, Dart, SQL, HTML5, CSS3
- Frameworks: .NET, React, Flutter
- Ferramentas: Git/GitHub, Postman, Swagger, Azure, Kanban
- Idiomas: Inglês — nível avançado

Experiência:
- **DTI Sistemas** — Desenvolvedor Estagiário (Mar/2026–atual). Squad de
  sustentação de projetos do Grupo Fleury: resolução de bugs, code
  reviews, homologação, publicação de atualizações, integração/orquestração
  de agentes de IA, boas práticas em ambiente de alta criticidade.
- **D2F Comunicação** (BH/MG) — Designer Gráfico (Jul/2020–Jan/2025).
  Logomarcas e identidade visual, sites em WordPress, 100+ projetos de web
  design/design gráfico, levantamento de requisitos com cliente, gestão de
  prazos.

Cursos/atividades complementares: HTML5 (40h) — Curso em Vídeo
Vivência internacional: aprimoramento de idioma — Estados Unidos, 2020

**Projetos (mínimo 3 — imagens/screenshots pendentes, cards seguem só com
texto/tags de tecnologia até chegarem):**

1. **Gym API — Arquitetura Hexagonal em .NET**
   Tecnologias: .NET, C#, arquitetura limpa/hexagonal
   Descrição: API REST em .NET estruturada em camadas bem definidas
   (Application, Domain, Infrastructure, WebApi), aplicando separação de
   responsabilidades e independência de framework — demonstração de boas
   práticas arquiteturais em backend.
   Link: `https://github.com/rafalves106/Gym`

2. **Finances Clean — Gestão de Finanças Pessoais**
   Tecnologias: React + Vite, ASP.NET Core (.NET 10), PostgreSQL 16,
   Docker Compose
   Descrição: aplicação full-stack pra controlar movimentações,
   investimentos, metas e custos de veículos. API RESTful com Swagger,
   autenticação JWT, health checks, e ambiente pronto pra dev local via
   Docker Compose — inclui runbooks de migração de banco pensados pra
   produção/staging.
   Link: `https://github.com/rafalves106/finances-clean`

3. **Recomenda.AI — Motor de Recomendação para E-commerce**
   Tecnologias: React 18, TypeScript, Vite, Tailwind, Zustand (frontend);
   Python, FastAPI, SQLAlchemy (backend)
   Descrição: sistema acadêmico de recomendação personalizada baseado em
   IA, com motor híbrido em 3 camadas (popularidade global, coocorrência
   item-item, perfil do usuário) pra sugerir produtos em tempo real.
   Inclui dashboard administrativo com métricas e simulação de 50
   usuários com perfis comportamentais distintos.
   Link: `https://github.com/rafalves106/recomendai`

**Contato:**
- GitHub: `github.com/rafalves106`
- LinkedIn: `linkedin.com/in/falves-dev`
- E-mail: `rafalves106@icloud.com`
- Sem telefone pessoal, endereço ou documento — não publicar (regra da
  própria atividade)

## 6. Funcionalidades JavaScript (mínimo 1 exigido — alvo: 4)

- Dark/Light mode toggle
- Filtro de projetos (por tecnologia)
- Botão "voltar ao topo"
- Validação de formulário de contato (sem backend real — front-end only)

## 7. Requisitos técnicos obrigatórios

- Arquivos: `index.html`, `style.css`, `script.js`
- Responsivo (mobile + desktop)
- Publicação via GitHub Pages
- Sem dado pessoal sensível (endereço, documento, telefone pessoal)

## 8. Pendências (não bloqueiam Status: COMPLETO, mas seguem em aberto)

- [ ] Imagens/screenshots dos 3 projetos (Gym, Finances Clean, Recomenda.AI)
      — decisão: seguir só com texto/tags de tecnologia até chegarem, sem
      travar a publicação por causa disso

## 9. Lembrete — evidências de uso de IA (exigência da atividade)

A entrega da faculdade pede o registro de pelo menos 3 prompts usados,
resposta da IA e decisão tomada (aproveitou/modificou/descartou). Isso é
gerado durante a Fase 2 (Claude Code), a partir da conversa real de
desenvolvimento — não dá pra preencher aqui na Fase 1. Lembrete pra não
esquecer na entrega final.
