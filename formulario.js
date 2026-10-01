// Formulário de cadastro — Instituto Rede EcoAção
// Como esta página não tem um servidor real por trás (action="#"),
// o script apenas confirma que os campos são válidos e exibe a
// mensagem de sucesso, simulando o retorno de um envio bem-sucedido.

(function () {
  const formulario = document.querySelector("form");
  const mensagem = document.querySelector(".mensagem-formulario");

  if (!formulario || !mensagem) return;

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    if (formulario.checkValidity()) {
      mensagem.hidden = false;
      mensagem.textContent =
        "Cadastro enviado com sucesso! Em breve entraremos em contato.";
      mensagem.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
      mensagem.hidden = true;
    }
  });
})();
