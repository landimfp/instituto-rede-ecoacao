# Instituto Rede EcoAção

Site institucional de uma ONG fictícia, desenvolvido como atividade acadêmica de HTML e CSS. Reúne três páginas (Início, Projetos e Cadastro) com HTML semântico, Design System em variáveis CSS, layout responsivo, navegação acessível e formulário de cadastro de voluntários.

## Tecnologias

- **HTML5 semântico:** `header`, `nav`, `main`, `section`, `article`, `figure`, `fieldset` e `legend`, sem uso de `<div>`.
- **CSS3:** variáveis CSS (`:root`), CSS Grid de 12 colunas, media queries e estados de interação (`:hover`, `:focus-visible`, `:disabled`, `:user-valid`, `:user-invalid`).
- **JavaScript (vanilla):** menu hambúrguer e validação com mensagem de sucesso, sem bibliotecas.
- **Git e GitHub:** GitFlow, Conventional Commits, issues, milestones, pull requests e releases.

## Funcionalidades

- Três páginas: Início, Projetos e Cadastro.
- Menu com dropdown (`:hover` e `:focus-within`) e menu hambúrguer com `aria-expanded`.
- Formulário com validação nativa (`required`, `pattern`, tipos de `input`) e mensagem de sucesso com `aria-live`.
- Banners com texto alternativo (`alt`) descritivo.
- Layout responsivo com 5 breakpoints: 1280, 1024, 768, 600 e 400 px.

## Design System

- **Cores:** paleta primária, secundária, neutras e funcionais, com contrastes verificados pelo padrão WCAG e proporção de uso 60/30/10.
- **Tipografia:** escala de 5 níveis em `rem`.
- **Espaçamento:** escala modular, além de raio de borda, sombras e transições.

## Pré-requisitos

- Um navegador atual (Chrome, Firefox, Edge ou Safari).
- Opcional: Git, para clonar o repositório.

Não é necessário Node.js, gerenciador de pacotes nem servidor.

## Instalação e execução

```bash
git clone https://github.com/landimfp/instituto-rede-ecoacao.git
cd instituto-rede-ecoacao
```

Abra o arquivo `index.html` no navegador (duplo clique). Não há dependências para instalar.

## Build

O projeto não usa etapa de build: os arquivos são publicados como estão.

## Testes

Não há testes automatizados. A verificação é manual:

- Navegar pelas três páginas e testar o menu (mouse, teclado e tela estreita).
- Preencher o formulário com dados válidos e inválidos.
- Redimensionar a janela para conferir os breakpoints.
- Validar o HTML em https://validator.w3.org.

## Estrutura do projeto

```
index.html          Página inicial
projetos.html       Página de projetos
cadastro.html       Página de cadastro
design-system.css   Variáveis CSS (cores, tipografia, espaçamento)
style.css           Estilos das páginas e grid responsivo
menu.js             Menu dropdown e hambúrguer
formulario.js       Validação e mensagem de sucesso do formulário
img/                Banners das páginas
```

## Fluxo de desenvolvimento

O repositório segue o GitFlow:

- `main`: versões de lançamento, marcadas por tag.
- `develop`: integração do desenvolvimento contínuo.
- `feature/*`: uma branch por funcionalidade, integrada por pull request.

Os commits seguem Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`). A versão atual é a **v1.0.1**, com versionamento semântico (MAJOR.MINOR.PATCH).

## Autoria

Desenvolvido por landimfp, como atividade acadêmica.
