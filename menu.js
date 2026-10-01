// Menu de navegação — Instituto Rede EcoAção
// Controla a abertura/fechamento do menu no formato mobile
// (abaixo de 700px) e mantém os atributos de acessibilidade
// (aria-expanded, aria-label) sincronizados com o estado visual.

(function () {
  const navBar = document.querySelector(".nav-bar");
  const botao = document.querySelector(".menu-toggle");

  if (!navBar || !botao) return;

  function definirEstado(aberto) {
    navBar.classList.toggle("menu-aberto", aberto);
    botao.setAttribute("aria-expanded", String(aberto));
    botao.setAttribute(
      "aria-label",
      aberto ? "Fechar menu de navegação" : "Abrir menu de navegação"
    );
  }

  function estaAberto() {
    return navBar.classList.contains("menu-aberto");
  }

  // Alterna o menu ao clicar no botão hambúrguer.
  botao.addEventListener("click", function () {
    definirEstado(!estaAberto());
  });

  // Fecha o menu ao selecionar qualquer link dentro dele.
  navBar.querySelectorAll(".nav-menu a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (estaAberto()) definirEstado(false);
    });
  });

  // Fecha o menu ao clicar fora da barra de navegação.
  document.addEventListener("click", function (evento) {
    if (estaAberto() && !navBar.contains(evento.target)) {
      definirEstado(false);
    }
  });

  // Fecha o menu ao pressionar a tecla Escape.
  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape" && estaAberto()) {
      definirEstado(false);
      botao.focus();
    }
  });
})();
